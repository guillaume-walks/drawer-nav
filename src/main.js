import Vue from 'vue'
import App from './App.vue'
import DrawerLayout from 'vue-drawer-layout'

Vue.use(DrawerLayout)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
