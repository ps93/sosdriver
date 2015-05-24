'use strict';

var app = angular.module('app.prehome', []);

.controller('UserAreaController', [
    '$rootScope', '$scope', '$state',
    require('./UserAreaController')
])

.controller('PersonController', [
    '$rootScope', '$scope', '$state',
    require('./PersonController')
]);


module.exports = app;
