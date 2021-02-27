import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引人入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.config.productionTip = false
Vue.prototype.axios = axios;
//引入mintui轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入qs插件
import qs from 'qs'
//为vue原型链对象添加qs方法，使vue的子对象可以调用该方法
Vue.prototype.qs = qs;
//引入mintui按钮组件
import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);
//引入mintui手风琴导航
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
//引入日期插件http://www.wheelsfactory.cn/#/detail?id=221
//https://github.com/kylin-z/vue-calendar
import Calendar from 'himmas-vue-calendar'
Vue.use(Calendar)
    //引入弹窗输入插件
    //导入mint-ui
import MintUI from 'mint-ui';
// import BaiduMap from 'vue-baidu-map';
//导入样式文件
import 'mint-ui/lib/style.min.css';
// 引入mint ui弹出框样式
import { MessageBox } from 'mint-ui';
Vue.use(MintUI);
//引入mint ui tab container插件
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

//引入mint ui 复选按钮
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);
//添加mint ui 头部返回按钮

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

// Vue.use(BaiduMap, {
//     /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
//     ak: 'nGLvlES6KlFt0NRzn2IKjTYp9aLhinuI'
// })
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')