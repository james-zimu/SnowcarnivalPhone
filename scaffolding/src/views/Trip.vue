
<template>
   <div id="trip">
     <!-- 导入日历组件 -->
      <kl-calendar height="25rem" width="23rem" :show-festival="false" :show-term="false" @date-click="dateClick"/>
    <!-- 待办事项 -->
      <div  class="trip-matter">
        <h1>待办事项</h1>
        <div class="hr"></div>
        <div class="trip-matter1">
          <p id="trip-matter1-time">2020/2/22</p>
          <p id="trip-matter1-content">参加郑州冰雪嘉年华</p>
        </div>
        <!-- 添加开关 -->
          <!-- <toggle-button class="toggle-button1" 
                 @change="toggled = $event.value"
                 color="#468ce6"
                 :labels="true"
                  :sync="false" 
                 /> -->
          <span  class="toggle-button1" v-for="(item, i) in items" :key="i" style="padding: 5px">
          <toggle-button
            :value="item.value"
            :color="item.color"
            :sync="true"
            :labels="true"
            :key="i"
            @change="updateItemValue(i)"/>
        </span>
        <div class="trip-matter2"></div>
        
      </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        // 为按钮添加颜色
        items: [
        { color: '#468ce6', value: false }
      ],
      }
    },
    name: 'App',
    // mounted () {
    // var itemIndex = 0;
    // setInterval(() => {
    //   this.updateItemValue(itemIndex)
    //   itemIndex = (itemIndex + 1) % this.items.length
    // }, 600)
    // },
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
        this.$messagebox({
        title: '是否为今天添加代办事项?',
        message: title,
        showCancelButton: true
        }).then(action=>{  //如果点击确定就可以跳转到待办事项页面开始填入信息
          if(action=='confirm'){
            console.log('可以添加');
          }
        });
      },
      updateItemValue(index) {
        this.items[index].value = !this.items[index].value
            let tripMatter1Time=document.getElementById('trip-matter1-time')
            let tripMatter1Content=document.getElementById('trip-matter1-content')
        if(!this.items[index].value){
            tripMatter1Time.style.color="#ddd"
            tripMatter1Content.style.color="#ddd"
        }else{
            tripMatter1Time.style.color="#468ce6"
            tripMatter1Content.style.color="red"
        }
      }
    }
  }
</script>
<style>
#trip{
    width:23rem;
    padding-left: 0.35rem ;
    position: relative;
}
/* 设置日历字体大小/ */
.kl-calendar{
  width: 25rem !important;
  font-size:0.01rem;
  /* text-align: left; */
  line-height: 1rem;
}
.kl-calendar_day-festival{
  padding-left: 0 !important;
}
 .kl-calendar_day-today{
  background-color: #468ce6 !important;
}
.kl-calendar_day-box{
  padding: 0.5rem !important;
  background: url('../../public/snow.png') no-repeat top right !important;
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
  margin-right: 2rem !important;
}
.kl-calendar_tool-btn{
  color: #fff !important;
}
.kl-calendar_render-info{
  color: #fff !important;
}
.trip-matter{
  width: 25rem;
  height: 15rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  position: absolute;
  top: 26rem;
}
.trip-matter h1{
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.3rem;
}
.trip-matter .hr{
  position: absolute;
  width: 23rem;
  top: 3rem;
  left: 1.1rem;
  border-bottom: 0.1rem solid #ddd;
}
.trip-matter1{
  position: absolute;
  width: 23rem;
  top: 3rem;
  left: 1.1rem;
  border-bottom: 0.1rem solid #ddd;
  padding: 1rem;
}
#trip-matter1-time{
  font-size: 2rem;
  color: #468ce6;
}
#trip-matter1-content{
  font-size: 1rem;
  color: red;
}
.toggle-button1{
  position:absolute;
  top:5rem;
  right: -0rem;
}

</style>
