import notification from './components/wrapper.vue'
import utils from './libs/utils.js'

function plugin (Vue, options) {
    const defaultOptions = {
        defaultPosition: 'toast-bottom-right',
        defaultType: 'success',
        defaultTimeout: 5000
    }

    options = utils.extend(defaultOptions, [options || {}])

    const Comp = Vue.extend(notification)
    const vm = new Comp({
        data: {
            defaultPosition: options.defaultPosition,
            defaultType: options.defaultType,
            defaultTimeout: options.defaultTimeout
        }
    }).$mount()
    document.body.appendChild(vm.$el)

    Vue.prototype.$toastr = function (type, message, title) {
        if (message === undefined) {
            console.warn('Vue-Toastr: Warning you must specify a message')
            return
        }
        switch (type) {
            case 'success':
                vm.success(message, title)
                break
            case 'error':
                vm.error(message, title)
                break
            case 'warning':
                vm.warning(message, title)
                break
            case 'info':
                vm.info(message, title)
                break
            case 'add':
                vm.Add(message)
                break
        }
    }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  version
}
