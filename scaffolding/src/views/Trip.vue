
<template>
  <div class="trip">
    <!-- 返回头 -->
      <div class="back"><a href="/index"><span class="iconfont">&#xe501;</span>返回</a></div>
    <!-- 导入日历组件 -->
      <kl-calendar height="25rem" width="23rem"
      :show-festival="false"
      :show-term="false"
      @date-click="dateClick"/>
    <!-- 待办事项 -->
      <div  class="trip-matter-all">
        <h1>待办事项</h1>
        <div class="hr"></div>
          <!-- 如果代办事项为空的话就提示 -->
        <div v-if="schedule.length>0"></div>
        <div class="else-data" v-else>暂无代办事项...</div>
        <!-- 循环代办事项 -->
        <div class="item"   v-for="(item,index) in schedule" :key="index">
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
        <div class="matter">
            <div class="trip-matter">
              <p class="trip-matter-time">{{item.udate}}</p>
              <p class="trip-matter-content">{{item.udetail}}</p>
            </div>
        </div>
        </mt-cell-swipe>
        </div>
      </div>
  </div>
</template>
<script>

  export default {
    data(){
      return{
        schedule:[],
        value:true
      }
    },
    name: 'App',
    methods: {
      renderMonthChange(year, month) {
        console.log(year, month);
      },
      beforeRender(year,month,next){
        console.log(year, month);
        next()
      },
      //是否添加为待办事项
      dateClick(date,title){
        console.log(date.date);
        //获取当前点击时间
        let time=new Date(date.date);
        //获取年份
        let year=time.getFullYear();
        //获取当月
        let month=time.getMonth();
        //获取当天
        let day=time.getDate();
        //得到完整的时间
        let udate = `${year}年${month+1}月${day}日`;
        this.$messagebox({
        title: '是否为今天添加代办事项?',
        message: title,
        showCancelButton: true
        }).then(action=>{  //如果点击确定就可以跳转到待办事项页面开始填入信息
          if(action=='confirm'){
            //弹出消息框并获取输入内容
            this.$messagebox.prompt('请输入您要代办的事项').then(({ value, title }) => {
              //将获取到的内容发送到服务器
              let udetail=value;
              let object={
                udate:udate,
                udetail:udetail
              }
              // console.log(udate);
              console.log(object);
              this.axios.post('/schedule',this.qs.stringify(object)).then(res=>{
                  if(res.data.code==200){
                    this.$messagebox.alert("成功添加代办事项")
                        this.getData();
                }
              })
            });
          }
        });
      },
      //将获取数据封装成函数
      getData:function(){
                        // 发送HTTP请求以获取数据
                          this.axios.get("/schedule").then(res=>{
                        // 将服务器返回的数据赋予schedule变量
                        this.schedule = res.data.results;
                      });
      },
      del(index){
        //获取这一条信息的sid;
        this.$messagebox.confirm(`确认要删除当天的行程么?`).then(action => {
          //将获得的sid发送到数据库
          let sid =this.schedule[index].sid;
          console.log(this.schedule);
          let object={
            sid:sid
              };
            console.log(object);
            this.axios.post('/scheduledelete',this.qs.stringify(object)).then(res=>{
            if(res.data.code==200){
                    this.$messagebox.alert("删除成功")
                        this.getData();
            }
        })
        });
      },
    },
    mounted(){
      this.getData()
    }
  }
</script>
<style>
/* .trip{
    width:23rem;
    padding-left: 0.35rem ;
    position: relative;
} */
/* 设置日历字体大小/ */
.kl-calendar{
  width: 25rem !important;
  font-size:0.01rem;
  /* text-align: left; */
  line-height: 1rem;
  padding-left:0.3rem ;
}
.kl-calendar_day-festival{
  padding-left: 0 !important;
}
 .kl-calendar_day-today{
  background-color: #468ce6 !important;
}
.kl-calendar_day-box{
  padding: 0.5rem !important;
  /* background: url('../../public/snow.png') no-repeat top right !important; */
  background-size:20px !important;

} 
.kl-calendar_day-other-month-day {
  background: 0 !important;
  /* background-attachment:fixed !important; */
  /* background-position:left !important; */
  background-size: 20px 20px  !important;
}
.kl-calendar_lunar-first {
  border-bottom:0px !important;
}
.kl-calendar_title-bar{
  background: #468ce6 !important;
  margin-left: -0.35rem;
  width: 23.4rem !important;
}
.kl-calendar_tool{
  margin-right: 0rem !important;
}
.kl-calendar_tool-btn{
  color: #fff !important;
}
.kl-calendar_render-info{
  margin-left: 4rem;
  font-size: 1.5rem !important;
  color: #fff !important;
}

.trip-matter h1{
  font-size: 1.3rem;
}
.trip-matter-all .hr{
  /* position: absolute; */
  width: 23rem;
  margin-top: 1rem;
  top: 15rem;
  border-bottom: 0.1rem solid #ddd;
}
.trip-matter-all{
  position: absolute;
  width: 23rem;
  top: 26rem;
  left: 0.4rem;
  padding: 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
}
.trip-matter{
  width: 23rem;
  height: 2rem;
  top: 2rem;
  left: 0.4rem;
  line-height: 1.5rem;
  padding: 1rem;
  border-bottom: 0.1rem solid #ddd;
  border-radius: 0.5rem;
}

.trip-matter-content{
  font-size: 1.2rem;
  color:  rgb(255, 0, 0);
}
.trip-matter-time{
  font-size: 1.5rem;
  color: #468ce6;
}
.trip .toggle-button1{
  position:absolute;
  top:1.2rem;
  right: 1rem;
}
.trip .mint-cell-swipe-button{
  line-height: 4rem;
}
.trip .else-data{
  margin-top: 6rem;
  margin-left: 8rem;
  color: #999;
}
.trip .back{
  position: absolute;
  top: 1.4rem;
  font-size: 1.2rem;
  color: #fff;
}
.trip .back>a{
  color: #fff;
}
.trip .back>span{
  font-size: 1.2rem;
}
</style>
