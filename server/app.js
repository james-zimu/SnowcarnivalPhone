// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

//加载body-parser模块
const bodyParser = require('body-parser')


// 创建MySQL连接池
const pool = mysql.createPool({
    host: '', //MySQL服务器地址
    port: , //MySQL服务器端口号
    user: 'root', //数据库用户的用户名
    password: '', //数据库用户密码
    database: '', //数据库名称
    connectionLimit: 20, //最大连接数
    charset: 'utf8' //数据库服务器的编码方式
});

// 创建服务器对象
const server = express();

server.use(bodyParser.urlencoded({
    extended: false
}));



// 加载CORS模块
const cors = require('cors');

// 使用CORS中间件
server.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));


// 指定服务器对象监听的端口号
server.listen(3000, () => {
    console.log('server is running...');
});