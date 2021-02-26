/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100128
 Source Host           : localhost:3306
 Source Schema         : sc

 Target Server Type    : MySQL
 Target Server Version : 100128
 File Encoding         : 65001

 Date: 22/02/2021 09:17:22
*/
DROP DATABASE  IF EXISTS `SnowcarnivalPhone`;

CREATE DATABASE IF  NOT EXISTS  `SnowcarnivalPhone` DEFAULT  CHARACTER SET ‘utf8mb4’;

USE `SnowcarnivalPhone`;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sc_address
-- ----------------------------
DROP TABLE IF EXISTS `sc_address`;
CREATE TABLE `sc_address`  (
  `aid` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(16) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户编号',
  `rece_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '接收人姓名',
  `province` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '省',
  `city` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '市',
  `county` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '县',
  `address` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '详细地址',
  `cell_phone` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '手机号',
  `is_default` tinyint(1) NULL DEFAULT NULL COMMENT '是否为默认收获地址',
  PRIMARY KEY (`aid`) USING BTREE,
  CONSTRAINT `aid_` FOREIGN KEY (`aid`) REFERENCES `sc_user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sc_address
-- ----------------------------

-- ----------------------------
-- Table structure for sc_car
-- ----------------------------
DROP TABLE IF EXISTS `sc_car`;
CREATE TABLE `sc_car`  (
  `cid` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(16) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户编号',
  `product_id` int NULL DEFAULT NULL COMMENT '商品编号',
  `count` int NULL DEFAULT NULL COMMENT '购买数量',
  PRIMARY KEY (`cid`) USING BTREE,
  CONSTRAINT `_cid` FOREIGN KEY (`cid`) REFERENCES `sc_shop` (`lid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `cid_` FOREIGN KEY (`cid`) REFERENCES `sc_user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sc_car
-- ----------------------------

-- ----------------------------
-- Table structure for sc_index_carousel
-- ----------------------------
DROP TABLE IF EXISTS `sc_index_carousel`;
CREATE TABLE `sc_index_carousel`  (
  `cid` int NOT NULL AUTO_INCREMENT,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '图片路径',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '图片描述',
  `href` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '图片链接',
  PRIMARY KEY (`cid`) USING BTREE,
  CONSTRAINT `cid` FOREIGN KEY (`cid`) REFERENCES `sc_shop` (`lid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sc_index_carousel
-- ----------------------------

-- ----------------------------
-- Table structure for sc_order
-- ----------------------------
DROP TABLE IF EXISTS `sc_order`;
CREATE TABLE `sc_order`  (
  `aid` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(16) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户编号',
  `addres_id` int NULL DEFAULT NULL COMMENT '地址编号',
  `status` int NULL DEFAULT NULL COMMENT '订单状态 1-等待付款\r\n2-等待发货3-运输中4-已签收5-已取货',
  `order_time` bigint NULL DEFAULT NULL COMMENT '下单时间',
  `pay_time` bigint NULL DEFAULT NULL COMMENT '付款时间',
  `deliver_time` bigint NULL DEFAULT NULL COMMENT '发货时间',
  `rece_time` bigint NULL DEFAULT NULL COMMENT '签收时间',
  PRIMARY KEY (`aid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sc_order
-- ----------------------------

-- ----------------------------
-- Table structure for sc_order_detail
-- ----------------------------
DROP TABLE IF EXISTS `sc_order_detail`;
CREATE TABLE `sc_order_detail`  (
  `did` int NOT NULL AUTO_INCREMENT,
  `order_id` int NULL DEFAULT NULL COMMENT '订单编号',
  `product_id` int NULL DEFAULT NULL COMMENT '商品编号',
  `count` int NULL DEFAULT NULL COMMENT '购买数量',
  PRIMARY KEY (`did`) USING BTREE,
  CONSTRAINT `did_` FOREIGN KEY (`did`) REFERENCES `sc_order` (`aid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sc_order_detail
-- ----------------------------

-- ----------------------------
-- Table structure for sc_schedule
-- ----------------------------
DROP TABLE IF EXISTS `sc_schedule`;
CREATE TABLE `sc_schedule`  (
  `sid` int NOT NULL AUTO_INCREMENT,
  `uid` int NULL DEFAULT NULL COMMENT '用户id',
  `udate` date NULL DEFAULT NULL COMMENT '日期',
  `udetail` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '日程详情',
  PRIMARY KEY (`sid`) USING BTREE,
  CONSTRAINT `sid_` FOREIGN KEY (`sid`) REFERENCES `sc_user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sc_schedule
-- ----------------------------

-- ----------------------------
-- Table structure for sc_shop
-- ----------------------------
DROP TABLE IF EXISTS `sc_shop`;
CREATE TABLE `sc_shop`  (
  `lid` int NOT NULL AUTO_INCREMENT,
  `family_id` int NULL DEFAULT NULL COMMENT '种类编号',
  `product_id` int NULL DEFAULT NULL COMMENT '商品编号',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '标题',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '价格',
  `details` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '商品详细说明',
  PRIMARY KEY (`lid`) USING BTREE,
  CONSTRAINT `lid_` FOREIGN KEY (`lid`) REFERENCES `sc_shop_family` (`fid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sc_shop
-- ----------------------------

-- ----------------------------
-- Table structure for sc_shop_family
-- ----------------------------
DROP TABLE IF EXISTS `sc_shop_family`;
CREATE TABLE `sc_shop_family`  (
  `fid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(16) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '类别名称',
  PRIMARY KEY (`fid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sc_shop_family
-- ----------------------------

-- ----------------------------
-- Table structure for sc_shop_pic
-- ----------------------------
DROP TABLE IF EXISTS `sc_shop_pic`;
CREATE TABLE `sc_shop_pic`  (
  `pid` int NOT NULL AUTO_INCREMENT,
  `shop_id` int NULL DEFAULT NULL COMMENT '商品编号',
  `images` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '商品图像路径',
  PRIMARY KEY (`pid`) USING BTREE,
  CONSTRAINT `pid_` FOREIGN KEY (`pid`) REFERENCES `sc_shop` (`lid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sc_shop_pic
-- ----------------------------

-- ----------------------------
-- Table structure for sc_user
-- ----------------------------
DROP TABLE IF EXISTS `sc_user`;
CREATE TABLE `sc_user`  (
  `uid` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `uname` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户名',
  `upwd` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户密码',
  `email` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户邮箱',
  `phone` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户手机号',
  `gender` int NULL DEFAULT NULL COMMENT '用户性别 0--女 1--男',
  `nick_name` varchar(16) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '头像图片路径',
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sc_user
-- ----------------------------

-- ----------------------------
-- Table structure for sc_words
-- ----------------------------
DROP TABLE IF EXISTS `sc_words`;
CREATE TABLE `sc_words`  (
  `wid` int NOT NULL AUTO_INCREMENT,
  `uid` int NULL DEFAULT NULL COMMENT '用户id',
  `words` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '评论',
  PRIMARY KEY (`wid`) USING BTREE,
  CONSTRAINT `wid_` FOREIGN KEY (`wid`) REFERENCES `sc_user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sc_words
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
