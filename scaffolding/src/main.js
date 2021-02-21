import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引人入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.config.productionTip = false
Vue.prototype.axios = axios;

//引入按钮组件http://www.wheelsfactory.cn/#/detail?id=137
//https://github.com/euvl/vue-js-toggle-button
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
    //引入日期插件http://www.wheelsfactory.cn/#/detail?id=221
    //https://github.com/kylin-z/vue-calendar
import Calendar from 'himmas-vue-calendar'
Vue.use(Calendar)

//导入mint-ui
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')