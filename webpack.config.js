const path = require('path')

module.exports = {
  
  mode: 'development',
  entry: { app: ['./src/data.js', './src/index.js']},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: {
      name: 'a2blib',
      type: 'var',
    },
  },
  devtool: 'eval-source-map',
  watch: true,
  experiments: {
  topLevelAwait: true
  }
}