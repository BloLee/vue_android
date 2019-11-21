import Vue from "vue";
import App from "./App.vue";
import router from './router'; 
Vue.config.productionTip = false;
import { Button, Tab,TabPanel,Tabbar} from '@nutui/nutui';
Button.install(Vue);
Tab.install(Vue);
Tabbar.install(Vue);
TabPanel.install(Vue);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
