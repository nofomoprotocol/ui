let clickCallbacks = []
export function addClickEvent (callback, idKey) {
    callback.idKey = idKey
    clickCallbacks.push(callback)
}

export function isRootElement (element) {
    return element === document.body ||
        element === document.documentElement ||
        element === document
}
export class ClickObserver {
  num = 0

  constructor (callback, options = {}) {
    this.callback = callback || (() => {})
    this.idKey = options.key || '_clickId'
    this.optionsKey = `${this.idKey}Options`
    this.init(options)
  }

  init (options) {
    addClickEvent(event => {
      let element = event.target
      if (isRootElement(element)) return
      while (!element[this.idKey]) {
        element = element.parentNode
        if (!element || isRootElement(element)) return
      }
      this.callback(element, element[this.optionsKey] || {}, event)
    }, this.idKey)
  }

  observe (el, options) {
    el[this.idKey] = this.num = this.num + 1
    el[this.optionsKey] = options
  }

  update (el, options) {
    el[this.optionsKey] = options
  }

  unobserve (el) {
    delete el[this.idKey]
    delete el[this.optionsKey]
  }
}
