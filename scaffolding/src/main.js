import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
//导入mint-ui
import MintUI from 'mint-ui';
import BaiduMap from 'vue-baidu-map';
//导入样式文件
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI);
Vue.use(BaiduMap, {
    /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
    ak: 'nGLvlES6KlFt0NRzn2IKjTYp9aLhinuI'
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')