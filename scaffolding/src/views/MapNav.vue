<template>
    <div class="mapnav">
        <div id="container" :class="{'contai':contai}"></div>
        <div class="nav" :style="{height:hei + 'rem'}">
            <div class="arrows" @click="drawer">
                <span class="iconfont" id="icon">&#xe6d3;</span>
            </div>
            <div class="option">
                <a :class="{'bg':bgcolor1}" href="javascript:;" @click="all()">全部</a>
                <a :class="{'bg':bgcolor2}" href="javascript:;" @click="hotel()">酒店</a>
                <a :class="{'bg':bgcolor3}" href="javascript:;" @click="scenery()">景点</a>
                <a :class="{'bg':bgcolor4}" href="javascript:;" @click="finefood()">美食</a>
                <a :class="{'bg':bgcolor5}" href="javascript:;" @click="shopping()">购物</a>
            </div>
        </div>
    </div>
</template>
<style>
    .mapnav #container{
        overflow: hidden;
        width: 25.875rem;
        height: 46rem;
        margin: 0;
        font-family: "微软雅黑";
    }
    .BMap_scaleHBar{
        height: 1px;
    }
    .BMap_stdMpZoom.BMap_noprint.anchorBR{
        inset: auto 1rem 4.3rem auto !important;
        transition: 0.3s;
    }
    .anchorBL{
        transition: 0.3s;
        inset: auto auto 4.3rem 0.6rem !important;
    }
    .BMap_scaleCtrl{
        transition: 0.3s;
        inset:  auto auto 4.3rem 4.6rem !important;
    }
    .BMap_noprint.anchorBR {
        inset: auto 14px 175px auto !important;
        transition: 0.3s !important;
    }
    .contai .BMap_noprint.anchorBR{
        inset: auto 14px 135px auto !important;
        transition: 0.3s !important;
    }
    .contai .BMap_stdMpZoom.BMap_noprint.anchorBR{
        transition: 0.3s;
        inset: auto 1rem 1.75rem auto !important;
    }
    .contai .anchorBL{
        transition: 0.3s;
        inset: auto auto 1.75rem 0.6rem !important;
    }
    .contai .BMap_scaleCtrl{
        transition: 0.3s;
        inset:  auto auto 1.75rem 4.6rem !important;
    }
    .BMap_stdMpZoom .BMap_button_new{
        width: 3rem !important;
        height: 3rem !important;
    }
    .BMap_stdMpZoom .BMap_button_new .in{
        top: 1.1rem !important;
        left: 1.1rem !important;
    }
    .BMap_stdMpZoom .BMap_button_new .out{
        top: 4.25rem !important;
        left: 1.1rem !important;
    }
    .mapnav .nav{
        width: 23.5rem;
        /* height: 3.5rem; */
        background: #fff;
        z-index: 1000;
        position: absolute;
        bottom: 0;
        padding: 0.3rem 0.6rem;
        left: 0.56rem;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        transition: 0.3s;
    }
    .mapnav .nav .arrows{
        text-align: center;
        margin-bottom: 0.3rem;
    }
    .mapnav .nav .option{
        height: 3rem;
    }
    .mapnav .nav .option a{
        display: inline-block;
        width: 3.4rem;
        height: 1.25rem;
        line-height: 1.25rem;
        padding: 0.5rem;
        background: #fff;
        text-align: center;
        color: black;
        border-radius: 0.8rem;
    }
    .mapnav .nav .option a:not(:last-child){
        margin-right: 0.3rem;
    }
    .BMap_cpyCtrl span{
        display: inline-block;
    }
    .mapnav .nav .option .bg{
        background: #458ce6;
        color: #fff;
    }
