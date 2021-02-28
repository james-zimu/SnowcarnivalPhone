<template>
<!--   -->
  <div class="remark" v-if="!push==''">
      <div class="reamark-header">
        <div class="reamark-back">
          <router-link  to="/trip" slot="left">
               <mt-button icon="back"></mt-button>
            </router-link>
          </div>
          <div class="reamark-logo">
              <!-- 图片路径的修改用require拼接字符串的方式进行修改  不可直接拼接 webpack打包-->
              <img :src="require(`../assets/images/${push[0].photo}`)">
          </div>
          <div class="reamark-uname">
            <span>  {{push[0].uname}}</span>
            <div class="reamark-tag">
                <span class="remark-tag1">旅行家</span>
                <span>2090人关注了TA</span>
            </div>
          </div>
          <div class="reamark-care">
              + 关注
          </div>
          <div class="reamark-more">
            <router-link  to="/" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
          </div>
      </div>
      <div class="reamark-conten">
          <div class="reamark-showimg">
              <img :src="require(`../assets/images/${push[0].image}`)" >
          </div>
          <div class="reamark-numb">
              <div class="reamark-numb1">
                    <span class="reamark-icon iconfont">&#xe51f; 无锡</span>
                  <span> 1.8w篇 ></span>
                </div>
                <div  class="reamark-numb1">
                <span class="reamark-icon iconfont">&#xe51f; 梅园</span>
                  <span> 192篇 ></span>
                </div>
         </div>  
         <div class="reamark-showword">
                    <p>无锡赏花攻略|春天锡生活，从梅园开始</p>
                    <span>
                        {{push[0].content}}
                    </span>
                </div>
      </div>
      <hr>
      <!-- 开始写评论区内容 -->
      <div class="reamark-showremark">
          <div class="reamark-all">
              评论<span>(344)</span>
          </div>
          <div class="reamark-showlog">
            <div class="reamark-showlog1">
              <img :src="require(`../assets/images/${img}`)" >
            </div> 

             <div class="reamark-shuru">
                <input v-model="sendmesage" type="text" placeholder="您想说点啥！来这儿！">
             </div>  
          </div>
          <!-- 此处为评论区内容 根据登录后存储的用户信息 在数据库s增加留言设置 -->
          <div class="reamark-allshows">
          <div  class="reamark-showmasge" v-for="(item,index) in bmark" :key="index">
              <div class="reamark-showp">
                  <img :src="require(`../assets/images/${item.photo}`)">
              </div>
              <div class="reamark-showname">
                  <span>{{item.uname}}</span>
                  <p>{{item.remcontent}}</p>
              </div>
          </div>
          </div>
      </div>
      <!-- 开始写底部内容 -->
      <div class="reamark-footer">
          <div class="reamark-btn1"> 
              <mt-button @click="marksend" size="small" type="primary">发送</mt-button>
          </div>
            <div class="reamark-btn2">
                <span class="iconfont">&#xe52f;</span>
                 <div class="reamark-care rem-footer">
                      121
                </div>
                <span class="iconfont">&#xe689;</span>
                 <div class="reamark-care rem-footer">
                      35
                </div>
                <span class="iconfont">&#xe508;</span>
                 <div class="reamark-care rem-footer">
                      22
                </div>
            </div>
      </div>
  </div>
</template>
<style >
.remark .mint-button--default{
    background-color: white  !important;
    box-shadow: none !important;
    position: absolute !important;
}
 .remark .reamark-header{
  display: flex;
  margin-bottom: 0.625rem;
}
.remark .reamark-logo img{
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin-left: 3.125rem;
}
.remark .reamark-uname{
  margin: 0.3125rem 0 0 0.3125rem ; 
}
.remark .reamark-tag{
    margin: 0.1875rem 0 0 0 ; 
}
.remark .reamark-tag>span:last-child{
  font-size: 0.875rem;
  margin: 0 0 0 0.25rem;
}
.remark .reamark-care{
  width: 3.4375rem;
  height: 1.25rem;
  border-radius: 0.75rem;
  background-color: turquoise;
  color: white;
  text-align: center;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  margin: 0.625rem 0 0 2.125rem;
}
.remark .remark-tag1{
    background-color: yellow;
    color: yellowgreen;
    font-size: 0.625rem;
}

