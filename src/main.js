import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import Vant from 'vant';
import animate from 'animate.css'
import "vant/lib/index.css";
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from "axios"
Vue.prototype.axios=axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(Vant)
Vue.use(MintUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