</style>
<script>
export default {
    data(){
        return{
            count:0,
            hei:3.5,
            contai:false,
            bgcolor1:true,
            bgcolor2:false,
            bgcolor3:false,
            bgcolor4:false,
            bgcolor5:false,
        }
    },
    methods:{
        map(){
            let _this = this
            // 按住鼠标右键，修改倾斜角和角度
            var map = new BMapGL.Map("container"); // 创建Map实例
            map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12.5); // 初始化地图,设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
            var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
            map.addControl(scaleCtrl);
            var zoomCtrl = new BMapGL.ZoomControl(); // 添加比例尺控件
            map.addControl(zoomCtrl);
            var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
            map.addControl(navi3DCtrl);
            // 创建定位控件
            var locationControl = new BMapGL.LocationControl({
                // 控件的停靠位置（可选，默认左上角）
                anchor: BMAP_ANCHOR_TOP_RIGHT,
                // 控件基于停靠位置的偏移量（可选）
                offset: new BMapGL.Size(20, 20)
            });
            // 将控件添加到地图上1
            map.addControl(locationControl);
            //添加全部检索点击事件
            this.all = function() {
 	            var myKeys = ["酒店", "景点"]; //添加多个检索内容
	            var local = new BMapGL.LocalSearch(map, {
	            	renderOptions:{
                        map: map, 
                        panel:"r-result",
                        autoViewport:false,
                        selectFirstResult:false
                    },
	            	pageCapacity:6 //设置检索的个数
	            });
	            local.searchInBounds(myKeys, map.getBounds());
                _this.bgcolor1 = true;
                _this.bgcolor2 = false;
                _this.bgcolor3 = false;
                _this.bgcolor4 = false;
                _this.bgcolor5 = false;
            }
            //添加景点检索事件
            this.scenery = function(){ 
 	            var myKeys = ["景点"]; //设置需要检索的内容
                map.clearOverlays(); //清除上一次检索的标记
	            var local = new BMapGL.LocalSearch(map, {
	            	renderOptions:{
                        map: map, 
                        panel:"r-result",
                        autoViewport:false,
                        selectFirstResult:false
                    },
	            	pageCapacity:8
	            });
	            local.searchInBounds(myKeys, map.getBounds());
                _this.bgcolor1 = false;
                _this.bgcolor2 = false;
                _this.bgcolor3 = true;
                _this.bgcolor4 = false;
                _this.bgcolor5 = false;
            };
            //添加酒店检索事件
            this.hotel = function(){
 	            var myKeys = ["酒店"]; //设置需要检索的内容
                map.clearOverlays(); //清除上一次检索的标记
	            var local = new BMapGL.LocalSearch(map, {
	            	renderOptions:{
                        map: map, 
                        panel:"r-result",
                        autoViewport:false,
                        selectFirstResult:false
                    },
	            	pageCapacity:8
	            });
	            local.searchInBounds(myKeys, map.getBounds());
                _this.bgcolor1 = false;
                _this.bgcolor2 = true;
                _this.bgcolor3 = false;
                _this.bgcolor4 = false;
                _this.bgcolor5 = false;
            };
            this.shopping = function() {
 	            var myKeys = ["美食"]; //设置需要检索的内容
                map.clearOverlays(); //清除上一次检索的标记
	            var local = new BMapGL.LocalSearch(map, {
	            	renderOptions:{
                        map: map, 
                        panel:"r-result",
                        autoViewport:false,
                        selectFirstResult:false
                    },
	            	pageCapacity:8
	            });
	            local.searchInBounds(myKeys, map.getBounds());
                _this.bgcolor1 = false;
                _this.bgcolor2 = false;
                _this.bgcolor3 = false;
                _this.bgcolor4 = false;
                _this.bgcolor5 = true;
            };
            this.finefood = function() {
 	            var myKeys = ["购物"]; //设置需要检索的内容
                map.clearOverlays(); //清除上一次检索的标记
	            var local = new BMapGL.LocalSearch(map, {
	            	renderOptions:{
                        map: map, 
                        panel:"r-result",
                        autoViewport:false,
                        selectFirstResult:false
                    },
	            	pageCapacity:8
	            });
	            local.searchInBounds(myKeys, map.getBounds());
                _this.bgcolor1 = false;
                _this.bgcolor2 = false;
                _this.bgcolor3 = false;
                _this.bgcolor4 = true;
                _this.bgcolor5 = false;
            }
            //添加定位到当前位置
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    _this.all()
                }
            },{enableHighAccuracy: true});
        },
        //添加一个点击事件，控制底部导航栏
        drawer(){
            if(this.count == 0){
                this.hei = 0.75;
                this.count = 1;
                //动态的改变底部导航栏的中箭头他图标
                document.getElementById('icon').innerHTML = '&#xe6d2;';
                //动态的添加class来改变导航栏之上的模块
                this.contai = true;
            }else{
                this.count = 0;
                this.hei = 3.5;
                document.getElementById('icon').innerHTML = '&#xe6d3;';
                this.contai = false;
            };
        },
        
    },
    mounted(){
        this.map();
    },
    watch:{

    }
}
</script>