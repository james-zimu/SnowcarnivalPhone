// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

//加载body-parser模块
const bodyParser = require('body-parser')


// 创建MySQL连接池
const pool = mysql.createPool({
    host: '172.88.17.37', //MySQL服务器地址
    port:3306, //MySQL服务器端口号
    user: 'root', //数据库用户的用户名
    password: '12345678', //数据库用户密码
    database: 'xzqa', //数据库名称
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


server.get("/fcategory",(req,res)=>{
    let sql = 'SELECT lid,images,title,content FROM testing ORDER BY lid';
    pool.query(sql,(error,results) => {
        if(error) throw error;
        res.send({
            message:'ok',code:200,results:results
        })
    })
})

// 用户登录接口
server.post('/login',(req,res)=>{
    //获取用户名和密码信息
    let uname = req.body.username;
    let upwd = req.body.password;
    //SQL语句
    let sql = 'SELECT uid,uname,photo FROM test2 WHERE uname=? AND upwd=?';
    pool.query(sql,[uname,upwd],(error,results)=>{
        if (error) throw error;
        if(results.length == 0){ //登陆失败
        res.send({message:'login failed',code:201});
    }else{
        res.send({message:'ok',code:200,result:results[0]});
        console.log("欢迎登录")
    }
    });
});

//保存用户的评论
server.post('/remark',(req,res)=>{
    let uname = req.body.uname;
    let remcontent = req.body.msg;
    let photo = req.body.photo;
    let number = req.body.number;
    let sql = 'INSERT INTO test4(number,uname,photo,remcontent) VALUES(?,?,?,?)';
    pool.query(sql,[number,uname,photo,remcontent],(error,result)=>{
        if(error) throw error;
        res.send({message:'ok',code:200,result:result});
    });
})

// 得到用户发表的文章
server.get('/article',(req,res)=>{
    // console.log(req.query.id)
    let number = req.query.id;
    let sql = 'SELECT uname,photo,image,content FROM test3 WHERE NUMBER=?';
    pool.query(sql,[number],(error,result)=>{
        if(error) throw error;
        res.send({message:'ok',code:200,result:result})
    })

})

//向数据库请求当前网页的留言与评论内容
server.get('/beforrem',(req,res)=>{
    // console.log(req.query.number)
    let number = req.query.number;
    let sql ='SELECT uname,photo,remcontent FROM test4 WHERE NUMBER=?';
    pool.query(sql,[number],(error,result)=>{
        if(error) throw error;
        res.send({message:'ok',code:200,result:result})
    })
})

// 指定服务器对象监听的端口号
server.listen(3000, () => {
    console.log('server is running...');
});