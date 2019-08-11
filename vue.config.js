const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies:[/node_modules[/\\\\]vuetify[/\\\\]/],
  devServer: {
    index: 'index.html'
  },
  pages: {
    fr: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'La Nouvelle EPOCH',
    },
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
    ],
  },
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(options => {
        return {
          ...options,
          extract: false,
        };
      });
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },
};
