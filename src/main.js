import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './router';
import store from './store'
import "ant-design-vue/dist/antd.css";
import { Input } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Input);
Vue.use(Icon);

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
