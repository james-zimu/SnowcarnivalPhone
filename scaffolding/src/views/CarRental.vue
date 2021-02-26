<template>
  <div class="carrental-navbar">
    <!-- 头部区域 -->
     <header>租车</header>
    <!-- navbar -->
    <div class="nav-bg">
    <mt-navbar class="nav" v-model="selected" v-for="(item,index) in option" :key="index" >
      <mt-tab-item class="nav-item" :id="index">{{item}}</mt-tab-item>
      <!-- <mt-tab-item :id="index">option B</mt-tab-item>
      <mt-tab-item :id="index">option C</mt-tab-item> -->
    </mt-navbar>
    </div>
<!-- tab-container -->
    <div class="item">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="index"  v-for="(items,index) in caritem" :key="index" >
        <div class="car-bg">
          <div  :id="index" class="car" v-for="(carimg,index) in items.carimgall" :key="index">
            <img class="carimg" :src="carimg">
            <span class="pricetext">价格:</span><span class="price">¥{{carprice1[index]}}.00</span>
            <!-- 复选框 -->
            <input id="input" type="checkbox"  class="check_box tui-checkbox" :value="index" @click="choice($event)">
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <!-- footer区域 -->
    <footer>
      <div>
        <mt-button size="large" class="footer-left" type="default" @click="remove">重置</mt-button>
      </div>
      <mt-button size="large" class="footer-right" type="primary" @click="openPlay" >加入购物车</mt-button>
      <div></div>
    </footer>
  </div>
</template>
 
<script>
export default {
  name: 'carrental-navbar',
  data() {
    return {
      selected: '1',
      carmodel:[],
      //选择要买的的内容
      shop:[],
      carprice1:[],
      option:[
        "经济型",
        "商务型",
        "15座商务",
        "SUV",
        "豪华型"
      ],
      
      caritem:[ 
          {carimgall:[require("../../public/car/cheap/001.png"),require("../../public/car/cheap/002.png"),require("../../public/car/cheap/003.png"),require("../../public/car/cheap/005.png"),require("../../public/car/cheap/006.png"),require("../../public/car/cheap/007.png")]},
          {carimgall:[require("../../public/car/business/009.png"),require("../../public/car/business/010.png"),require("../../public/car/business/011.png"),require("../../public/car/business/012.png"),require("../../public/car/business/013.png")]},
          {carimgall:[require("../../public/car/businessbig/008.png")]},
          {carimgall:[require("../../public/car/suv/019.png"),require("../../public/car/suv/020.png"),require("../../public/car/suv/021.png"),require("../../public/car/suv/022.png"),require("../../public/car/suv/023.png"),require("../../public/car/suv/024.png")]},
          {carimgall:[require("../../public/car/luxury/014.png"),require("../../public/car/luxury/015.png"),require("../../public/car/luxury/016.png"),require("../../public/car/luxury/017.png"),require("../../public/car/luxury/018.png")]},
       ],
      carlist:[]
    }
  },
  methods:{
    choice(e){
        let index = e.target.value
        // let car1=this.cars1[index];
        let car =this. carprice1[index];
        this.shop.push(car)
        // console.log(this.shop);
        
    },
    remove(){
      this.shop=[];
      let checkbox =document.getElementsByTagName("input");
          for(let i = 0 ;i<=checkbox.length; i++){
            checkbox[i].checked=false;
          }
          // console.log(this.shop);
      // console.log(checkbox[1]);
    },
    openPlay(){
      //获取需要加入购物车的信息
      let shop = this.shop;
      let object={
        shop:shop
      };
      console.log(object);
      // let object={
      //   shop:1
      // }
      // this.axios.post("/carrentalshop",this.qs.stringify(object)).then((res)=>{
      this.axios.post("/carrentalshop",this.qs.stringify(object,{arrayFormat:'repeat'})).then((res)=>{
        console.log(this.qs.stringify(object));

        if(res.data.code==200){
            this.$messagebox.alert("成功加入购物车");
          }
      })
    }
  },
  mounted(){
      //获取url中的动态参数
      //将此id发送到web服务器,以获取当前文章的详细信息
      this.axios.get('/carrental',).then(res=>{
        //从数据库中拿到的数据保存到一个变量中
        let carall = res.data.results;
        //分离出每一个车型
        for(let i=0;i<=carall.length;i++){
          //把第一辆车的内容放入car中
            let car = carall[i];
            //把第一辆车的图片链接放入carimg中
            //把第一辆车的价钱放入carprice中
            let carprice=car.price;
            this.carprice1.push(carprice);
            
        }
        //分离数据数据表第一项的第一个对象
        
      })
    }
}
</script>

<style>
  .carrental-navbar .nav{
    width: 5rem;
    background: 0;
  }
  .carrental-navbar .nav-bg{
      position: absolute;
      background: rgb(244,244, 244);
      width: 5rem;
      height: 100%;
  }
   .mint-tab-item-label{
     font-size: 1.1rem !important;
   }
  .carrental-navbar header{
     height: 4rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    font-size: 1.5rem;
    background: #468ce6;
  }
   .carrental-navbar .item{
     position: absolute;
     /* background: red; */
     right: 0rem;
     width: 18.45rem;
   }
  .carrental-navbar .car-bg{
      /* background: red; */
      width: 18.45rem;
    }
  .carrental-navbar .carimg{
    position: absolute;
    width: 7rem;
  }
  .carrental-navbar .car{
      display: inline-block;
      margin-top: 0.7rem;
      margin-left: 0.7rem;
      width: 8rem;
      height: 8rem;
      border: 0.1rem solid #ddd;
    }
  .carrental-navbar footer{
    width: 100%;
    height: 4rem;
    position: fixed;
    display: flex;
    padding-top: 1rem;
    bottom: 0rem;
    background: #fff;
  }
  .carrental-navbar .footer-left{
   position: absolute;
    width: 8rem;
    left: 1rem;
  }
  .carrental-navbar .footer-right{
    position: absolute;
    width: 13rem;
    right: 1rem;
  }
 .carrental-navbar .check_box{
   position: absolute;
   top: 0.3rem;
   right: -0.5rem;
 }
 .carrental-navbar .tui-checkbox:checked {
  background: #468ce6;
  border: solid 1px #468ce6;
}
 .carrental-navbar .tui-checkbox {
  width: 1.3rem;
  height: 1.3rem;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-appearance: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: background-color ease 0.6s;
  transition: background-color ease 0.6s;
}
 .carrental-navbar .pricetext{
    position: relative;
    top: 6.3rem;
    left: 1.2rem;
 }
 .carrental-navbar .price{
    position: relative;
    top: 6.3rem;
    left: 1.3rem;
    color: #468ce6;
 }
 .carrental-navbar .tui-checkbox:checked::after {
  content: '';
  top: 0.1rem;
  left: 0.05rem;
  position: absolute;
  background: transparent;
  border: #fff solid 0.2rem;
  border-top: none;
  border-right: none;
  height: 0.4rem;
  width: 1rem;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
 
</style>