// path is modele comonent that will execure the specifc path where to save the file
const path = require('path');
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
]
module.exports = {
  entry: './app/assets/scripts/App.js', 
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    before: function(app, server) {
      // ** will look for folder and subfolder for .html
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    // inject content to web browser
    hot:true,
    // it will alow all devices in the same network to view local page
    host: '0.0.0.0',
    port: 4000,
  },
  mode: 'development',

  // properties name module. This module will configure css-loader pack 
  module: {
    rules: [
      {
        // test  looks on for file extention .css, if found use css-loader pack and other
        test: /\.css$/i,
        use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
      }
    ]
  }
}