import Vue from 'vue'
import Toast from './Toast.vue'
const ToastTem = Vue.extend(Toast)
let instance
let timer = null

const toast = (initOptions, options) => {
  if (typeof options === 'string') {
    options = { message: options }
  } else if (typeof options !== 'object') {
    return
  }
  options = { ...initOptions, ...options }

  if (!instance) {
    instance = new ToastTem({
      propsData: options
    })
    instance.vm = instance.$mount()
    instance.className = options.className
    // document.querySelector('.toastBox') 
    document.querySelector('.toastBox') ? document.querySelector('.toastBox').appendChild(instance.vm.$el) : document.body.appendChild(instance.vm.$el)
  }

  clearTimer()
  instance.message = options.message || ''
  instance.show = true
  timer = setTimeout(clearTimer, options.timeout || instance.timeout || 2000)

  function clearTimer () {
    if (timer) {
      clearTimeout(timer)
      timer = null
      instance.show = false
      instance.message = ''
    }
  }
}

toast.close = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.message = ''
  }
}

toast.install = (Vue, initOptions) => {
  Vue.prototype.$toast = toast.bind(null, initOptions)
  // for 
  window.Tangram_Toast_Show = (text, timeout) => {
    return toast(initOptions, { message: text, timeout: timeout || 0 })
  }
}
export default toast
