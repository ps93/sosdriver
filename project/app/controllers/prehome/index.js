'use strict';

var app = angular.module('app.prehome', []);

app.controller('PrehomeController', [
    '$rootScope', '$scope', '$state',
    require('./PrehomeController')
]);

module.exports = app;
