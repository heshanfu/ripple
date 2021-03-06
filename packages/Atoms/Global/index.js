const RplGlobal = {
  // Provide plugin for Vue to inject options.
  install (Vue, options) {
    const rplOptions = {
      nuxt: false,
      hostname: 'localhost'
    }

    const mergedOptions = Object.assign({}, rplOptions, options)

    Vue.mixin({
      data: function () {
        return {
          rplOptions: mergedOptions
        }
      }
    })
  }
}

export default RplGlobal
