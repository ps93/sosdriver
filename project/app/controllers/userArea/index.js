'use strict';

var app = angular.module('app.userArea', [])

.controller('UserAreaController', [
    '$rootScope', '$scope', '$state',
    require('./UserAreaController')
])



//controller del primo tab che richiama file UserController.js
.controller('UserController', [
    '$rootScope', '$scope', '$state',
    require('./UserController')
]);


module.exports = app;
