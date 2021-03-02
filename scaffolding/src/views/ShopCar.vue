<template>
  <div class="ShopCar">
    <!-- 标题头部区域 -->
     <mt-header class="header" title="嘉年华购物车">
          <router-link to="/shopcar" slot="left">
          <mt-button class="zhuce" icon="back">返回</mt-button>
          </router-link>
      </mt-header>
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
              <img :src="require('../../public/snow.png')" />
              <span>{{ item.logo_name }}</span>
            </div>
            <!-- 详细内容区域 -->
            <div class="details">
              <img :src="require('../../public/snow.png')" />
              <div class="details-list">
                <span class="details_top">{{ item.details_top }}</span>
                <div class="list-more">
                  <span>{{ item.time }}</span>
                  <span>{{ item.person }}</span>
                </div>
                <div class="list-price">¥{{ item.price }}</div>
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
  data() {
    return {
      num_price: 0,
      ShopCar: [],
    };
  },
  methods: {
    Totalprice() {
      let price = 0;
      //调用后台接口计算总价
      this.axios.get("/total").then((result) => {
        this.ShopCar.price = result.data.result;
      });
      this.ShopCar.forEach((item, index) => {
        price += item.num * item.price;
      });
      this.num_price = price.toFixed(2);
    },
    btn(bool, index) {
      let shopIndex = this.ShopCar[index];
      //获取该商品的cid;
      let cid = this.ShopCar[index].cid;
      //获取该商品的数量;
      let num = this.ShopCar[index].num;
      let object = {
        cid: cid,
        num: num,
      };
      if (bool) {
        shopIndex.num++;
        //数据库中该商品的数量随用户的操作而变化
        this.axios.post(`/addnum`, this.qs.stringify(object)).then((result) => {
          this.Totalprice();
        });
      } else {
        if (shopIndex.num <= 1) {
          return;
        }
        shopIndex.num--;
        //数据库中该商品的数量随用户的操作而变化
        this.axios
          .post(`/lessnum`, this.qs.stringify(object))
          .then((result) => {
            this.Totalprice();
          });
      }
      // this.Totalprice();
    },
    del(index) {
      //获取要删除的商品cid
      this.$messagebox.confirm(`确认要删除该商品吗?`).then((action) => {
        //将获得的唯一cid传到数据库
        let cid = this.ShopCar[index].cid;
        let object = {
          cid: cid,
        };
        this.axios
          .post("/shopcardelete", this.qs.stringify(object))
          .then((res) => {
            if (res.data.code == 200) {
              this.$messagebox.alert("删除成功");
              this.ShopCar.splice(index, 1);
              //删除后重新计算商品总价
              this.Totalprice();
            }
          });
      });
    },
  },
  mounted() {
    //获取用户购物车里的数据
    this.axios.get(`/getcar`).then((result) => {
      //将服务器返回的数据赋值给shopcar变量
      this.ShopCar = result.data.result;
      //调用计算总价方法计算价格
      this.Totalprice();
    });

    // //获取后台用户选择的租车列表
    // this.axios.get(`/carrentalshop`).then((result) => {
    //   //将服务器返回的数据赋值给car变量
    //   this.ShopCar = result.data.result;
    //   //调用计算总价方法计算价格
    //    this.Totalprice();
    // });

  },
};
</script>
<style>
.ShopCar .header{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    font-size: 1.2rem;
    background: #468ce6;
  }
.ShopCar .mint {
  width: 25rem;
}
.ShopCar .contaier {
  background: #fff;
}
.ShopCar .item {
  padding: 1rem 1rem;
  border-bottom: 1px solid #ccc;
  margin-left: -0.6rem;
}
.ShopCar .logo {
  height: 2rem;
  /* 左右浮动布局 */
  display: flex;
  /* 交叉轴中点对齐 */
  align-items: center;
}
.ShopCar .logo img {
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
}
.ShopCar .logo span {
  margin-left: 0.3rem;
  font-size: 1.5rem;
}
.ShopCar .details {
  background: #f5f5f5;
  font-size: 1rem;
  display: flex;
  padding: 0.5rem;
}
.ShopCar .details img {
  width: 4rem;
  height: 4rem;
}
.ShopCar .details-list {
  margin-left: 1rem;
  color: #000;
}
.ShopCar .details-list span {
  display: block;
  margin-top: 0.5rem;
}
.ShopCar .list-more span {
  color: #666;
}
.ShopCar .list-price {
  color: #468ce6;
  font-size: 1.3rem;
  padding: 0.5rem;
}
.ShopCar .num {
  line-height: 2.5rem;
  color: #666;
  padding: 0.3rem;
  display: flex;
  /* 弹性布局左右排列两侧对齐 */
  justify-content: space-between;
  margin-right: 2rem;
}
.ShopCar .num button {
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  background: #e0e0e0;
  border: none;
  outline: none;
}
.ShopCar .num input {
  width: 0.5rem;
  height: 2rem;
  margin-right: 1.5rem;
  border: none;
  text-align: center;
  background: #fff;
}
.ShopCar footer {
  width: 100%;
  height: 3rem;
  position: fixed;
  display: flex;
  bottom: 0;
  background: #fff;
}
.ShopCar .footer-left {
  flex: 1;
  text-align: center;
  line-height: 3.5rem;
  font-size: 1rem;
  padding-right: 1rem;
}
.ShopCar .footer-left span {
  color: #468ce6;
}
.ShopCar .footer-right {
  background: #468ce6;
  color: #fff;
  width: 6rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
}
.ShopCar .mint-cell-swipe-button {
  line-height: 11rem !important;
}
.ShopCar .else-data {
  margin-top: 17rem;
  color: #468ce6;
  text-align: center;
  font-size: 2rem;
  line-height: 3rem;
}
.ShopCar .details_top{
  color: #006eff;
}
.ShopCar .container{
  margin-bottom: 3rem;
}
</style>