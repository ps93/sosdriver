'use strict';

var app = angular.module('app.prehome', []);

app.controller('registrationController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT','localStorageService',
    require('./registrationController')
]);


module.exports = app;
