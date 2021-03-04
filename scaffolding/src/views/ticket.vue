
<template>
    <div >
        <div class="ticket">
            <mt-header class="header" title="嘉年华门票">
                <router-link to="/shopcar" slot="left">
                <mt-button class="zhuce" icon="back">返回</mt-button>
                </router-link>
            </mt-header>
            <div class="container">
                <div class="details" v-for="(item,index) in push" :key="index">
                    <div slot="left">
                        <a href="#"><img :src="require('../../public/shopcar/'+item.img)" alt=""></a>
                    </div>
                <div class="details-word">
                    <div class="title"><a href="#" class="black">{{item.title}}</a> </div>
                    <div class="mt7 flx">
                        <a href="#" class="gray blue">{{item.comment}}</a>
                        <a href="#" class="gray mlt2">{{item.number}}条点评</a>
                    </div>
                    <div>
                        <a href="#" class="red mt7">{{item.top}}</a>
                    </div>
                    <div class="gray mt7"><a href="#" class="gray" style="margin-left:-1rem">距离您{{item.address}}公里</a>|<a href="#" class="gray">{{item.city}}</a> </div>
                    <div class="flx">
                        <a class="bt-buy blue mt7 mlt2">{{item.tips1}}</a>
                        <a class="gray mt7 mlt2" href="#">{{item.tips2}}</a>
                        <a class="gray mt7 mlt2" href="#">{{item.tips3}}</a>
                    </div>
                    <div class=" mt7">
                        <span><a href="#" class="black">{{item.itemDetails}}</a></span>
                        <span class="gray"><a href="#" class="gray">{{item.play}}</a></span>
                    </div>
                </div>
                <div class="price-shppingcart">
                    <span class="orange">￥</span><span class="price orange">{{item.price}}</span><span class="gray">起</span>
                    <a class="add-shopping-cart">加入购物车</a>
                    <input type="button" class="forhandle" :value="index" @click="handle($event)" >
                </div>
                </div>
        </div>
    </div>

    </div>
</template>
<style>
.ticket .header{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    font-size: 1.2rem;
    background: #468ce6;
  }
.ticket .container{
    padding: 1rem 1rem;
}
.ticket .details{
    width:22rem;
    float:left;
    margin-left: -0.3rem;
    margin-top: 2rem;
}
.ticket img{
    height: 8rem;
    width: 6.6rem;
    float:left;
    border-radius: 1rem;
}
.ticket .details-word{
    width: 10rem;
    float:left;
    margin-left:0.3rem;
}
.ticket .title{
    font-size: 1rem;
    font-weight: bolder;
}
.ticket .price-shppingcart{
    float: left;
    width: 5rem;
    margin-top: 1rem;
}
.ticket .price{
    font-size: 1.2rem;
    font-weight: bolder;
}
.ticket .gray{
    color: gray;
    font-size: 0.1rem;
    margin-left: 1rem;
}
.ticket .mlt2{
    margin-left: 0rem;
}
.ticket .mt7{
    margin-top:0.8rem
}
.ticket .blue{
    color: rgb(4, 140, 252);
}
.ticket .red{
    color: red;
    font-size: 0.3rem;
}
.ticket .bt-buy{
    font-size: 0.3rem;
    border:1px  rgba(201, 226, 243, 0.87) solid;
    background-color:rgb(234, 243, 248) ;
    display: inline-block;
    border-radius: 2rem;
}
.ticket .add-shopping-cart{
    font-size: 0.3rem;
    display: block;
    background-color: rgb(54, 156, 240);
    text-align: center;
    color: white;
    height: 2rem;
    line-height: 2rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
}
.ticket .forhandle{
    font-size: 0.3rem;
    display: block;
    color: white;
    height: 2rem;
    line-height: 2rem;
    margin-top: -2rem;
    border-radius: 0.5rem;
    width: 5rem;
    opacity: 0;
}
.ticket .orange{
    color:orange;
}
.ticket .flx{
    display: flex;
}
.ticket .black{
    color:black;
}
</style>
<script>
// import a1 from '../../public/gray.png'
export default {
    data(){
        return{
            	// 	list: [{ //图文列表
                //     label: '银基冰雪世界',
                //     comment:'4.6分',
                //     number:'1309',
                //     top:'',
                //     adress:'33.9',
                //     where:'新密',
                //     tips1:'随买随用',
                //     tips2:'亲子同乐',
                //     tips3:'游乐园',
                //     itemDetails:'项目|',
                //     play:'冰雪海盗船',
                //     price:'178',
                //     url: a1,
                //     family_id:'购物车-门票信息'
                // },],
                push:"",

        }
    },
        methods:{
        handle(e){
            // console.log(e.target,e.currentTarget);
            let  index=e.target.value
            // console.log(index);
            let object={
                title:this.push[index].title,
                // hotel_pic:this.list[index].url,
                price:this.push[index].price,
                family_id:this.push[index].family_id,
                num:'1',
                img:this.push[index].img
            }
            // console.log(object);
                console.log(object);
            this.axios.post('/addcar',this.qs.stringify(object)).then(res=>{
                if(res.data.code==200){
                    this.$messagebox.alert("成功加入购物车");
                }
            })
        }
    },
        mounted(){
        let index=this.index;
        this.axios.get('/ticket',{params:{index:index}}).then(res=>{
            this.push=res.data.results
            console.log(this.push);
        })
    }
}
</script>