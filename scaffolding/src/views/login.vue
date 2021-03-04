<template>
    <div>
        <div class="login">
            <!-- 顶部导航 -->
             <mt-header class="header" title="嘉年华会员登录">
                <router-link to="/shopcar" slot="left">
                <mt-button class="zhuce" icon="back">注册(我的)</mt-button>
                </router-link>
            </mt-header>
            <!-- 内容区域 -->
            <div class="container">
                <div class="user-password">用户名密码登录</div>
                <!-- 用户名输入框 -->
                <mt-field
                    type="text"
                    label="用户名"
                    placeholder="请输入用户名"
                    class="upwd"
                    :attr="{ maxlength: '20' ,minlength:'6'}"
                    v-model="username"
                    :state="usernameState"
                    @blur.native.capture="checkUsername"
                    >
                </mt-field>
                <!-- 密码输入框 -->
                <mt-field
                    type="password"
                    label="密码"
                    placeholder="登录密码"
                    class="upwd"
                    :attr="{maxlength:'20' ,minlength:'6'}"
                    v-model="password"
                    :state="passwordState"
                    @blur.native.capture="checkPassword"
                    ><a href=""></a>
                    |
                    <a href="#">忘记密码</a>
                </mt-field>
                <!-- 登录按钮 -->
                <button class="reg" @click="handle">登录</button>
                <!-- 2种手机的验证方式 -->
                <div class="phone">
                    <a href="#" >手机验证码登录</a>
                    <a href="#" class="phone-right ">境外手机密码登录</a>
                </div>
                <!-- 4个图标 -->
                <div class="reg-way">
                   
                </div>
                <!-- 隐私条款 -->
                <div class="agree">
                    阅读并同意冰雪世界的
                    <a href="">《服务协议》</a>
                    和
                    <a href="#">《隐私政策》</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        // 初始状态
        username: "",
        password: "",
        usernameState: "",
        passwordState: "",
        user:{},
        };
    },
    methods:{
        //username
        checkUsername(){
            //用户判断
            let usernameRegExp = /^[0-9a-zA-Z_-]{6,20}$/;//6~20为字母数字可以使用特殊符号'-'和'_'
            if (usernameRegExp.test(this.username)){ //如果验证通过
                this.usernameState=""; //判断正确取消后面的验证图标显示
                return true; //返回结果
            }else{ //否则
                //提示
                this.$toast({
                    message:"用户名格式错误",//提示错误
                    position:"middle",//在中间显示
                    duration:"1000",//显示1000毫秒
                });
                this.usernameState="error";//判断错误显示后面图标
                return false;//返回错误
            }
        },
        //password
        checkPassword() {
            //密码判断
        let passwordRegExp = /^[0-9a-zA-Z_-]{6,20}$/;//6~20为字母数字可以使用特殊符号'-'和'_'
        if (passwordRegExp.test(this.password)) {
            this.passwordState = "";//判断正确取消后面的验证图标显示
            return true;
        } else {
            this.$toast({
            message: "密码格式错误",
            position: "middle",
            duration:"1000"
            });
            this.passwordState = "error";//判断错误显示后面图标
            return false;
        }
        },
        handle() {
        if(this.checkUsername() && this.checkPassword()){
            //将用户名和密码信息提交到WEB服务器
            let object = {
                username:this.username,
                password:this.password
            }
            this.axios.post('/login',this.qs.stringify(object)).then(res=>{
                if(res.data.code == 200){
                //修改isLogin
                //res.data.result存放的是当前登录成功的用户信息
                //把该用户信息存入vuex
                this.$store.commit('loginOK',res.data.result)
                //把用户信息存入sessionStorage
                let userString = JSON.stringify(res.data.result)
                // console.log(userString)
                window.sessionStorage.setItem('user',userString)
                //登录成功
                this.$router.push('/userpage');
                // this.$router.push('/register');
                this.$store.state.islogin = 1
                }
                if(res.data.code == 201){//登陆失败
                this.$messagebox('提示信息','用户名或密码错误')
                }
            })
        };
        },
    }
}
</script>
<style scoped>
    .login  .header{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    font-size: 1.2rem;
    background: #468ce6;
  }
  .login  .header>.zhuce{
      color: #fff;
  }
    .login .container{
        padding: 1.25rem;
    }
    .login .user-password{
        font-size: 1.5625rem;
        margin:1.25rem 0;
    }
    .login .reg{
        width: 21rem;
        border-radius: 0.5rem;
        background-color: rgb(216, 213, 213);
        color: gray;
        height: 2.5rem;
        margin-top:1.25rem ;
        border: 0px;
        display: block;
    }
    .login .phone{
        font-size: 0.8125rem;
        display: inline-block;
        margin-top: 1rem;
    }
    .login a{
        color:black
    }
    .login .phone-right{
        margin-left:8rem;
    }
    .login .reg-way{
        margin-top:17rem ;
        position: relative;
    }
    .login .iconfont{
        font-size: 1.3rem
    }
    .login .agree{
        font-size: 0.1rem;
        margin-top: 1rem;
        margin-left:1rem ;
    }
    .login .upwd{
        border-bottom:0.1rem solid gray
    }
</style>






