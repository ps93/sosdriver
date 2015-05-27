'use strict';

var app = angular.module('app.userArea', [])

.controller('UserAreaController', [
    '$rootScope', '$scope', '$state',
    require('./UserAreaController')
]);


module.exports = app;
