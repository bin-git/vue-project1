import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Mock from '@/mock/mock'


//全局样式
// import './assets/css/style.css'

//这种封装axios方法不可取
// import axios from 'axios'
// Vue.prototype.$myaxios = axios

// //引入封装axios
// import myaxios from './assets/js/myaxios'
// //使用封装的 axios ；名字是：myaxios
// Vue.use(myaxios);

//失败的例子
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import qs from 'qs'
// Vue.use(VueAxios, axios)
// Vue.prototype.qs = qs
import MyAxios from './components/myaxios/myaxios'
Vue.use(MyAxios)



//引入ElementUI插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//使用ElementUI插件
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
