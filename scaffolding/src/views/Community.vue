<template>
    <div class="community">
        <!-- 看世界 -->
        <div class="look-world">
            <div class="world-inner">
                <h1>看世界</h1>
            </div>
            <div class="place-name">
                <a href="javascript:;"><span class="iconfont">&#xe503;</span>郑州</a>
            </div>
        </div>
        <!-- 24小时热门 -->
        <div class="hour">社区分类</div>
        <div class="hot">
            <mt-swipe :auto="0" class="hot-slide">
                <mt-swipe-item>
                    <div class="slide-inner">
                        <div v-for="(list) of community.slice(0,6)" :key="list.cid">
                            <a href="javascript:;" class="hot-img">
                                <img :src="require('../../' + list.image)" alt="">
                            </a>
                            <a href="javascript:;" class="hot-text">
                                <p>{{list.title}}</p>
                                <span>{{list.text}}</span>
                            </a>
                        </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="slide-inner">
                        <div v-for="(list) of community.slice(6,12)" :key="list.cid">
                            <a href="javascript:;" class="hot-img">
                                <img :src="require('../../' + list.image)" alt="">
                            </a>
                            <a href="javascript:;" class="hot-text">
                                <p>{{list.title}}</p>
                                <span>{{list.text}}</span>
                            </a>
                        </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="slide-inner">
                        <div v-for="(list) of community.slice(12,18)" :key="list.cid">
                            <a href="javascript:;" class="hot-img">
                                <img :src="require('../../' + list.image)" alt="">
                            </a>
                            <a href="javascript:;" class="hot-text">
                                <p>{{list.title}}</p>
                                <span>{{list.text}}</span>
                            </a>
                        </div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 大家再聊 -->
        <div class="everyone">
            <div class="everyone-chat">大家都在聊</div>
            <div class="everyone-data">
                <div class="data-inner" v-for="item of everyone" :key="item.uid">
                    <div class="img">
                        <img :src="require('../../' + item.image)" alt="">
                    </div>
                    <div class="text">
                        <p>{{item.text}}</p>
                        <div>
                            <a href="javascript:;">
                                <img :src="require('../../' + item.portrait)" alt="">
                                <span>{{item.username}}</span>
                            </a>
                            <a href="javascript:;"><span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<style>
/* 看世界 */
.community .look-world{
    height: 4.375rem;
    background: #458ce6;
    position: relative;
    width: 25.875rem;
}
.community .look-world .world-inner{
    padding-top: 1.875rem;
    text-align: center;
}
.community .look-world .world-inner h1{
    display: inline-block;
    color: #fff;
    font-size: 1.375rem;
}
.community .look-world .place-name{
    position: absolute;
    right: 1.25rem;
    top: 1.875rem;
}
.community .look-world .place-name a{
    color: #fff;
}
.community .look-world .place-name a span{
    font-size: 1.25rem;
}
/* 24小时热门 */
.community .hot{
    height: 11.25rem;
    width: 25.875rem;
    margin-bottom: 1.25rem;
}
.community .hour{
    font-size: 1.25rem;
    width: 24rem;
    font-weight: 600;
    padding: 0.625rem 0.93rem;
}
.community .hot .hot-slide{
    padding: 0.625rem 0.93rem;
}
.community .hot .slide-inner>div{
    height: 2.5rem;
    display: inline-block;
    width: 12rem;
    position: relative;
    margin-bottom: 0.875rem;
}
.community .hot .slide-inner .hot-img{
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
    color: black;
    position: absolute;
}
.community .hot .slide-inner .hot-text{
    width: 8.25rem;
    display: inline-block;
    padding-top: 0.31rem;
    position: absolute;
    left: 3.125rem;
    color: black;
}
.community .hot .slide-inner .hot-text p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.community .hot .slide-inner .hot-text span{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.community .hot .slide-inner a img:nth-child(1){
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 15%;
}
.community .hot .slide-inner a span{
    font-size: 0.75rem;
}
.mint-swipe-indicators .is-active {
    background: #458ce6 !important;
    width: 0.75rem !important;
    border-radius: 0.5rem;
}
.mint-swipe-indicator {
    width: 0.43rem !important;
    height: 0.43rem !important;
    display: inline-block;
    border-radius: 100%;
    background: #9c9c9c !important;
    opacity: 1 !important;
    margin: 0 0.18rem;
}
/* 大家都在聊 */
.community .everyone{
    width: 25.875rem;
}
.community .everyone .everyone-chat{
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1.25rem 0.9rem;
}
.community .everyone .everyone-data{
    height: 60rem;
}
.community .everyone .everyone-data .data-inner{
    width: 12.1875rem;
    margin-left: 0.4375rem;
    display: inline-block;
    margin-bottom: 0.625rem;
}
.community .everyone-data .data-inner .img{
    height: 15.375rem;
}
.community .everyone-data .data-inner .img img{
    width: 100%;
    height: 100%;
    border-radius: 5% 5% 0 0%;
}
.community .everyone-data .data-inner .text p{
    padding: 0.625rem 0.3125rem;
    line-height: 1.5rem;
}
.community .everyone-data .data-inner .text img{
    width: 1.56rem;
    border-radius: 50%;
    margin-right: 0.5rem;
}
.community .everyone-data .data-inner .text a{
    color: #abb2ba;
    font-size: 0.875rem;
}
</style>
<script>
export default {
    data(){
        return{
            SiteName:'',
            everyone:{},
            community:[]
        }
    },
    methods:{
        region(){
            var native = new BMap.LocalCity();
            native.get(function(r){
                alert(r.name);
            })
        }
    },
    mounted(){
        this.axios.get("/everyone").then(res=>{
            this.everyone = res.data.results;
            console.log(this.everyone);
        });
        this.axios.get("/community").then(res=>{
            this.community = res.data.results;
            console.log(this.community);
        });
    }
}
</script>