module.exports = {
  context: __dirname + '/js',
  entry: './main.jsx',
  output: {
    // path: ,
    path: __dirname + '/js',
    filename: 'app.js'
  },  
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  }
};