// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

//加载body-parser模块
const bodyParser = require('body-parser')


// 创建MySQL连接池
const pool = mysql.createPool({
  host: '172.88.17.37',   //MySQL服务器地址
  port: 3306,          //MySQL服务器端口号
  user: 'root',        //数据库用户的用户名
  password: '12345678',        //数据库用户密码
  database: 'SnowcarnivalPhone',    //数据库名称
  connectionLimit: 20, //最大连接数
  charset: 'utf8'      //数据库服务器的编码方式
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
//添加到购物车接口
server.post('/addcar',(req,res)=>{
    //获取酒店名字 照片 价格 产品详情
    let title=req.body.title;
    // let details=req.body.hotel_pic;
    let price=req.body.price;
    let family_id=req.body.family_id;
    let product_details=req.body.product_details
    console.log (family_id,title,price,product_details);
    let sql = 'INSERT INTO sc_shop_test SET family_id=?,title=?,price=?,product_details=?'
    pool.query(sql, [family_id,title,price,product_details], (error,result) => {
    if(error) throw error
    res.send({message:'ok',code:200})
    })
    });

//用户注册接口
server.post('/register',(req,res)=>{
    //获取用户名和密码信息 手机号码
    let uname=req.body.username;
    let upwd= req.body.password;
    let phone=req.body.phone;
    //以username 为条件进行查找操作，以保证用户名的唯一性
    let sql='SELECT COUNT(uid) AS count FROM sc_user WHERE uname=?';
    pool.query(sql,[uname],(error,results)=>{
        if(error)throw error;
        let count=results[0].count;
        if(count==0){
            //将用户名相关信息插入到数据表中
            sql = 'INSERT sc_user(uname,upwd,phone) VALUES(?,MD5(?),?)';
            console.log(sql);
            pool.query(sql,[uname,upwd,phone],(error,results)=>{
                if (error) throw error;
                res.send({message:'ok',code:200});
            })
        }else{
            res.send({message:'user exists',code:201});
        }
    });
});
// 用户登录接口
server.post('/login',(req,res)=>{
    //获取用户名和密码信息
    let uname = req.body.username;
    let upwd = req.body.password;
    //SQL语句
    let sql = 'SELECT uid,uname,phone FROM sc_user WHERE uname=? AND upwd=MD5(?)';
    console.log(sql);
    pool.query(sql,[uname,upwd],(error,results)=>{

        if (error) throw error;
        if(results.length == 0){ //登陆失败
        res.send({message:'login failed',code:201});
    }else{
        res.send({message:'ok',code:200,result:results[0]});
    }
    });
});
// 指定服务器对象监听的端口号
server.listen(3000, () => {
    console.log('server is running...');
});