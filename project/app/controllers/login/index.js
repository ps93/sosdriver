'use strict';

var app = angular.module('app.prehome', []);

app.controller('loginController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT',
    require('./loginController')
]);

module.exports = app;
