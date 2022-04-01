import App from './App'
import Vue from 'vue'
import store from './store'
import './common/common.scss'
Vue.prototype.$store = store
// #ifndef VUE3
// import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif