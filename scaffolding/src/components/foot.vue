<template>
    <div class="footer">
<div class="bottom-bar">
  <mt-tabbar v-model="selected">
    <mt-tab-item id="one">
     <p class="iconfont">&#xe695;</p>
     <h4>首页</h4>
    </mt-tab-item>
    <mt-tab-item id="two">
           <p class="iconfont">&#xe731;</p>
       <h4><a href="/community">社区</a> </h4>
    </mt-tab-item>
    <mt-tab-item id="three">
       <p class="iconfont">&#xe508;</p>
      <h4> <a href="/shopcar">购物车</a></h4>
    </mt-tab-item>
    <mt-tab-item id="four">
       <p class="iconfont">&#xe63e;</p>
      <h4><a href="/trip">行程</a> </h4>
    </mt-tab-item>
    <mt-tab-item id="five">
       <p class="iconfont">&#xe502;</p>
      <h4><a href="/userpage">我的</a></h4>
    </mt-tab-item>
  </mt-tabbar>
  
</div>
    </div>
</template>
<style scoped>
  h4{
    margin-top: 5px;
  }
  .iconfont{
    font-size: 1.25rem;
  }
</style>
<script>
export default {
    data(){
        return{
            selected:''
        }
    }
}
</script>
