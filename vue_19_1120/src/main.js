import Vue from "vue";
import App from "./App.vue";
import router from './router'; 
import axios from "axios"; 
import store from "./store/index";
import moment from "moment";
import { Button, Tab,TabPanel,Tabbar,Rate,lazyload,Toast,skeleton,Row} from '@nutui/nutui';
Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.prototype.axios = axios
Button.install(Vue);
Tab.install(Vue);
Tabbar.install(Vue);
TabPanel.install(Vue);
Rate.install(Vue);
lazyload.install(Vue);
Toast.install(Vue); 
skeleton.skeleton.install(Vue);
skeleton.skeletonCircle.install(Vue);
skeleton.skeletonColumn.install(Vue);
skeleton.skeletonRow.install(Vue);
skeleton.skeletonSquare.install(Vue);
// Skeleton.install(Vue); 
Row.install(Vue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
