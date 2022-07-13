// path is modele comonent that will execure the specifc path where to save the file
const path = require('path');
const postCSSPlugins = [
  require('postcss-import'),
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
  mode: 'development',
//  this once iniciated it will monitor the change and it need to be stop by control+c 
  watch: true,
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