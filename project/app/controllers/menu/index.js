'use strict';

var app = angular.module('app.Menu', [])

.controller('headerMenuController', [
    '$rootScope', '$scope', '$state',
    require('./headerMenuController')
]);


module.exports = app;
