// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 主入口文件

import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import './assets/sytles/reset.css'  
import './assets/sytles/border.css'  //解决移动端1px边框问题

Vue.config.productionTip = false
fastClick.attach(document.body); //解决移动端点击事件300毫秒延迟问题

/* eslint-disable no-new */
new Vue({
  el: '#app',           //根实例挂载的是index.html上id=app的标签
  router,               // 路由就是根据网址的不同，返回不同的内容给用户 
  components: { App },  //注册路由
  template: '<App/>'    //使用的模板是 App.vue 这个组件
})


