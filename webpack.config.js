const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/javascript/index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'index.bundle.js'
  }
}
