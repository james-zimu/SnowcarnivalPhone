<template>
  <div class="Hotel">
    <!-- 导航头区域 -->
    <mt-header class="header" title="嘉年华酒店推荐">
      <router-link to="/#/Home_page" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 中心内容区域 -->
    <div class="all">
      <div class="container">
        <!-- 顶部容器 -->
        <div class="top">
          <!-- 顶部标题 -->
          <span class="top-title">{{ title1 }}</span>
          <!-- 顶部内容容器 -->
          <div class="imgs-box">
            <!-- 顶部左边区域容器 -->
            <div class="top-flex">
              <a class="left-img-box" href="#/hotel_details">
                <p>{{ Hotel[0].title }}</p>
                <div class="left-img">
                  <img :src="imgurl[0].imgurl" />
                </div>
              </a>
              <a class="right-img-box" href="#/hotel_details"
                ><p>{{ Hotel[1].title }}</p>
                <div class="right-img">
                  <img :src="imgurl[1].imgurl" />
                </div>
              </a>
            </div>
            <div class="bottom-flex">
              <a class="bottom-left-box" href="#/hotel_details"
                ><p>{{ Hotel[2].title }}</p>
                <div class="bottom-left">
                  <img :src="imgurl[2].imgurl" />
                </div>
              </a>
              <a class="bottom-center-box" href="#/hotel_details"
                ><p>{{ Hotel[3].title }}</p>
                <div class="bottom-center">
                  <img :src="imgurl[3].imgurl" />
                </div>
              </a>
              <a class="bottom-right-box" href="#/hotel_details"
                ><p>{{ Hotel[4].title }}</p>
                <div class="bottom-right">
                  <img :src="imgurl[4].imgurl" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- 底部容器 -->
        <div class="bottom">
          <div class="bottom-title">{{ title2 }}</div>
          <div class="bottom-box">
            <a class="bottomer-left" href="#/hotel_details">
              <img :src="imgurl[5].imgurl" />
            </a>
            <a class="bottomer-center" href="#/hotel_details">
              <img :src="imgurl[6].imgurl" />
            </a>
            <a class="bottomer-right" href="#/hotel_details">
              <img :src="imgurl[7].imgurl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: "嘉年华精选榜",
      title2: "嘉年华特色榜",
      Hotel: [
        { title: "门店新客" },
        { title: "商户大促" },
        { title: "出游推荐" },
        { title: "早订优惠" },
        { title: "优享酒店" },
      ],
      imgurl: [
        { imgurl: require("../../public/hotel/xinke.jpg") },
        { imgurl: require("../../public/hotel/jingxuan.jpg") },
        { imgurl: require("../../public/hotel/kuanghuan.jpg") },
        { imgurl: require("../../public/hotel/zaoniao.jpg") },
        { imgurl: require("../../public/hotel/zunxiang.jpg") },
        { imgurl: require("../../public/hotel/wenquan.jpg") },
        { imgurl: require("../../public/hotel/gaoshan.jpg") },
        { imgurl: require("../../public/hotel/jiguang.jpg") },
      ],
    };
  },
};
</script>
<style>
.Hotel .header {
  height: 3rem;
  width: 100%;
  text-align: center;
  line-height: 4rem;
  color: #fff;
  font-size: 1.2rem;
  background: #468ce6;
}
.Hotel .all {
  width: 100%;
}
.Hotel .container {
  margin-right: 3%;
  margin-left: 3%;
}
.Hotel header {
  height: 4rem;
  width: 100%;
  text-align: center;
  line-height: 4rem;
  color: #fff;
  font-size: 1.5rem;
  background: #468ce6;
}
.Hotel .top-title {
  display: block;
  text-align: center;
  margin-top: 1rem;
  font: 900 1.5rem "宋体";
}
.Hotel .imgs-box {
  width: 100%;
  height: 14.8rem;
  margin-top: 1rem;
  background-color: #9ac7f7;
  border-radius: 0.6rem;
}
.Hotel .top-flex {
  display: flex;
  justify-content: space-between;
}
.Hotel .left-img-box {
  display: block;
  cursor: pointer;
  width: 63%;
  height: 6.5rem;
  margin: 1rem 1.5%;
  margin-top: 0.6rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
}
.Hotel .left-img {
  width: 13rem;
  height: 4rem;
  margin-left: 0.5rem;
}
.Hotel .left-img > img {
  width: 100%;
  height: 100%;
  border-radius: 5%;
}
.Hotel .right-img,
.bottom-left,
.bottom-center,
.bottom-right {
  margin-left: 0.3rem;
  width: 6rem;
  height: 4rem;
}
.Hotel .right-img > img,
.bottom-left > img,
.bottom-center > img,
.bottom-right > img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
.Hotel p {
  color: black;
  padding: 0.5rem;
}
.Hotel .right-img-box {
  display: block;
  cursor: pointer;
  width: 30.66%;
  height: 6.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.6rem;
  background-color: #fff;
}
.Hotel .bottom-flex {
  display: flex;
  margin-top: -0.4rem;
  justify-content: space-between;
}
.Hotel .bottom-left-box {
  display: block;
  cursor: pointer;
  width: 30.66%;
  height: 6.5rem;
  border-radius: 0.5rem;
  margin-left: 1.5%;
  background-color: #fff;
}
.Hotel .bottom-center-box {
  display: block;
  cursor: pointer;
  width: 30.66%;
  height: 6.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
}
.Hotel .bottom-right-box {
  display: block;
  cursor: pointer;
  width: 30.66%;
  height: 6.5rem;
  border-radius: 0.5rem;
  margin-right: 1.5%;
  background-color: #fff;
}
.Hotel .bottom-title {
  text-align: left;
  margin-top: 1rem;
  font: 900 1.5rem "宋体";
}
.Hotel .bottom-box {
  margin-top: 1rem;
  width: 100%;
  height: 14rem;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s;
}
.Hotel .bottom-box img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
.Hotel .bottomer-left {
  display: block;
  width: 32%;
  height: 14rem;
}
.Hotel .bottomer-center {
  display: block;
  width: 32%;
  height: 14rem;
}
.Hotel .bottomer-right {
  display: block;
  width: 32%;
  height: 14rem;
}
</style>>