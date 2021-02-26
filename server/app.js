// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

//加载body-parser模块
const bodyParser = require('body-parser')


// 创建MySQL连接池
const pool = mysql.createPool({
    host: '172.88.17.37', //MySQL服务器地址
    port: 3306, //MySQL服务器端口号
    user: 'root', //数据库用户的用户名
    password: '12345678', //数据库用户密码
    database: 'SnowcarnivalPhone', //数据库名称
    connectionLimit: 20, //最大连接数
    // charset: 'utf8' //数据库服务器的编码方式
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

//获取日程接口
server.get('/schedule', (req, res) => {
    // SQL语句以获取分类表的数据
    let sql = 'SELECT sid,uid,udate,udetail FROM sc_schedule ORDER BY sid';
    // 执行SQL语句
    pool.query(sql, (error, results) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200, results: results });
        // console.log(results);
    });
});

//获取租车接口接口
server.get('/carrental', (req, res) => {
    // SQL语句以获取分类表的数据
    let sql1 = 'SELECT rid,img,price,classification FROM sc_carrental1 ORDER BY rid';
    // 执行SQL语句
    pool.query(sql1, (error, results) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200, results: results });
        // console.log(results);
    });
});

//完成日程添加接口
server.post('/schedule', (req, res) => {
    //获取时间信息和输入信息
    let udate = req.body.udate;
    let udetail = req.body.udetail;
    // console.log(udetail, udate);
    // 导入数据库的sql语句
    let sql = 'INSERT INTO sc_schedule(udate,udetail) VALUES(?,?)'
    pool.query(sql, [udate, udetail], (error, results) => {
        // if (error) throw error;
        res.send({ message: 'ok', code: 200 });
    })
});

//删除前端需要删除的数据选项
server.post('/scheduledelete', (req, res) => {
    //获取到前端发来的sid值
    let sid = req.body.sid;
    // 删除数据库的sql语句
    console.log(sid);
    let sql = 'DELETE FROM `sc_schedule` WHERE (sid=?)'
    pool.query(sql, [sid], (error, results) => {
        console.log(sql);
        if (error) throw error;
        res.send({ message: 'ok', code: 200 })
    })
});
// 指定服务器对象监听的端口号
server.listen(3000, () => {
    console.log('server is running...');
});