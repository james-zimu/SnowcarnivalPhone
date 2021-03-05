<template>
    <div class="footer">
      <a href="#/" class="footer-inner h-page">
        <span class="iconfont">&#xe695;</span><br>
        <p>首页</p>
      </a>
      <a href="#/community" class="footer-inner h-comm">
        <span class="iconfont">&#xe731;</span><br>
        <p>社区</p>
      </a>
      <a href="#/shopcar" class="footer-inner">
        <span class="iconfont">&#xe50c;</span><br>
        <p>购物车</p>
      </a>
      <a href="#/trip" class="footer-inner h-trip">
        <span class="iconfont">&#xe63e;</span><br>
        <p>行程</p>
      </a>
      <a href="#/userpage" class="footer-inner h-user">
        <span class="iconfont">&#xe502;</span><br>
        <p>我的</p>
      </a>
    </div>
</template>
<style>
.footer{
  width: 100%;
  height: 3.5rem;
  position: fixed;
  bottom: -8px;
  background: #fff;
}
.footer .footerbg{
  background: #ddd;
  color: #3477ec !important;
}
.footer .footer-inner{
  display: inline-block;
  width: 4.6875rem;
  height: 3.2rem;
  text-align: center;
  color: #3c3c3c;
  padding-top: 0.4rem;
}
.footer .footer-inner span{
  font-size: 1.1rem;
}
.footer .footer-inner p{
  padding-top: 0.2rem;
}
</style>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
  }
}
</script>

