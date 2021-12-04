import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from 'echarts';
import axios from 'axios';
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as VueJsonp from 'vue-jsonp';
import AMap from '@amap/amap-vue';


Vue.use(VueJsonp)
Vue.use(ElementUI);

Vue.prototype.$jsonp = VueJsonp;

AMap.config.version = '2.0'; // 默认2.0，这里可以不修改
AMap.config.key = '369fd396a220fb6124a8e8f35b8ce967';

AMap.config.plugins = [
  'AMap.ToolBar',
  'AMap.MoveAnimation'
  // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
];

Vue.use(AMap);
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
import api from './api/index';
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");