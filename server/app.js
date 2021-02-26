// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

//加载body-parser模块
const bodyParser = require('body-parser')

// 加载CORS模块
const cors = require('cors');

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


// 使用CORS中间件
server.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));




//获取租车数据库中数据并发送到web服务器
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

//获取租车前端发来的要加入购物车的选项
server.post('/carrentalshop', (req, res) => {
    //获取租车页面接口传过来的数据
    let price = req.body.shop;
    let arr = price.join(',')
    console.log(price);
    // SQL语句以获取分类表的数据
    // let sql = 'SELECT rmodle,price,classification FROM sc_carrental1 ORDER BY rid';
    let sql = 'select * from sc_carrental1 where price in (' + arr + ')'
    console.log(sql);
    // // 执行SQL语句
    pool.query(sql, (error, results) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200, results: results });
        let carlist = [];
        //循环results中的内容
        for (let i = 0; i < results.length; i++) {
            let obj = results[i];
            //获取对象中的img值和购物车数据库中对接
            let details_img = obj.img;
            //获取对象中的rmodle值和购物车数据库中对接
            let details_top = obj.rmodle;
            //获取对象中的classification值和购物车数据库中对接
            let time = obj.classification;
            //获取对象中的price值和购物车数据库中对接
            let price = obj.price;
            //获取对象中的num值和购物车中数据对接
            let num = obj.num;
            //获取对象中的logo_name值和购物车中数据对接
            let logo_name = obj.logo_name;
            //使用sql语句将获取的值插入购入车数据库
            let sql1 = 'insert into sc_car (details_img, details_top, time, price ,num,logo_name) value (?,?,?,?,?,?)'
            pool.query(sql1, [details_img, details_top, time, price, num, logo_name], (error, results) => {
                // if (error) throw error;
                console.log(error);
                // if (error) throw error;
                // res.send({ message: 'ok', code: 200 });
            });
        }
    });
});



//获取购物车接口
server.get('/getcar', (req, res) => {
    // SQL语句以获取购物车表的数据
    let sql = 'SELECT cid,uid,logo_img,logo_name,details_img,details_top,time,person,price,num FROM sc_car ORDER BY cid';
    // 执行SQL语句
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ message: 'ok', code: 200, result: result });
    });
});
//后台重新计算商品的总价，确保数据的可靠性
server.get("/total", (req, res) => {
    var sql = "select cid,price,num from sc_car order by cid";
    //执行sql语句
    pool.query(sql, (err, result) => {
        if (err) throw err;
        var price = 0;
        for (let key in result) {
            price += result[key].price * result[key].num;
        }
        console.log(price)
        res.send({ message: "ok", code: 200, result: price })
    })
});
//根据用户的增加操作更新数据库的数量，确保调用计算总价接口时总价的正确性
server.post(`/addnum`, (req, res) => {
    //获取前台传入的该商品的cid
    let cid = req.body.cid;
    //获取前台传入的该cid商品的数量
    let num = req.body.num;
    num = ++num;
    console.log(num)
    var sql = "update sc_car set num=? where cid=?";
    pool.query(sql, [num, cid], (err, result) => {
        if (err) throw err;
        res.send({ message: "ok", code: 200 })
    })
})
server.post(`/lessnum`, (req, res) => {
    //获取前台传入的该商品的cid
    let cid = req.body.cid;
    //获取前台传入的该cid商品的数量
    let num = req.body.num;
    num = --num;
    console.log(num)
    var sql = "update sc_car set num=? where cid=?";
    pool.query(sql, [num, cid], (err, result) => {
        if (err) throw err;
        res.send({ message: "ok", code: 200 })
    })
})

//删除用户的购物车商品
server.post(`/shopcardelete`, (req, res) => {
    //获取到前端发来的cid值
    let cid = req.body.cid;
    // 删除数据库的sql语句
    console.log(cid);
    let sql = 'DELETE FROM `sc_car` WHERE (cid=?)'
    pool.query(sql, [cid], (err, results) => {
        if (err) throw err;
        res.send({ message: 'ok', code: 200 })
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
        if (error) throw error;
        res.send({ message: 'ok', code: 200 });
    })
});



server.get("/fcategory", (req, res) => {
    let sql = 'SELECT lid,images,title,content FROM testing ORDER BY lid';
    pool.query(sql, (error, results) => {
        if (error) throw error;
        res.send({
            message: 'ok',
            code: 200,
            results: results
        })
    })
})

// 用户登录接口
server.post('/login', (req, res) => {
    //获取用户名和密码信息
    let uname = req.body.username;
    let upwd = req.body.password;
    //SQL语句
    let sql = 'SELECT uid,uname,photo FROM test2 WHERE uname=? AND upwd=?';
    pool.query(sql, [uname, upwd], (error, results) => {
        if (error) throw error;
        if (results.length == 0) { //登陆失败
            res.send({ message: 'login failed', code: 201 });
        } else {
            res.send({ message: 'ok', code: 200, result: results[0] });
            console.log("欢迎登录")
        }
    });
});

//保存用户的评论
server.post('/remark', (req, res) => {
    let uname = req.body.uname;
    let remcontent = req.body.msg;
    let photo = req.body.photo;
    let number = req.body.number;
    let sql = 'INSERT INTO test4(number,uname,photo,remcontent) VALUES(?,?,?,?)';
    pool.query(sql, [number, uname, photo, remcontent], (error, result) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200, result: result });
    });
})

// 得到用户发表的文章
server.get('/article', (req, res) => {
    // console.log(req.query.id)
    let number = req.query.id;
    let sql = 'SELECT uname,photo,image,content FROM test3 WHERE NUMBER=?';
    pool.query(sql, [number], (error, result) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200, result: result })
    })

})

//向数据库请求当前网页的留言与评论内容
server.get('/beforrem', (req, res) => {
    // console.log(req.query.number)
    let number = req.query.number;
    let sql = 'SELECT uname,photo,remcontent FROM test4 WHERE NUMBER=?';
    pool.query(sql, [number], (error, result) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200, result: result })
    })
})

// 指定服务器对象监听的端口号
server.listen(3000, () => {
    console.log('server is running...');
});