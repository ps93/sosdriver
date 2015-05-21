'use strict';

var app = angular.module('app.base', []);

app.controller('BaseController', [
    '$window', '$rootScope', '$state', '$timeout', 'localStorageService', '$translate',
    require('./BaseController')
]);


console.log("entra");
module.exports = app;
