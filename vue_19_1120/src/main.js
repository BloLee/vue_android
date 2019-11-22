import Vue from "vue";
import App from "./App.vue";
import router from './router'; 
import axios from 'axios'
import { Button, Tab,TabPanel,Tabbar,Rate,lazyload,Toast} from '@nutui/nutui';
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Button.install(Vue);
Tab.install(Vue);
Tabbar.install(Vue);
TabPanel.install(Vue);
Rate.install(Vue);
lazyload.install(Vue);
Toast.install(Vue);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