.remark .reamark-showimg img{
    width: 23.4375rem;
    height: 11.25rem;
    margin-bottom: 0.625rem;
}
.remark .reamark-numb{
    display: flex;
    text-align: center;
    line-height:2.1875rem;
    font-size: 0.875rem;
    color:rgb(68,68,70);
}
.remark .reamark-icon{
    font-weight: 700;
    font-size: 0.9375rem;
}
.remark .reamark-numb1{
    background-color:rgb(242,243,247);
    width: 6.875rem;
    height:2.1875rem;
    margin-left: 1.5625rem;
    border-radius: 1.0625rem;
}
.remark .reamark-showword{
    padding: 0.5rem;
    color: black;
    line-height: 1.5625rem;
    text-align:justify;
}
.remark .reamark-showword p{
    font-weight: 700;
}
/* 由于底部栏是固定的 与底部流出距离  这样底部栏就不会挡住评论了*/
.remark .reamark-allshows{
    padding-bottom: 51px;
}
.remark .reamark-all{
    margin:0.625rem 0 0 0.625rem;
    color: black;
}
.remark .reamark-all span{
    font-size: 0.9375rem;
    color:gray
}
.remark .reamark-showlog{
    display: flex;
}
.remark .reamark-showlog1{
    margin-top: 0.625rem;
    display: flex;
}
.remark .reamark-showlog1 img{
    height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin-left: 3.125rem;
}
.remark .reamark-shuru{
   line-height:4rem;
   margin-left: 0.625rem;
}
.remark .reamark-shuru>input{
   border-radius: 0.75rem;
   width: 15rem;
   border: 0;
   background-color: rgb(220,220,220);
   height: 1.875rem;
   padding-left: 0.625rem;
}
.remark .reamark-footer{
    display: flex;
    position: fixed;
    bottom: 0;
    height: 3.125rem;
    width: 23.4375rem;
    border-top:0.0625rem solid grey;
    background-color: white;
}
.remark .reamark-btn1{
    margin: 0.3125rem 0 0.625rem 0.625rem;
}
.remark .reamark-btn2{
    position:absolute;
    right: 0;
}
.remark .reamark-btn2>span{
    font-size: 1.875rem;
    line-height: 3.125rem;
}
.remark .rem-footer{
    display: inline-block;
    margin: 0;
    width: 2.5rem;
}
.remark .reamark-showp img{
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin-left: 0.625rem;
}
.remark .reamark-showmasge{
    display: flex;
    margin-bottom:0.625rem ;
}
.remark .reamark-showname{
    color: black;
    margin-left: 0.3125rem;
}
.remark .reamark-showname>span{
    font-size: 0.625rem;
}
.remark .reamark-showname>p{
    margin-top: 0.3125rem;
    font-size: 0.8125rem;
    /* 设置换行 */
   /* word-wrap:break-word; */
}
</style>
<script>
export default {
  data(){
    return{
        img:"moren.jpg",
        logphoto:'',
        logmessage:'',
        sendmesage:"",
        username:'',
        allmsg:5,
        number:1,
        push:'',
        // 存储之前用户留言信息
        bmark:''
    }
  },
  methods:{
    //   toast(title){
    //       $store({
    //           message:title,
    //           position:'middle',
    //           duration:3000
    //       });
    //   },
        marksend(){
            // 测试是否能够拿到在store里储存的用户信息
            console.log(this.sendmesage);
            // console.log(this.$store.state.user.uname);
            if(this.$store.state.user.length==0){
               this.$toast('请登录') }else if(this.sendmesage ==""){
                   this.$toast('此处不能为空')
               }else{
            let str = {
               msg:this.sendmesage,
               uname:this.$store.state.user.uname,
               photo:this.$store.state.user.photo,
               number:this.number};
            console.log(this.qs.stringify(str))
            // 测试 接收到留言数据存储到数据库
            this.axios.post('/remark',this.qs.stringify(str)).then(res=>{
                if(res.data.code==200){
                   this.$toast('发表成功') ;
                    this.brem()
                }  
            })
            }
        },
    //获取当前评论区留言内容
        brem(){
        let remn = this.number;
        this.axios.get('/beforrem',{params:{number:remn}}).then(res=>{
            this.bmark = res.data.result;
            //测试收到的评论信息
            console.log(this.bmark)
        })
        }
  },
  mounted(){
      //拿到登录者的头像 放在评论输入框旁
      if(this.$store.state.user==0){
       this.img = "moren.jpg";
       }else{
             this.img  = this.$store.state.user.photo;
       }
    //   获取到进入当前分享页的内容
        //拿到当前分享页的编号
        let id = this.number;
        this.axios.get('/article',{params:{id:id}}).then(res=>{
            // console.log(res.data.result)
            this.push = res.data.result;
        });
        this.brem();
  }
}

</script>