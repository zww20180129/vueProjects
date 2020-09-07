import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  //将创建的共享数据对象 挂载到Vue实例中
  //所有的组件，就可以直接从store中获取全局的数据了
  render: h => h(App)
}).$mount('#app')
