<template>
    <div class="register">
        <div class="all">
            <div id="header">
                <router-link to="/login" style="color:white;margin-left:1.8rem"><span class="iconfont">&#xe501;</span>登录</router-link>
            </div>
            <div class="container">
                <div class="container">
                    <div class="user-reg">用户注册</div>
                </div>
                <!-- 用户名 -->
                <mt-field class="reg-service"
                label="用户名"
                type="text" placeholder="  6~20位可以使用 - _"
                :attr="{ maxlength:'20',minlength:'6'}" :state=usernameState
                @blur.native.capture="checkUsername" v-model="username"
                >
                </mt-field>
                <!-- 密码 -->
                <mt-field class="reg-service"
                label="密码"
                type="password" placeholder="密码 6~20位可以使用 - _"
                :attr="{ maxlength:'20',minlength:'6'}" :state=passwordState
                @blur.native.capture="checkPassword" v-model="password"
                >
                </mt-field>
                <!-- 二次密码 -->
                <mt-field class="reg-service"
                label="再次输入密码"
                type="password" placeholder="再次输入密码"
                :attr="{ maxlength:'20',minlength:'6'}" :state=secpasswordState
                @blur.native.capture="checkSecpassword" v-model="secpassword"
                >
                </mt-field>
                <!-- phone -->
                <mt-field class="reg-service"
                label="手机"
                type="text" placeholder="请输入正确的手机号"
                :attr="{ maxlength:'11'}" :state=phoneState
                @blur.native.capture="checkPhone" v-model="phone"
                >
                </mt-field>
                <!-- 验证码 -->
                    <slide-verify
                    ref="slideblock"
                    @success="onSuccess"
                    @fail="onFail"
                    :accuracy="accuracy"
                    :slider-text="text"
                    v-show="this.checkUsername()&&this.checkPassword()&&this.checkSecpassword()&&this.checkPhone()"
                    ></slide-verify>
                    <!-- <div>{{msg}}</div> -->
