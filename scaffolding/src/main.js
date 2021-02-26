import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs';
Vue.prototype.qs = qs;
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
//导入mint-ui
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')