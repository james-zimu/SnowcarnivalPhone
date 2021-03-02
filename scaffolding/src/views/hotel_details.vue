<template>
    <div class="hotel_details">
        <mt-header class="header" title="嘉年华酒店">
            <router-link to="/shopcar" slot="left">
            <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="container">
            <div  class="details" v-for="(item,index) in push" :key="index">
                <div>
                    <a href="#"><img src="../../public/gray.png" alt="" ></a>
                </div>
                <div class="title">
                    <div class="title mlf7" >
                        <a href="#" class="black">{{item.title}}</a>
                    </div>
                    <div class="comment mlf7">
                        <a class="orange ">{{item.comment}}</a>
                        <span class="gray">分</span>
                        |
                        <a class="gray">{{item.number}}条评论</a>
                    </div>
                    <!-- <a href="#" class="bt-full mlf-half" :state=fullState @blur.native.capture="checkFull" v-model="full">{{item.full}}</a> -->
                    <p class=" mt5 small mlf75">
                        <a href="#" class="tips">{{item.product_details}}</a>
                    </p>
                    <span class="blue small mlf-half">￥</span>
                    <span class="blue price"  >{{item.price}}</span>
                    <input type="button" :value="index" @click="handle($event)" class="forhandle">
                    <button class="order" >加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
/* ////////////头部////////////// */
.hotel_details .header{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    font-size: 1.2rem;
    background: #468ce6;
  }
.hotel_details .container{
    margin-top: 1rem;
    margin-left: 1.5rem;
}

.hotel_details .btn {
    width: 150px;
    height: 50px;
    font-size: 16px;
    color: #fff;
    background: #28abde;
    border-radius: 5px;
    position: absolute;
    top: 50px;
    left: 30%;
}
.hotel_details .blue{
    color:rgb(44, 96, 240);;
}
.hotel_details .gray{
    color: gray;
    font-size: 0.3rem;
    margin-left:1rem
}
.hotel_details .orange{
    color: orange;
    font-size: 0.3rem;
    margin-left:1rem
}
.hotel_details .details{
    margin-top: 2rem;
}
.hotel_details img{
    width: 7rem;
    height: 7rem;
    border-radius: 1rem;
    float:left;
}
.hotel_details .title{
    margin-top:0.8rem;
    margin-left: 0.2rem;
    font-size: 1rem;
    font-weight: bolder;
}
.hotel_details .comment{
    margin-top: 2%;
}
.hotel_details .tips{
    color: rgb(104, 103, 170);
}
.hotel_details .mt5{
    margin-top: 1rem;

}
.hotel_details .price{
    font-size: 1.2rem;
}
.hotel_details .order{
    margin-left:3rem;
    width: 7rem;
    height:2rem;
    border-radius:0.5rem;
    border: 0px;
    background-color:rgb(61, 147, 245) ;
    color: white;
    margin-top: 1rem;
}
.hotel_details .forhandle{
    position: absolute;
    width: 7rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 0px;
    margin-left: 3rem;
    margin-top: 1rem;
    color: white;
    opacity: 0;
}
/* .bt-full{
    width:10%;
    height:1rem;
    font-size: 0.3rem;
    border:1px white solid;
    background-color:white;
    display: inline-block;
    border-radius: 10%;
    color: red;
    font-weight: bolder;
} */
.hotel_details .mlf7{
    margin-left: 7rem;
}
.hotel_details .mlf75{
    margin-left: 7.5rem;
}
.hotel_details .small{
    font-size: 0.5rem;
}
.hotel_details .mlf-half{
    margin-left: 0.5rem;
}
.hotel_details .black{
    margin-top: 1rem;
    color:black
}

</style>
<script>
import a1 from '../../public/gray.png'
export default {
    data(){
        return{
            hotel_price:"",
            hotel_pic:"",
            hotel_name:"",
            count:"",
            
            push:""
        }
    },
    methods:{
        handle(e){
            // console.log(e.target,e.currentTarget);
            let  index=e.target.value
            // console.log(index);
            //获取信息
            let object={
                title:this.push[index].title,
                // hotel_pic:this.list[index].url,
                price:this.push[index].price,
                product_details:this.push[index].product_details,
                family_id:this.push[index].family_id
            }
            console.log(object);
            //传信息
            this.axios.post('/addcar',this.qs.stringify(object)).then(res=>{
                if(res.data.code==200){
                    console.log(res.data.code);
                    //弹窗成功
                    this.$messagebox.alert("成功加入购物车");
                    // this.$messagebox.confirm("您是否现在前往购物车","提示信息").then(
                    //     (value)=>{
                    //         this.$router.push('/');
                    //         console.log(object);
                    //     }).catch(e=>{
                    //         this.$router.push('/hotel_details')
                    //     })
                }
            })
        }
    },
    mounted(){
        let index=this.index;
        this.axios.get('/hotel',{params:{index:index}}).then(res=>{
            this.push=res.data.results
        })
    }
}
</script>