<template>
<div  class="home-page">
  <div class="home-page">
    <div class="header">
      <div class="header-search">
        <mt-field class="reg-service" type="text" placeholder="郑州的酒店">
          <a href="#/map"><span class="iconfont">&#xe6e8;</span></a>
        </mt-field>
      </div>
      <ul class="header-nav">
        <li>
          <a href="javascript:;">首页</a>
        </li>
        <li>
          <a href="javascript:;" class="iconfont">
            &#xe697;
            郑州嘉年华</a
          >
        </li>
        <li>
          <a href="javascript:;" class="iconfont">
            &#xe697;
            武汉嘉年华</a
          >
        </li>
        <li>
          <a href="javascript:;" class="iconfont">
            &#xe697;
            重庆嘉年华</a
          >
        </li>
      </ul>
    </div>
    <!-- 这个地方的 郑州 地名需要根据定位的位置 动态修改 -->
    <p class="header-loc">您好，欢迎来到 {{ locmsg }} 冰雪嘉年华</p>
    <div  class="header-swipe"  >
    <mt-swipe   class="header-swipes"    :auto="4000"    :speed="5000">
          <mt-swipe-item>
            <img src="../assets/images/header1.jpg">
            </mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/header2.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/header3.jpg"></mt-swipe-item>
      </mt-swipe>
      </div>
    <div class="index-content">
      <ul class="index-serves index-serves1">
        <li class="index-ser1 ">
          <a class="iconfont " href="javascript:;">
            <p class="iconfont">&#xe603;</p>
            酒店</a>
        </li>
        <li class="index-ser2">
          <a href="javascript:;">
            <p class="iconfont">&#xe5e1;</p>
            服务
          </a>
        </li>
        <li class="index-ser3">
          <a href="javascript:;">
            <p class="iconfont">&#xec00;</p>
            线路
          </a>
        </li>
        <li class="index-ser4">
          <a href="javascript:;">
            <p class="iconfont">&#xe579;</p>
            嘉年华
          </a>
        </li>
        <li class="index-ser5">
          <a href="javascript:;">
            <p class="iconfont">&#xe507;</p>
            攻略/论坛</a
          >
        </li>
      </ul>
      <ul class="index-serves">
        <li class="index-ser6">
          <a href="javascript:;">
            <p class="iconfont">&#xe66c;</p>
            民宿/客栈</a
          >
        </li>
        <li class="index-ser7">
          <a href="javascript:;">
            <p class="iconfont">&#xe71f;</p>
            投诉建议</a
          >
        </li>
        <li class="index-ser8">
          <a href="javascript:;">
            <p class="iconfont">&#xf01f2;</p>
            地图</a
          >
        </li>
        <li class="index-ser9">
          <a href="javascript:;">
            <p class="iconfont">&#xe504;</p>
            门票/玩乐</a
          >
        </li>
        <li class="index-ser10">
          <a href="javascript:;">
            <p class="iconfont">&#xe620;</p>
            查攻略</a
          >
        </li>
      </ul>
      <ul class="index-serves">
        <li class="index-ser6">
          <a href="javascript:;">
            <p class="iconfont">&#xe625;</p>
            特价/爆款</a
          >
        </li>
        <li class="index-ser7">
          <a href="javascript:;">
            <p class="iconfont">&#xe5e1;</p>
            帮助</a
          >
        </li>
        <li class="index-ser8">
          <a href="javascript:;">
            <p class="iconfont">&#xe7ba;</p>
            租车</a
          >
        </li>
        <li class="index-ser9">
          <a href="javascript:;">
            <p class="iconfont">&#xe690;</p>
            周边商品</a
          >
        </li>
        <li class="index-ser10">
          <a href="javascript:;">
            <p class="iconfont">&#xe6f7;</p>
            发帖子</a
          >
        </li>
      </ul>
      <p class="index-hot">热门推荐</p>
      <div class="index-month">
        <ul class="index-mcont">
          <li>
            <a href="javascript:;">2月</a>
            <br />
            <a href="javascript:;">寒假/寻梅</a>
          </li>
          <li>
            <a href="javascript:;">3月</a>
            <br />
            <a href="javascript:;">绝美赏花季</a>
          </li>
          <li>
            <a href="javascript:;">赏花</a>
          </li>
          <li>
            <a href="javascript:;">4月</a>
            <br />
            <a href="javascript:;">清明时节</a>
          </li>
        </ul>
      </div>
      <div class="index-last">
        <div class="footer-last">
          <mt-swipe class="footer-limg2" :showIndicators="false" :auto="4000" :speed="7000" >
            <mt-swipe-item > 
              <div class="footer-limgx">
               <div v-for="items of fcategory.slice(0,2)" :key="items.lid" class="footer-limg ">
              <a href="javascript:;">
                <img :src="require(`../assets/images/${items.images}`)">
                <div>
                <span>{{ items.title }}</span>
                <p>{{ items.content }}</p>
                </div>
              </a>
              </div>
              </div>
            </mt-swipe-item>
             <mt-swipe-item >
              <div class="footer-limgx">
               <div v-for="items of fcategory.slice(2,4)" :key="items.lid" class="footer-limg">
              <a href="javascript:;">
                <img :src="require(`../assets/images/${items.images}`)">
                <div>
                <span>{{ items.title }}</span>
                <p>{{ items.content }}</p>
                </div>
              </a>
              </div>
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script src="../assets/icon/iconfont.js"></script>
<style>
@import url("../../public/css/reset.css");
.home-page .header {
  width: 100%;
  background-color: #458ce6;
  height: 6.25rem;
}
.home-page .header-search {
  width: 100%;
  text-align: center;
  display: flex;
}
.home-page .reg-service {
  width: 95%;
  border-radius: 1.5rem;
  border: none;
  height: 2.19rem;
  margin: 0.625rem auto 0px;
  padding-left: 1.9rem;
}
.home-page .header-nav {
  display: flex;
  justify-content: space-around;
  font-size: 1.25rem;
  margin-top: 0.625rem;
}
.home-page .header-nav > li > a {
  color: white;
}
.home-page .header-nav > :first-child {
  font-size: 1.25rem;
}
.home-page .header-nav > li:hover ::after {
  content: "";
  padding-top: 0.375rem;
  width: 60%;
  height: 0.0625rem;
  display: block;
  margin: 0 auto;
  border-bottom: 0.125rem solid white;
}
.home-page .header-loc {
  margin-top: 0.625rem;
  font-size: 0.8rem;
  margin-left: 0.7rem;
}
.home-page .header-swipe {
  height: 6.25rem;
  padding:0.2rem 0.1rem;
  margin: 0 0.5rem;
}
.home-page .header-swipes img {
  width: 100%;
  border-radius: 0.3rem;
}
.home-page .index-content {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.home-page .index-serves {
  display: flex;
  text-align: center;
  margin-bottom: 0.3125rem;
   margin-top: 0.3125rem;
}
.home-page .index-serves > li > a {
  color: black;
  font-size: 0.8rem;
  line-height: 1.9rem;
}
.home-page .index-serves > li {
  width: 20%;
  height: 3.75rem;
  margin-right: 0.3rem;
}
.home-page .index-serves>li:last-child{
  margin-right: 0;
}
.home-page .index-serves1>li>a{
    color:white !important;
}
.home-page .index-serves1>li:first-child{
    border-top-left-radius: 5px;
}
.home-page .index-serves1>li:last-child{
    border-top-right-radius: 5px;
}
.home-page .index-ser1 {
  background: linear-gradient(to bottom, rgba(231, 96, 86), rgba(234, 134, 92));
}
.home-page .index-ser2 {
  background: linear-gradient(
    to bottom,
    rgba(79, 131, 241),
    rgba(104, 173, 243)
  );
}
.home-page .index-ser3 {
  background: linear-gradient(
    to bottom,
    rgba(96, 122, 245),
    rgba(114, 161, 247)
  );
}
.home-page .index-ser4 {
  background: linear-gradient(
    to bottom,
    rgba(94, 189, 178),
    rgba(126, 215, 185)
  );
}
.home-page .index-ser5 {
  background: linear-gradient(
    to bottom,
    rgba(241, 162, 105),
    rgba(241, 169, 87)
  );
}
.home-page .index-ser6 {
  background-color: rgb(253, 245, 242);
}
.home-page .index-ser7 {
  background-color: rgb(240, 247, 255);
}
.home-page .index-ser8 {
  background-color: rgb(243, 243, 253);
}
.home-page .index-ser9 {
  background-color: rgb(238, 250, 248);
}
.home-page .index-ser10 {
  background-color: rgb(253, 248, 242);
}

.home-page .index-mcont {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.625rem 0.625rem 0.625rem;
  text-align: center;
}
.home-page .index-mcont > li {
  width: 23%;
  border: 1px solid rgb(237, 241, 245);
  border-radius: 0.3rem;
  height: 2rem;
}
.home-page .index-mcont > li:first-child {
  background: url("../assets/images/beijing1.jpg");
}
.home-page .index-mcont > li:first-child > a {
  color: white;
}
.home-page .index-mcont > li:nth-child(3) {
  line-height: 2rem;
}
.home-page .index-mcont > li > a {
  color: black;
  font-size: 0.625rem;
}
.home-page .index-mcont > li > a:nth-child(2) {
  font-size: 0.5rem;
}
.home-page .footer-last{
  height: 8rem;
}
.home-page .footer-limg img{
  width:11rem;
  height:6rem;
  border-radius: 3px;
}
.footer-limgx{
  display: flex;
  justify-content: space-between;
}
.footer-limgx a{
  color:gray;
}
.footer-limgx span{
  color: black;
}
.footer-limg2{
  padding: 0.0625rem;
}
</style>
 <script>
export default {
  data() {
    return {
      locmsg: "",
      fcategory: "",
    };
  },
  methods: {
    location() {
      //用百度地图API完成定位
      let native = new BMap.LocalCity();
      //  问题函数嵌套的this指向问题，在函数内重新赋值this，再放入到回调函数中使用
      //    let that =this;
      //    native.get(function(r){
      //        that.locmsg=r.name
      //      });
      // 直接使用箭头函数无作用域的提点
      native.get((r) => {
        this.locmsg = r.name;
      });
    },
  },
  mounted() {
    //页面挂载时调用location函数，得到当前ip地址所在位置，并放入到页面响应位置
    this.location();
    this.axios.get("/fcategory").then((res) => {
      this.fcategory = res.data.results;
      console.log(this.fcategory);
    });
  },
};
</script>