<template>
    <div class="register">
        <div class="all">
            <div id="header">
                <mt-header class="header" title="嘉年华会员注册">
                    <router-link to="/shopcar" slot="left">
                    <mt-button class="zhuce" icon="back">登陆</mt-button>
                    </router-link>
                </mt-header>
            </div>
            <div class="container">
                <div class="container">
                    <div class="user-reg">用户注册</div>
                </div>
                <!-- 用户名 -->
                <mt-field class="reg-service"
                type="text" placeholder="请输入用户名"
                :attr="{ maxlength:'20',minlength:'6'}" :state=usernameState
                @blur.native.capture="checkUsername" v-model="username"
                >
                </mt-field>
                <!-- 密码 -->
                <mt-field class="reg-service"
                type="password" placeholder="请输入密码"
                :attr="{ maxlength:'20',minlength:'6'}" :state=passwordState
                @blur.native.capture="checkPassword" v-model="password"
                >
                </mt-field>
                <!-- 二次密码 -->
                <mt-field class="reg-service"
                type="password" placeholder="请再次输入密码"
                :attr="{ maxlength:'20',minlength:'6'}" :state=secpasswordState
                @blur.native.capture="checkSecpassword" v-model="secpassword"
                >
                </mt-field>
                <!-- phone -->
                <mt-field class="reg-service"
                type="text" placeholder="请输入手机号"
                :attr="{ maxlength:'11'}" :state=phoneState
                @blur.native.capture="checkPhone" v-model="phone"
                >
                </mt-field>
                <!-- 验证码 -->
                <mt-field class="reg-service"
                type="text" placeholder="输入验证码"
                :attr="{ maxlength:'4'}" :state=phonecodeState
                @blur.native.capture="checkPhonecode" v-model="phonecode"
                >
                <!-- 验证码60s倒计时 -->
                <!-- <span v-show="show" @click="getCode">获取验证码</span>
                <span v-show="!show">{{count}} s</span> -->
                <!-- <canvas id="canvas" width="120" height="30" style="cursor: pointer;"></canvas> -->
                <!-- 随机验证码 -->
                <div class="s-canvas">
                    <div class="shu"></div>
                    <canvas id="s-canvas" :width="contentWidth" :height="contentHeight" @click="shuaxin"></canvas>
                </div>
                </mt-field>
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
        props: {
        identifyCode: {
            type: String,
            default:"1234" 
        },
        fontSizeMin: {
            type: Number,
            default: 16
        },
        fontSizeMax: {
            type: Number,
            default: 40
        },
        backgroundColorMin: {
            type: Number,
            default: 180
        },
        backgroundColorMax: {
            type: Number,
            default: 240
        },
        colorMin: {
            type: Number,
            default: 50
        },
        colorMax: {
            type: Number,
            default: 160
        },
        lineColorMin: {
            type: Number,
            default: 40
        },
        lineColorMax: {
            type: Number,
            default: 180
        },
        dotColorMin: {
            type: Number,
            default: 0
        },
        dotColorMax: {
            type: Number,
            default: 255
        },
        contentWidth: {
            type: Number,
            default: 112
        },
        contentHeight: {
            type: Number,
            default: 38
        }
    },
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
        }
    },
    methods:{
        //用户名判断
        checkUsername(){
            //用户判断
            let usernameRegExp = /^[0-9a-zA-Z_-]{6,20}$/;//6~20为字母数字可以使用特殊符号'-'和'_'
            if (usernameRegExp.test(this.username)){ //如果验证通过
                this.usernameState="success"; //判断正确取消后面的验证图标显示
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
        // 密码判断
        checkPassword(){
            let passwordRegExp=/^[0-9a-zA-Z_-]{6,20}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState="success";
                return true;
            }else{
                //提示信息
                this.$toast({
                    message:'密码格式错误',
                    duration:'1000',
                    position:'middle'
                })
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
                this.$toast({
                    message:'请重新输入相同密码',
                    position:'middle',
                    duration:'1000'
                })
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
                this.$toast({
                    message:'手机号码格式错误',
                    position:'middle',
                    duration:'1000'
                })
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
                this.$toast({
                    message:"验证码错误 4位数字",
                    position:"middle",
                    duration:1000
                })
                this.passwordState="error"
                return false
            }
        },
        // //60s验证码倒计时
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
            if(this.checkUsername()&&this.checkPassword()&&this.checkSecpassword()&&this.checkPhone()){
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
        ///以下为验证码
        // 生成一个随机数
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        // 生成一个随机的颜色
        randomColor(min, max) {
            let r = this.randomNum(min, max)
            let g = this.randomNum(min, max)
            let b = this.randomNum(min, max)
            return 'rgb(' + r + ',' + g + ',' + b + ')'
        },
        drawPic() {
            let canvas = document.getElementById('s-canvas')
            let ctx = canvas.getContext('2d')
            ctx.textBaseline = 'bottom'
            // 绘制背景
            ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
            ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
            // 绘制文字
            for (let i = 0; i < this.identifyCode.length; i++) {
                this.drawText(ctx, this.identifyCode[i], i)
            }
            this.drawLine(ctx)
            this.drawDot(ctx)
        },
        drawText(ctx, txt, i) {
            ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
            ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
            let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
            let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
            var deg = this.randomNum(-45, 45)
            // 修改坐标原点和旋转角度
            ctx.translate(x, y)
            ctx.rotate(deg * Math.PI / 180)
            ctx.fillText(txt, 0, 0)
            // 恢复坐标原点和旋转角度
            ctx.rotate(-deg * Math.PI / 180)
            ctx.translate(-x, -y)
        },
        drawLine(ctx) {
            // 绘制干扰线
            for (let i = 0; i < 5; i++) {
                ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
                ctx.beginPath()
                ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
                ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
                ctx.stroke()
            }
        },
        drawDot(ctx) {
            // 绘制干扰点
            for (let i = 0; i < 80; i++) {
                ctx.fillStyle = this.randomColor(0, 255)
                ctx.beginPath()
                ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
                ctx.fill()
            }
        },
        shuaxin(){
            this.randomNum();
            this.randomColor();
            this.drawPic();
            this.drawText();
            this.drawLine();
            this.drawDot()


        }
    },
    watch: {
        identifyCode() {
            this.drawPic()
        }
    },
    mounted() {
        this.drawPic()
    }
};
</script>
<style>

    .register .header{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    font-size: 1.2rem;
    background: #468ce6;
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
    .register .shu{
        border-right: 0.1rem solid gray;
        height: 1.5rem;
        position: absolute;
        left: -0.5rem;
    }
    .register .s-canvas {
    height: 1.5rem;

    }
    .register .s-canvas canvas{
        margin-top: 0.1rem;
        margin-left: 0.1rem;
    }
</style>