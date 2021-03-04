<template>
    <div class="user-page">
        <!-- 用户 -->
        <div class="user-header">
            <div class="user">
                <div class="quit">
                    <div class="quit-inner clearfix">
                        <a href="javascript:;" class="fr" @click="quit">退出登录</a>
                    </div>
                </div>
                <div class="subtitle">
                    <div>欢迎:{{this.$store.state.user.uname}}  来到冰雪嘉年华</div>
                </div>
                <div class="username">
                    <div class="username-inner login" v-if="this.$store.state.islogin == 0">
                        <div class="welcome">欢迎来到冰雪嘉年华</div>
                        <a href="#/login">登录 / 注册</a>
                    </div>
                    <div class="username-inner" v-else>
                        <div class="img"><img :src="require('../../public/images/Yuan/' + img)" alt=""></div>
                        <a href="javascript:;" class="name">{{this.$store.state.user.uname}}</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 关于我的 -->
        <div class="my">
            <div class="my-inner">
                <p><span>关于我的</span></p>
            </div>
            <div class="my-list">
                <a href="javascript:;" @click="myremark">
                    <p>
                        <span class="iconfont">&#xe689;</span>
                    </p><br>
                    <p class="remark" :style="{transform: remark}">我的点评</p>
                    <p class="remark-count" :style="{transform: quantity}">{{sum}}</p>
                </a>
                <a href="javascript:;" @click="mygive">
                    <p>
                        <span class="iconfont">&#xe508;</span>
                    </p><br>
                    <p class="remark" :style="{transform: mypraise}">我的点赞</p>
                    <p class="remark-count" :style="{transform: myquantity}">{{love}}</p>
                </a>
            </div>
        </div>
        <foot class="foot"></foot>
    </div>
