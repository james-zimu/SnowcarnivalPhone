<template>
  <div class="home-page">
    <div>
      <div class="header-image">
        <img src="../../public/home_image/home_header.jpg" />
      </div>
      <!-- 这个地方的 郑州 地名需要根据定位的位置 动态修改 -->
      <p class="header-loc">您好，欢迎来到 {{ locmsg }} 冰雪嘉年华</p>
      <div class="header-swipe">
        <mt-swipe class="header-swipes" :auto="4000" :speed="5000">
          <mt-swipe-item>
            <img src="../../public/home_image/header1.jpg" />
          </mt-swipe-item>
          <mt-swipe-item
            ><img src="../../public/home_image/header2.jpg"
          /></mt-swipe-item>
          <mt-swipe-item
            ><img src="../../public/home_image/header3.jpg"
          /></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="index-content">
        <ul class="index-serves index-serves1">
          <li class="index-ser1 ">
            <a class="iconfont " href="javascript:;">
              <p class="iconfont first-icon">&#xe603;</p>
              酒店</a
            >
          </li>
          <li class="index-ser3">
            <a href="javascript:;">
              <p class="iconfont first-icon">&#xec00;</p>
              线路
            </a>
          </li>
          <li class="index-ser5">
            <a href="javascript:;">
              <p class="iconfont first-icon">&#xe507;</p>
              攻略/论坛</a
            >
          </li>
        </ul>
        <ul class="index-serves">
          <li class="index-ser6">
            <a href="#/ticket">
              <p class="iconfont shop-icon">&#xe504;</p>
              门票/玩乐</a
            >
          </li>
          <li class="index-ser8">
            <a href="#/mapnav">
              <p class="iconfont car-icon">&#xf01f2;</p>
              地图</a
            >
          </li>
          <li class="index-ser10">
            <a href="#/community">
              <p class="iconfont forum-icon">&#xe620;</p>
              查攻略</a
            >
          </li>
        </ul>
        <ul class="index-serves">
          <li class="index-ser6">
            <a href="#/hotel">
              <p class="iconfont hotel-icon">&#xe625;</p>
              特价/爆款</a
            >
          </li>
          <li class="index-ser8">
            <a href="#/carrental">
              <p class="iconfont car-icon">&#xe7ba;</p>
              租车</a
            >
          </li>
          <li class="index-ser10">
            <a href="javascript:;">
              <p @click="clickkk" class="iconfont forum-icon">&#xe6f7;</p>
              发帖子</a
            >
          </li>
        </ul>
        <!-- 省出空间 <p class="index-hot">
        <span class="iconfont hotel-icon hotelicon-font ">&#xe625;</span>
        热门推荐
        </p> -->
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
              <a href="javascript:;">
                <span class="iconfont ffll-icon">&#xe607;</span>
                <span>赏花</span>
              </a>
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
            <div class="bottom_left">
              <img src="../../public/home_image/bottom_left.jpg" />
            </div>
            <div class="bottom_right">
              <div class="bright_img">
                <img src="../../public/home_image/bottom_right1.jpg" />
                <p class="bright-font2">冰雪大世界</p>
              </div>
              <div class="bright_img">
                <img src="../../public/home_image/bottom_right2.jpg" />
                <p class="bright-font2">冰雪梦幻王国</p>
              </div>
            </div>
            <div class="bottom_right">
              <div class="bright_img">
                <img src="../../public/home_image/bottom_right3.jpg" />
                <p class="bright-font2">滑雪胜地</p>
              </div>
              <div class="bright_img">
                <img src="../../public/home_image/bottom_right4.jpg" />
                <p class="bright-font2">白色世界</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot class="foot"></foot>
  </div>
</template>
<script src="../assets/icon/iconfont.js"></script>
<style>
@import url("../../public/css/reset.css");
.home-page .icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.home-page .header-image {
  width: 100%;
  height: 6.25rem;
}
.home-page .header-image > img {
  width: 100%;
  height: 100px;
}
.home-page .header-loc {
  margin-top: 0.625rem;
  font-size: 0.8rem;
  margin-left: 0.7rem;
}
.home-page .header-swipe {
  height: 6.25rem;
  padding: 0.2rem 0.1rem;
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
}
.home-page .index-serves > li > a {
  color: black;
  font-size: 0.8rem;
  line-height: 1.9rem;
}
.home-page .index-serves > li {
  width: 50%;
  margin-right: 0.3rem;
}
.home-page .index-serves > li:last-child {
  margin-right: 0;
}
.home-page .index-serves1 > li > a {
  color: white !important;
}
.home-page .index-serves1 > li:first-child {
  border-top-left-radius: 5px;
}
.home-page .index-serves1 > li:last-child {
  border-top-right-radius: 5px;
}
.home-page .index-ser1 {
  background: linear-gradient(to bottom, rgba(231, 96, 86), rgba(234, 134, 92));
}
.home-page .index-ser3 {
  background: linear-gradient(
    to bottom,
    rgba(96, 122, 245),
    rgba(114, 161, 247)
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
  text-align: center;
}
.home-page .index-mcont > li {
  width: 23%;
  border: 1px solid rgb(237, 241, 245);
  border-radius: 0.3rem;
  height: 2rem;
}
.home-page .index-mcont > li:nth-child(2) {
  background: url("../../public/home_image/beijing1.jpg");
}
.home-page .index-mcont > li:nth-child(2) > a {
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
.home-page .footer-last {
  height: 8rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.3125rem;
}
.home-page .hotel-icon {
  color: rgb(250, 97, 84);
  font-size: 23px;
}
.home-page .help-icon {
  color: rgb(70, 156, 244);
  font-size: 23px;
}
.home-page .car-icon {
  color: rgb(123, 122, 245);
  font-size: 23px;
}
.home-page .shop-icon {
  color: rgb(233, 111, 89);
  font-size: 23px;
}
.home-page .forum-icon {
  color: rgb(254, 146, 52);
  font-size: 23px;
}
.home-page .first-icon {
  font-size: 23px;
}
.home-page .mint-swipe-indicators {
  bottom: -3px !important;
}
.home-page .ffll-icon {
  color: pink;
}
.home-page .index-hot {
  font-size: 0.8125rem;
}
.home-page .hotelicon-font {
  font-size: 1rem !important;
}
.home-page .bottom_left img {
  width: 9rem;
  border-radius: 0.3125rem;
  border-color: #ddd;
}
.home-page .bright_img {
  width: 6.5rem;
}
.home-page .bright_img img {
  width: 100%;
  margin-left: 0.1875rem;
  border-radius: 0.3125rem;
  margin-top: 0.625rem;
}

.home-page .bright-font2 {
  font-size: 0.8125rem;
  font-weight: 200;
  margin: 0.3125rem 0 0 0.3125rem;
}
.home-page .foot .h-page{
  background: #eee;
  color: #458ce6 !important;
}
</style>
<script>
export default {
  data() {
    return {
      locmsg: "加载中",
      fcategory: "",
    };
  },
  methods: {
    clickkk() {
      this.$store.commit("asc", 100);
    },

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
    // this.axios.get("/fcategory").then((res) => {
    //   this.fcategory = res.data.results;
    //   console.log(this.fcategory);
    // });
  },
};
</script>
