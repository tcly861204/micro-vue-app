import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import microApp from './micro'
import '@/style/common.scss'
createApp(App)
  .use(store)
  .use(router)
  .mount('#main')
microApp()
