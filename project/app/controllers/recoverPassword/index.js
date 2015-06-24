'use strict';

var app = angular.module('app.prehome', []);

app.controller('recoverPasswordController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT','localStorageService',
    require('./recoverPasswordController')
]);
module.exports = app;
