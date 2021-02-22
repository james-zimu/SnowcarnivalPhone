<template>
  <div class="ShopCar">
    <!-- 标题头部区域 -->
    <header>购物车</header>
    <!-- 中间内容区域 -->
    <div class="container">
      <!-- 如果购物车为空则显示提示 -->
      <div v-if="ShopCar.length>0"></div>
      <div class="else-data" v-else>购物车空空如也...</div>
      <!-- 单条区域 -->
      <div class="item" v-for="(item,index) in ShopCar" :key="index">
        <!-- mint ui删除选项 -->
        <mt-cell-swipe
            title=""
            :right="[
              {
                content: '删除',
                style: { background: 'red', color: '#fff' },
                handler: () => del(index)
              }
            ]">
          <!-- 防止mint ui对样式结构进行破坏 -->
          <div class="mint">
            <!-- logo区域 -->
            <div class="logo">
              <img :src="item.logo_img" >
              <span>{{item.logo_name}}</span>
            </div>
            <!-- 详细内容区域 -->
            <div class="details">
              <img :src="item.details_img" >
              <div class="details-list">
                <span>{{item.de}}</span>
                <div class="list-more">
                  <span>{{item.time}}</span>
                  <span>{{item.person}}</span>
                </div>
                <div class="list-price">
                  ¥{{item.price}}
                </div>
              </div>
            </div>
            <!-- 购买数量区域 -->
            <div class="num">
              <span>购买数量</span>
              <div>
                <button @click=btn(false,index)>-</button>
                <input type="text" :value="item.num">
                <button @click=btn(true,index)>+</button>
              </div>
            </div>
          </div>
        </mt-cell-swipe>
      </div>
    </div>
    <!-- 底部区域 -->
    <footer>
      <div class="footer-left">
        实际付款
        <span>¥{{num_price}}</span>
      </div>
      <div class="footer-right">立即付款</div>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num_price:0,
      ShopCar:[
        {
          id:"001",
          logo_img:"snow.png",
          logo_name:"郑州冰雪嘉年华旗舰店",
          details_img:"snow.png",
          details_top:"郑州冰雪嘉年华门票",
          time:"3日通用票",
          person:"成人票",
          price:"1657.00",
          num:"3"
        },
        {
          id:"002",
          logo_img:"snow.png",
          logo_name:"成都冰雪嘉年华旗舰店",
          details_img:"snow.png",
          details_top:"成都冰雪嘉年华门票",
          time:"单日通用票",
          person:"儿童票",
          price:"657.00",
          num:"1"
        },
        {
          id:"003",
          logo_img:"snow.png",
          logo_name:"武汉冰雪嘉年华旗舰店",
          details_img:"snow.png",
          details_top:"武汉冰雪嘉年华门票",
          time:"2日通用票",
          person:"成人票",
          price:"1457.00",
          num:"1"
        },
        {
          id:"004",
          logo_img:"snow.png",
          logo_name:"云南冰雪嘉年华旗舰店",
          details_img:"snow.png",
          details_top:"云南冰雪嘉年华门票",
          time:"2日通用票",
          person:"家庭票",
          price:"2457.00",
          num:"1"
        }
      ]
    }
  },
  methods:{
    Totalprice(){
      let price=0;
      this.ShopCar.forEach((item,index)=>{
        price+=item.num*item.price
      })
      this.num_price=price.toFixed(2)
    },
    btn(bool,index){
      let shopIndex=this.ShopCar[index]
      if(bool){
        shopIndex.num++
      }else{
        if(shopIndex.num<=1){
          return
        }
        shopIndex.num--
      }
      this.Totalprice()
    },
    del(index){
      this.ShopCar.splice(index,1);
      this.Totalprice()
    }
  },
  mounted(){
    this.Totalprice()
  }
}
</script>
<style>
.ShopCar header{
    height: 4rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    font-size: 1.5rem;
    background: #468ce6;
  }
  .ShopCar .mint{
    width: 25rem;
  }
  .ShopCar .contaier{
    background: #fff;
  }
  .ShopCar .item{
    padding: 1rem 1rem;
    border-bottom: 1px solid #ccc;
    margin-left: -0.6rem;
  }
  .ShopCar .logo{
    height: 2rem;
    /* 左右浮动布局 */
    display: flex;
    /* 交叉轴中点对齐 */
    align-items: center;
  }
  .ShopCar .logo img{
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
  }
  .ShopCar .logo span{
    margin-left: 0.3rem;
    font-size: 1.5rem;
  }
  .ShopCar .details{
    background: #f5f5f5;
    font-size: 1rem;
    display: flex;
    padding: 0.5rem;
  }
  .ShopCar .details img{
    width: 4rem;
    height: 4rem;
  }
  .ShopCar .details-list{
    margin-left: 1rem;
    color:#000;
  }
  .ShopCar .details-list span{
    display: block;
    margin-top: 0.5rem;
  }
  .ShopCar .list-more span{
    color: #666;
  }
  .ShopCar .list-price{
    color: #468ce6 ;
    font-size: 1.3rem;
    padding: 0.5rem;
  }
  .ShopCar .num{
    color: #666;
    padding: 0.3rem;
    display: flex;
    /* 弹性布局左右排列两侧对齐 */
    justify-content: space-between;
    margin-right:2rem ;
  }
  .ShopCar .num button{
    width: 2rem;
    height: 2rem;
    background: #e0e0e0;
    border: none;
    outline: none;
    
  }
  .ShopCar .num input{
    width: 2.5rem;
    height: 2rem;
    border: none;
    text-align: center;
    background: #fff;
  }
  .ShopCar footer{
    width: 100%;
    height: 3rem;
    position: fixed;
    display: flex;
    bottom: 0;
    background: #fff;
  }
  .ShopCar .footer-left{
    flex: 1;
    text-align: center;
    line-height: 3.5rem;
    font-size: 1rem;
    padding-right: 1rem;
  }
  .ShopCar .footer-left span{
    color: #468ce6;
  }
  .ShopCar .footer-right{
    background: #468ce6;
    color: #fff;
    width: 6rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
  }
  .mint-cell-swipe-button{
    line-height: 11rem !important;
  }
  .ShopCar .else-data{
    margin-top: 17rem ;
    color:#468ce6;
    text-align: center;
    font-size: 2rem;
    line-height: 3rem;
  }
</style>