import { registerMicroApps, start, initGlobalState } from 'qiankun'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 注册子应用
const isProd = process.env.NODE_ENV === 'production'
registerMicroApps([
  {
    name: 'login',
    entry: isProd ? '//localhost:4021' : '//localhost:8081',
    container: '#child',
    activeRule: '/login',
    props: {
      msg: 'parent-login'
    }
  },
  {
    name: 'admin',
    entry: isProd ? '//localhost:4022' : '//localhost:8082',
    container: '#child',
    activeRule: '/admin',
    props: {
      msg: 'parent-admin'
    }
  }
], {
  beforeLoad: [
    app => {
      NProgress.start()
      console.log(`${app.name}的beforeLoad阶段`)
      return Promise.resolve()
    }
  ],
  beforeMount: [
    app => {
      console.log(`${app.name}的beforeMount阶段`)
    }
  ],
  afterMount: [
    app => {
      NProgress.done()
      console.log(`${app.name}的afterMount阶段`)
      return Promise.resolve()
    }
  ],
  beforeUnmount: [
    app => {
      console.log(`${app.name}的beforeUnmount阶段`)
    }
  ],
  afterUnmount: [
    app => {
      console.log(`${app.name}的afterUnmount阶段`)
    }
  ]
})
const actions = initGlobalState({ closeTab: '' })
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main state change', state, prev)
  // 将action对象绑到Vue原型上，为了项目中其他地方使用方便
  // Vue.prototype.$actions = actions;
  // this.$actions.setGlobalState({
  //   mt: value
  // });
  if (state.closeTab !== '') {
    // vuex里面的modules里面的mutation，已经被全局使用，不想全局可以给命名空间，另外，直接调用mutation不太好，最好使用action，也就是dispatch方式
    // store.commit('CLOSE_TAG', state.closeTab);
  }
})
export default function () {
  // 开启服务
  start({ experimentalStyleIsolation: true, prefetch: false })
}
