import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'
createApp(App)
  .use(store)
  .use(router)
  .mount('#main')
// 注册子应用
registerMicroApps([
  {
    name: 'login',
    entry: '//localhost:8081',
    container: '#child',
    activeRule: '/login'
  },
  {
    name: 'admin',
    entry: '//localhost:8082',
    container: '#child',
    activeRule: '/admin'
  }
])
// 开启服务
start()
