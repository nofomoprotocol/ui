import Vue from 'vue'
import App from './App.vue'
import toast from './components/toast'
import copyText from './components/copyText'
import './style/base.css'
import './style/main.css'

Vue.directive('copyText', copyText)
Vue.use(toast)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
