'use strict';
var a =5;
var app = angular.module('app.splashscreen', []);

app.controller('SplashscreenController', [
    '$rootScope', '$scope', '$state', '$interval',
    require('./SplashscreenController')
]);

module.exports = app;