</template>
<style>
    .user-page{
        background: #f6f6f6;
        width: 23.4375rem;
        height: 41.6875rem;
    }
    .user-header{
        height: 17.5rem;
        background-image: linear-gradient(to right,  #4aa3f3, #3477ec);
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
    }
    .user-header .user a{
        color: #fff;
        font-size: 1.1rem;
    }
    .user-header .user .quit{
        height: 3.75rem;

    }
    .user-header .user .quit .quit-inner{
        padding: 2.25rem 1.8rem 0px;
    }
    .user-header .user .quit span{
        font-size: 1.25rem;
    }
    .user-header .user .username{
        text-align: center;
        padding-top: 3rem;
    }
    .user-header .user .username .login{
        padding-top: 2rem;
    }
    .user-header .user .username .login a{
        display: inline-block;
        width: 7.4rem;
        height: 2.5rem;
        border: 1px solid #fff;
        border-radius: 2rem;
        line-height: 2.5rem;
    }
    .user-header .user .username .username-inner .welcome{
        margin-bottom: 0.8rem;
        font-size: 1.3rem;
        color: #fff;
    }
    .user-header .user .username .username-inner .img{
        margin: 0 auto;
        width: 4rem;
        height: 4rem;
        box-shadow: -3px 3px 10px black;
        border-radius: 50%;
        z-index: 1000;
        position: relative;
        bottom: -0.5rem;
    }
    .user-header .user .username .username-inner .name{
        width: 16rem;
        height: 4rem;
        display: inline-block;
        background: #348ced;
        line-height: 4rem;
        box-shadow: -1px 1px 8px black;
        border-radius: 0.4rem;
    }
    .user-header .user .username p{
        width: 3.4rem;
        height: 3.4rem;
        display: inline-block;
        margin-right: 1.25rem;
    }
    .user-header .user .username img{
        width: 100%;
        border-radius: 50%;
    }
    .user-header .user .subtitle{
        position: absolute;
        width: 10rem;
        text-align: center;
        height: 2.5rem;
        line-height: 2.5rem;
        overflow: hidden;
        left: 6.7rem;
        color: #fff;
        font-size: 1.25rem;
    }
    .user-header .user .subtitle>div{
        transform: translateX(170px);
        white-space: nowrap;
        animation: tow 10s linear infinite;
    }
    @keyframes tow{
        0%{
            transform: translateX(180px);
        }
        100%{
            transform: translateX(-290px);
        }
    }
    .user-page .my{
        height: 19rem;
        width: 22rem;
        margin: 0 auto;
        position: relative;
        top: -0.625rem;
        border-radius: 0.3rem;
        background: #fff;
    }
    .user-page .my .my-inner p{
        width: 19rem;
        font-size: 1.125rem;
        padding: 0.9rem 0px;
        border-bottom: 1px solid #ececec;
        margin: 0 auto;
    }
    .user-page .my .my-list{
        width: 21.25rem;
        margin: 0 auto;
        padding-top: 1.5rem;
    }
    .user-page .my .my-list a{
        width: 8rem;
        text-align: center;
        color: black;
        height: 10rem;
        margin: 1.25rem;
        display: inline-block;
        border-radius: 0.4rem;
    }
    .user-page .my .my-list a:last-child{
        transform:rotate(8deg);
        box-shadow: 3px 3px 10px #666;
    }
    .user-page .my .my-list a:first-child{
        transform:rotate(-8deg);
        box-shadow: -3px 3px 10px #666;
    }
    .user-page .my .my-list a p{
        display: inline-block;
        font-size: 1.25rem;
    }
    .user-page .my .my-list a p:nth-child(1){
        margin-bottom: 0.6rem;
        padding-top: 3rem;
    }
    .user-page .my .my-list a:nth-child(1) span{
        background: linear-gradient(to bottom right, #87e0fe, #3b85ee);
        /* 实现文字渐变代码 */
        -webkit-background-clip: text;
        color: transparent;
        font-size: 2.5rem;
    }
    .user-page .my .my-list a:nth-child(2) span{
        background: linear-gradient(to bottom right, #ff5050, red);
        /* 实现文字渐变代码 */
        -webkit-background-clip: text;
        color: transparent;
        font-size: 2.5rem;
    }
    .user-page .my .my-list .remark{
        position: absolute;
        left: 26px;
        width: 5rem;
        transition: 0.5s;
    }
    .user-page .my .my-list .remark-count{
        position: absolute;
        left: 26px;
        width: 5rem;
        transition: 0.5s;
    }
    .user-page .foot .h-user{
        background: #eee;
        color: #458ce6 !important;
    }
    .fr{
        float: right;
    }
</style>
<script>
import foot from '../components/foot.vue'
export default {
    components: { foot },
    data(){
        return{
            img:'1.jpg',
            quantity:'rotateY(90deg)',
            remark:'',
            mypraise:'',
            myquantity:'rotateY(90deg)',
            count:0,
            mycount:0,
            love:'暂无点赞',
            uname:this.$store.state.user.uname,
            remark:'',
            sum:'暂无点评',
            add:0
        }
    },
    methods:{
        quit:function(){
            this.$store.state.aaa()
            this.$router.push("/home_page")
        },
        myremark:function(){
            if(this.uname == undefined){
                this.$messagebox('提示信息','请先登录')
            }
            else if(this.count == 0){
                let _this = this
                setTimeout(function(){
                    _this.remark = 'rotateY(90deg)'
                        setTimeout(function(){
                            _this.quantity = 'rotateY(0deg)'
                            _this.count += 1;
                        },500) 
                },500)
            }else{
                let _this = this
                setTimeout(function(){
                    _this.quantity = 'rotateY(90deg)'
                    setTimeout(function(){
                        _this.remark = 'rotateY(0deg)'
                        _this.count = 0;
                    },500)
                },500)
            }
            let uname = this.uname;
            for(var j = 0;j<this.remark.length;j++){
                if(uname == this.remark[j].uname){
                    this.add += 1
                    this.sum = this.add
                }
            }
        },
        mygive:function(){
            if(this.uname == undefined){
                this.$messagebox('提示信息','请先登录')
            }
            else if(this.mycount == 0){
                let _this = this
                setTimeout(function(){
                    _this.mypraise = 'rotateY(90deg)'
                    setTimeout(function(){
                        _this.myquantity = 'rotateY(0deg)'
                        _this.mycount += 1;
                    },500)
                },500) 
            }else{
                let _this = this
                setTimeout(function(){
                    _this.myquantity = 'rotateY(90deg)'
                    setTimeout(function(){
                        _this.mypraise = 'rotateY(0deg)'
                        _this.mycount = 0;
                    },500)
                },500)
            } 
            let aaa= this.uname
            for(var i=0;i<this.everyone.length;i++){
                if(aaa==this.everyone[i].uname){
                    this.love=this.everyone[i].love
                }
            }
        }
    },
    mounted(){
        if(this.$store.state.user.photo == null){
            this.img = '1.jpg'
        }else{
            this.img = this.$store.state.user.photo
        }
        this.axios.get("/everyone").then(res=>{
            this.everyone = res.data.results;
        });
        this.axios.get('/discuss').then(res=>{
            this.remark = res.data.result;
        })
    },
}
</script>
