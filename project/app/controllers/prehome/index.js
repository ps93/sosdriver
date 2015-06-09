'use strict';

var app = angular.module('app.prehome', []);

app.controller('PrehomeController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT','localStorageService',
    require('./PrehomeController')
]);
module.exports = app;
