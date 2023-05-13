
import VueClipboard from 'vue-clipboard2'
import { ClickObserver } from './observer'
import Vue from 'vue'
Vue.use(VueClipboard)
const clickObserver = new ClickObserver((element, options = {}, event) => {
  copyText.call(this, options)
}, { key: 'callapp_copytext' })

export default {
  bind (el, binding, vnode) {
    const vm = vnode.context
    clickObserver.observe(el, { ...binding.value, instance: vm })
  },
  unbind (el) {
    clickObserver.unobserve(el)
  }
}

function copyText (options) {
  if (!options || !options.instance) { return false }
  options.instance.$copyText(options.text).then(() => {
    options.cb && options.cb()
  }, () => {
    options.errorCb && options.errorCb()
  })
}
