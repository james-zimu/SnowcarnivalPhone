import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引人入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.config.productionTip = false
Vue.prototype.axios = axios;
//引入qs插件
import qs from 'qs'
Vue.prototype.qs = qs;
//引入mintui按钮组件
import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);

//引入日期插件http://www.wheelsfactory.cn/#/detail?id=221
//https://github.com/kylin-z/vue-calendar
import Calendar from 'himmas-vue-calendar'
Vue.use(Calendar)
    //引入弹窗输入插件
    //导入mint-ui
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css';
// 引入mint ui弹出框样式
import { MessageBox } from 'mint-ui';
Vue.use(MintUI);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')