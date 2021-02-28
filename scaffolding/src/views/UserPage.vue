<template>
    <div class="user-page">
        <!-- 用户 -->
        <div class="user-header">
            <div class="user">
                <div class="quit">
                    <div class="quit-inner clearfix">
                        <a href="javascript:;"><span class="iconfont">&#xe630;</span></a>
                        <a href="javascript:;" class="fr">退出登录</a>
                    </div>
                </div>
                <div class="username">
                    <div class="username-inner">
                        <p><a href="javascript:;"><img src="../../src/asstes/image/img1.jpg" alt=""></a></p>
                        <a href="javascript:;">尊敬的携程用户</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 关于我的 -->
        <div class="my">
            <div class="my-inner">
                <p><span>关于我的</span></p>
            </div>
            <div class="my-list">
                <a href="javascript:;">
                    <p>
                        <span class="iconfont">&#xe60e;</span>
                    </p><br>
                    <p>全部订单</p>
                </a>
                <a href="javascript:;">
                    <p>
                        <span class="iconfont">&#xe60f;</span>
                    </p><br>
                    <p>待付款</p>
                </a>
                <a href="javascript:;">
                    <p>
                        <span class="iconfont">&#xec00;</span>
                    </p><br>
                    <p>我的线路</p>
                </a>
                <a href="javascript:;">
                    <p>
                        <span class="iconfont">&#xe688;</span>
                    </p><br>
                    <p>我的点评</p>
                </a>
            </div>
        </div>
        <!-- 我的工具 -->
        <div class="tool">
            <div class="my-tool">
                <p><span>我的工具</span></p>
            </div>
            <div class="tool-list">
                <p>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe516;</span>
                        </p><br>
                        <p>常用信息</p>
                    </a>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe604;</span>
                        </p><br>
                        <p>出行清单</p>
                    </a>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe74b;</span>
                        </p><br>
                        <p>旅行清单</p>
                    </a>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe702;</span>
                        </p><br>
                        <p>攻略指南</p>
                    </a>
                </p>
                <p>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe715;</span>
                        </p><br>
                        <p>翻译助手</p>
                    </a>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe639;</span>
                        </p><br>
                        <p>我的旅拍</p>
                    </a>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe617;</span>
                        </p><br>
                        <p>旅行足迹</p>
                    </a>
                    <a href="javascript:;">
                        <p>
                            <span class="iconfont">&#xe601;</span>
                        </p><br>
                        <p>我的社区</p>
                    </a>
                </p>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<style>
    .user-page{
        background: #f6f6f6;
        width: 25.875rem;
    }
    .user-header{
        height: 12.5rem;
        background-image: linear-gradient(to right,  #4aa3f3, #3477ec);
        border-radius: 0px 0px 1.25rem 1.25rem;
    }
    .user-header .user a{
        color: #fff;
        font-size: 1.1rem;
    }
    .user-header .user .quit{
        height: 3.75rem;

    }
    .user-header .user .quit .quit-inner{
        padding: 2.25rem 1.8rem 0px;
    }
    .user-header .user .quit span{
        font-size: 1.25rem;
    }
    .user-header .user .username{
        text-align: center;
        padding-top: 0.6rem;
    }
    .user-header .user .username p{
        width: 3.4rem;
        height: 3.4rem;
        display: inline-block;
        margin-right: 1.25rem;
    }
    .user-header .user .username img{
        width: 100%;
        border-radius: 50%;
    }
    .user-page .my{
        height: 11.25rem;
        width: 24rem;
        margin: 0 auto;
        position: relative;
        top: -0.625rem;
        border-radius: 0.3rem;
        background: #fff;
    }
    .user-page .my .my-inner p{
        width: 21.25rem;
        font-size: 1.125rem;
        padding: 0.9rem 0px;
        border-bottom: 1px solid #ececec;
        margin: 0 auto;
    }
    .user-page .my .my-list{
        width: 21.25rem;
        margin: 0 auto;
        padding-top: 1.5rem;
    }
    .user-page .my .my-list a{
        width: 5.3rem;
        text-align: center;
        color: black;
        display: inline-block;
    }
    .user-page .my .my-list a p{
        display: inline-block;
    }
    .user-page .my .my-list span{
        font-size: 2rem;
    }
    .user-page .my .my-list a p:nth-child(1){
        margin-bottom: 0.625rem;
    }
    .user-page .my .my-list a:nth-child(1) span{
        background: linear-gradient(to bottom right, #87e0fe, #3b85ee);
        /* 实现文字渐变代码 */
        -webkit-background-clip: text;
        color: transparent;
    }
    .user-page .my .my-list a:nth-child(2) span{
    font-size: 1.75rem;
    background: linear-gradient(to bottom right, #f7d687, #e97e2c);
    /* 实现文字渐变代码 */
    -webkit-background-clip: text;
    color: transparent;
    }
    .user-page .my .my-list a:nth-child(3) span{
    font-size: 1.8rem;
    background: linear-gradient(to bottom right, #67bef4, #3981ef);
    /* 实现文字渐变代码 */
    -webkit-background-clip: text;
    color: transparent;
    }
    .user-page .my .my-list a:nth-child(4) span{
    font-size: 1.75rem;
    background: linear-gradient(to bottom right, #efb182, #e64e43);
    /* 实现文字渐变代码 */
    -webkit-background-clip: text;
    color: transparent;
    }
    .user-page .tool{
        height: 18rem;
        width: 24rem;
        margin: 0 auto;
        position: relative;
        border-radius: 0.3rem;
        background: #fff;
    }
    .user-page .tool .my-tool p{
        width: 21.8rem;
        font-size: 1.125rem;
        padding: 0.9rem 0px;
        border-bottom: 1px solid #ececec;
        margin: 0 auto;
    }
    .user-page .tool .tool-list{
        width: 21.8rem;
        margin: 0 auto;
    }
    .user-page .tool .tool-list a{
        color: #353535;
    }
    .user-page .tool .tool-list>p{
        margin-top: 2.5rem;
    }
    .user-page .tool .tool-list>p span{
        font-size: 1.5rem;
    }
    .user-page .tool .tool-list p>a{
        width: 5.3rem;
        height: 3.6rem;
        display: inline-block;
        text-align: center;
    }
    .fr{
        float: right;
    }
</style>