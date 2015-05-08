module.exports = {
  context: __dirname + '/js',
  entry: './main.js',
  output: {
    // path: ,
    path: __dirname + '/js',
    filename: 'app.js'
  },  
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.js$/, exclude: /node_modules/, loaders: ['jsx-loader', 'babel-loader']}
    ]
  }
};