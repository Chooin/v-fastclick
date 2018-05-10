import Vue from 'vue'

Vue.directive('fastclick', {
  bind (el, binding) {
    let envet = typeof window.ontouchstart === 'undefined'
      ? 'click'
      : 'touchstart'
    el.addEventListener(envet, () => {
      binding.value.method(binding.value.value)
    }, true)
  },
  unbind (el, binding) {
    let envet = typeof window.ontouchstart === 'undefined'
      ? 'click'
      : 'touchstart'
    el.removeEventListener(envet, () => {
      binding.value.method(binding.value.value)
    }, true)
  }
})
