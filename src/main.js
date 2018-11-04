import Vue from 'vue'
import App from './App.vue'
import Tabs from 'buefy/dist/components/tabs'
import Modal from 'buefy/dist/components/modal'
import 'buefy/dist/buefy.css'
import './assets/scss/main.scss'

Vue.use(Tabs)
Vue.use(Modal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
