// require webpack, path and HtmlWebpackPlugin to start
const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

// create some convenience variables to make using these things later on a bit easier
const resolve = path.resolve // handle to path.resolve()
  join = path.join, // handle to path.join()
  root = resolve(__dirname), // handle to our root directory
  src = join(root, 'src'), // handle to our src directory
  dist = join(root, 'dist'); // handle to our dist directory

// configure HtmlWebpackPlugin, which makes it easier to create our index.html
// and serve up our app bundle - see https://github.com/ampedandwired/html-webpack-plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: join(src, 'index.html'), // set the file to use as a template
  filename: 'index.html', // write the resulting file to this filename
  inject: 'body', // inject assets into the body element
  title: 'Reify', // title to use (overridden by helmet)
  hash: true, // append a unique webpack compilation hash for cache busting
  cache: true, // try to emit the file only if it was changed
  favicon: 'favicon.ico', // adds the given favicon path to the output html
  showErrors: true // errors details will be written into the html page
});

// set up main webpack config object for development
config = {
  devtool: 'source-map', // emit a source map for debugging
  resolve: { // put options affecting module resolution in here
    root: src, // absolute path for dir containing all of the app's modules
    extensions: ['', '.js'], // lets us specify extensions for cleaner requires
    alias: { // lets us set up aliases for cleaner requires
      'app': './app' // now, we can require('app/App')
    }
  },
  entry: join(src, 'index'), // bundle entry point
  output: { // configure how to write the bundled files to disk
    path: dist, // absolute path to the output directory
    filename: 'bundle', // what to call the resulting output
    publicPath: 'http://localhost:8080/' // public URL address of the output
  },
  module: {
    loaders: [ // transformations to apply to a resource in your app
      // transform all .js files with the babel loader
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      // transform all css files with the style loader's css loader
      {test: /\.css$/, include: src, loader: 'style-loader!css-loader'},
      // transform all stylus files with the style loader's stylus loader
      {test: /\.styl$/, include: src, loader: 'style-loader!css-loader!stylus-loader'},
      // transform all sass files with the style loader's sass loader
      {test: /\.sass$/, include: src, loader: 'style-loader!css-loader!sass-loader'},
      // transform all less files with the style loader's less loader
      {test: /\.less$/, include: src, loader: 'style-loader!css-loader!less-loader'}
    ]
  },
  plugins: [ // tell webpack to use our configured plugins
    HtmlWebpackPluginConfig
  ]
};

// finally - *whew!* - export our webpack config object
module.exports = config;
