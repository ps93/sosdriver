var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Webpack = require('webpack');
var NgAnnotatePlugin = require("ng-annotate-webpack-plugin");

module.exports = {
  entry : './project/app/bootstrap/app',
  output:{
    path : './public',
    filename: 'app.js',
  },
  module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css')},
            {test: /\.(jpg|png|gif|json)$/, loader: 'file'},
            { test: /\.woff([\?]?.*)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf([\?]?.*)$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot([\?]?.*)$/,  loader: "file-loader" },
            { test: /\.svg([\?]?.*)$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    },
  resolve: {
        modulesDirectories: ['node_modules', 'bower_components', 'project'],
        alias: {
            'angular': 'angular/angular.js',
            'angular-ui-router': 'angular-ui-router/release/angular-ui-router.js',
            'angular-local-storage': 'angular-local-storage/dist/angular-local-storage.js',
            'css': 'css',
            'angular-touch': 'angular-touch/angular-touch.js',
            'spin': 'lib/spin.js',
            'angular-i18n': 'angular-i18n/it-it.js',
            'ocLazyLoad': 'ocLazyLoad/dist/ocLazyLoad.min.js',
            'swiper': 'swiper/dist/js/swiper.js',
            'ionic' : 'css/lib/ionic/js/ionic.bundle.js',
            'lodash': 'lodash/lodash.js',
            'angular-translate': 'angular-translate/angular-translate.js',
            'angular-ui-clock' : 'angular-ui-clock/dist/angular-clock.js',
            'camera' : 'angular-eha.cordova.camera/dist/angular-eha.cordova.camera.js',
        }
   },
    plugins: [
        new ExtractTextPlugin('app.css'),
          new Webpack.ProvidePlugin({
            _: 'lodash',
            Spinner: 'spin',
            Swiper: 'swiper',
            accounting: 'accounting'
        })/*,
        new NgAnnotatePlugin({
            add: true
        }),
        new Webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            }
        })*/
    ]

};