<!-- <button @click="handleClick"></button> -->
            </div>
            <!-- 同意隐私条款 -->
            <div class="agree">
                <span >
                    继续即表示同意我们的
                    <a href="#">《服务协议和隐私条款》</a>
                </span>
                <br>
            </div>
            <!-- 同意按钮 -->
            <button class="make-sure" @click="handle">
                确定
            </button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return{
            //初始状态
            username:"",
            password:"",
            secpassword:"",
            phone:"",
            phonecode:"",
            usernameState:"",
            passwordState:"",
            secpasswordState:"",
            phoneState:"",
            phonecodeState:"",
            show: true,
            count: '',
            timer: null,
            msg: '',
            text: '向右滑',
            // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
            accuracy: 4,
            aaa:false
        }
    },
    methods:{
        //验证码
        one(){
            return this.aaa
        },
        onSuccess(){
            console.log('验证通过');
            // this.$messagebox("提示信息","验证通过 点击确定注册");
            this.aaa = true
            },
            onFail(){
            console.log('验证不通过');
            // return false
            this.aaa = false
            },
            // onRefresh(){
            // console.log('点击了刷新小图标');
            // this.msg = ''
            // return false
            // },
            // onFulfilled() {
            // console.log('验证不通过');
            // return false
            // },
            // onAgain() {
            // console.log('检测到非人为操作的哦！');
            // this.msg = 'try again';
            // return false
            // // 刷新
            // // this.$refs.slideblock.reset();
            // },
            // handleClick() {
            //     // 父组件直接可以调用刷新方法
            // this.$refs.slideblock.reset();
            // },
        //用户名判断
        checkUsername(){
            //用户判断
            let usernameRegExp = /^[0-9a-zA-Z_-]{6,20}$/;//6~20为字母数字可以使用特殊符号'-'和'_'
            if (usernameRegExp.test(this.username)){ //如果验证通过
                this.usernameState="success"; //判断正确取消后面的验证图标显示
                return true; //返回结果
            }else{ //否则
                //提示
                // this.$toast({
                //     message:"用户名格式错误",//提示错误
                //     position:"middle",//在中间显示
                //     duration:"1000",//显示1000毫秒
                // });
                this.usernameState="error";//判断错误显示后面图标
                return false;//返回错误
            }
        },
        // 密码判断
        checkPassword(){
            let passwordRegExp=/^[0-9a-zA-Z_-]{6,20}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState="success";
                return true;
            }else{
                //提示信息
                // this.$toast({
                //     message:'密码格式错误',
                //     duration:'1000',
                //     position:'middle'
                // })
                this.passwordState="error"
                return false
            }
        },
        //2次密码验证
        checkSecpassword(){
            // 如果2次密码=1次密码就通过显示√
            if(this.password==this.secpassword){
                this.secpasswordState="success";
                return true
            }else{
            // 否则显示X 提示重新输入相同密码
                // this.$toast({
                //     message:'请重新输入相同密码',
                //     position:'middle',
                //     duration:'1000'
                // })
                this.secpasswordState="error"
                return false
            }
        },
        // 手机号码判断
        checkPhone(){
            //如果手机号码是11位并且是数字则通过 显示√
            let phoneRegExp=/^1[3|4|5|7|8][0-9]{9}$/ //手机号码1开头34578后面9位数
            if(phoneRegExp.test(this.phone)){
                this.phoneState="success"
                return true
            }else{
            //否则显示错误 提示手机号码格式不对
                // this.$toast({
                //     message:'手机号码格式错误',
                //     position:'middle',
                //     duration:'1000'
                // })
                this.phoneState="error"
                return false
            }
        },
        checkPhonecode(){
            let phonecodeRegExp=/^[0-9]{4}$/
            if(phonecodeRegExp.test(this.phonecode)){
                this.phonecodeState="success"
                return true
            }else{
                // this.$toast({
                //     message:"验证码错误 4位数字",
                //     position:"middle",
                //     duration:1000
                // })
                this.passwordState="error"
                return false
            }
        },
        //60s验证码倒计时
        // getCode(){
        // const TIME_COUNT = 60;
        // if (!this.timer) {
        // this.count = TIME_COUNT;
        // this.show = false;
        // this.timer = setInterval(() => {
        // if (this.count > 0 && this.count <= TIME_COUNT) {
        //     this.count--;
        //     } else {
        //     this.show = true;
        //     clearInterval(this.timer);
        //     this.timer = null;
        //     }
        // }, 1000)
        // }
        // },
    handle(){
        if(this.checkUsername()&&this.checkPassword()&&this.checkSecpassword()&&this.checkPhone()&&this.one()){
            //将用户名密码手机号码发送到web服务器
            let object={
                username:this.username,
                password:this.password,
                phone:this.phone
            }
            this.axios.post('/register',this.qs.stringify(object)).then(res=>{
                if(res.data.code==201){//用户名已经存在
                this.$messagebox("提示信息","对不起 用户已经存在");
                }
                if(res.data.code==200){//用户注册成功
                this.$messagebox.confirm("您现在是否立即登录？","提示信息").then(
                    (value)=>{
                        this.$router.push('/login');
                    }
                ).catch(e=>{
                    this.$router.push('/');
                })
                }
            })
        }
    },
    },
};
</script>
<style>
    .register #header{
        background-color:#458ce6;
        height:2.5rem;
        font-size:0.9375rem;
        line-height:2.5rem;
        color:white;
        padding-left: 1.25rem;
    }
    .register #header span{
        font-size: 1.5rem;
        position: absolute;
        left: 1.5rem;
    }
    .register .container{
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .register .user-reg{
        font-size: 1.5625rem;
        margin-left: 4.5rem;
        margin-top: 1.25rem;
        margin-bottom: 1.5rem;
    }
    .register .reg-service{
        border-bottom: 0.1rem solid gray;
    }
    .register .agree{
        margin-left: 3rem;
        margin-top: 2rem;
        font-size: 0.75rem;
        color: gray;
    }
    .register .make-sure{
        width: 20rem;
        display: block;
        height: 2.5rem;
        margin-left: 2rem;
        margin-top: 2.5rem;
        background-color: #458ce6;
        border:0px;
        border-radius: 0.5rem;
    }
</style>