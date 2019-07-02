module.exports = {
  chainWebpack: config => {
    const vueRule = config.module.rule('vue')
    vueRule
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'condense'
        return options
      })
  }
}
