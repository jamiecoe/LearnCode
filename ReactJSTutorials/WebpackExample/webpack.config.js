// Is our Node environment 'production'?
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  // If it is 'production' enviroment, we won't do sourcemapping
  // If it's not 'production', we'll consider it 'debug' mode
  // If it is 'debug', then we'll use 'inline-sourcemap' to help out console.logging, otherwise no dev tools     
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  // If it is 'production' environment, run all these minification things 
  // if 'debug', then just empty array
  plugins: debug ? [] : [
    // Strip out any duplicate code    
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Uglify js gets rid of source maps and comments
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};