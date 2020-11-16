import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'; //导入模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//赋值使用
Vue.config.productionTip = false
new Vue({
  router,
  store,
  //将创建的共享数据对象 挂载到Vue实例中
  //所有的组件，就可以直接从store中获取全局的数据了
  render: h => h(App)
}).$mount('#app')
