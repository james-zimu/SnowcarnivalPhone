# scaffolding

# 冰雪嘉年华

# SnowcarnivalPhone

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### 数据库设计

- 需求分析

  - 首页模块（sc_home_page）：
    - 属性：唯一 id 名，图片，标题，内容
    - 存储特点：不用永久存储（图片，标题，内容可替换）
  - 商品模块（sc_carrental,sc_hotel,sc_ticket）
    - 属性：唯一 id 名，商品名称，商品图片，商品价格，商品分类，商品剩余数量
    - 存储特点：不用永久存储（商品可以更新）
  - 购物车模块（sc_car）
    - 属性：唯一 id 名，用户名，图片，商品名，价格，数量
    - 存储特点：不用永久存储（购物车内商品及数量可以增加，删除，修改）
  - 用户模块（sc_user）
    - 属性：唯一 id 名，用户名称，密码（md5 加密），手机号，头像
    - 存储特点：永久存储
  - 社区模块（sc_community）
    - 属性：唯一 id 名，图片，标题，内容
    - 存储特点：非永久存储
  - 帖子及评论模块（sc_share,sc_remark）
    - 属性：唯一 id 名，用户名称，用户头像，评论详情，帖子内容，点赞数量
    - 存储特点：非永久存储
  - ..........

- 逻辑设计（ER 图）

  ![ER图](https://urlify.cn/VZb2qq)

- 物理设计

  - mysql 数据库
  - 图形化操作软件（Workbench,navicat）

- 维护设计

  - 后期根据功能扩展
  - ..........

#### 后台 API 列表

|    接口响应类型    |      接口名称       |                对应描述                |
| :----------------: | :-----------------: | :------------------------------------: |
|    商品模块接口    |                     |                                        |
|        get         |       /hotel        | 返回获取的酒店详情（名称，价格，图片） |
|        post        |       /addcar       |          添加酒店订单到购物车          |
|        get         |       /ticket       |           返回获取的门票详情           |
|        get         |     /carrental      |         返回获取的车辆商品详情         |
|        post        |   /carrentalshop    |          添加车辆订单到购物车          |
|    用户模块接口    |                     |                                        |
|        post        |      /register      |              用户注册接口              |
|        post        |       /login        |              用户登录接口              |
|   购物车模块接口   |                     |                                        |
|        get         |       /getcar       |      返回获取的购物车所有订单详情      |
|        get         |       /total        |      返回后台计算的购物车商品总价      |
|        get         | /addnum\|\|/lessnum | 根据用户对商品数量的操作数据库随之更新 |
|        post        |   /shopcardelete    |       删除用户要删除的购物车商品       |
|      日程接口      |                     |                                        |
|        post        |   /scheduledelete   |                删除日程                |
|        get         |      /schedule      |                获取日程                |
|        post        |      /schedule      |                添加日程                |
| 社区及评论界面接口 |                     |                                        |
|        get         |     /fcategory      |          获取底部的广告及内容          |
|        post        |       /remark       |             保存用户的评论             |
|        get         |      /article       |           获取用户发表的文章           |
|        get         |      /beforrem      |   获取当前请求的网页的留言和评论内容   |
|        get         |      /everyone      |       请求当前页面用户发表的内容       |
|        get         |     /community      |            请求社区主要内容            |
|      .......       |                     |                                        |

#### 前端功能描述

- 首页

  > 主要集合所有功能，分区导航等，并能实现向其它功能跳转，主要分布合理，美观。

- 社区

  > 主要为用户提供嘉年华推荐和交流的板块。

- 购物车

  > 主要将用户预定的酒店/车辆/门票等信息集合起来并进行结算。

- 行程

  > 主要针对用户参加嘉年华的行程做一个列表提醒，并带有日历功能。

- 我的

  > 主要获取用户的基本信息，而且集合注册登录功能。

#### 前端职责划分

- 纵向开发（开发模式）
- 后台接口和界面为一个模块由同一个人开发
- 分工明确，开发效率高
- ...........
