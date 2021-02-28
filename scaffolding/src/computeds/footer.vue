<template>
    <div class="footer">
        <mt-tabbar>
            <mt-tab-item id="tab1" :class="{'bgc':bgcolor1}">
                <a href="javascript:;" @click="index()" class="colo">
                    <span class="iconfont">&#xe695;</span>
                    <p>首页</p>
                </a>
            </mt-tab-item>
            <mt-tab-item  id="tab2" :class="{'bgc':bgcolor2}">
                <a href="javascript:;" @click="details()" class="colo">
                    <span class="iconfont">&#xe731;</span>
                    <p>详情</p>
                </a>
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <a href="javascript:;" @click="shopping()" :class="{'bgc':bgcolor3}" class="colo">
                    <span class="iconfont">&#xe50c;</span>
                    <p>购物车</p>
                </a>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <a href="javascript:;" @click="route()" :class="{'bgc':bgcolor3}" class="colo">
                    <span class="iconfont">&#xe63e;</span>
                    <p>行程</p>
                </a>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <a href="javascript:;" @click="my()" :class="{'bgc':bgcolor3}" class="colo">
                    <span class="iconfont">&#xe502;</span>
                    <p>我的</p>
                </a>

            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style>
    .footer{
        width: 25.875rem;
        height: 3rem;
        position: fixed;
        bottom: 0;
    }
    .footer .bgc{
        color: #4aa3f3 !important;
    }
    .footer .colo{
        color: #3c3c3c;
    }
    .footer p{
        margin-top: 0.5rem;
    }
</style>
<script>
export default {
    data(){
        return{
            bgcolor1:true,
            bgcolor2:false,
            bgcolor3:false,
            bgcolor4:false,
            bgcolor5:false
        }
    },
    methods:{
        index(){
            console.log(12582)
        },
        details(){
            this.bgcolor1 = false;
            this.bgcolor1 = true;
            this.bgcolor1 = false;
            this.bgcolor1 = false;
            this.bgcolor1 = false;
        },
        shopping(){
            this.bgcolor1 = false;
            this.bgcolor1 = false;
            this.bgcolor1 = true;
            this.bgcolor1 = false;
            this.bgcolor1 = false;
        }
    }
}
</script>