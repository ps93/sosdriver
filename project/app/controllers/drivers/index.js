'use strict';

var app = angular.module('app.driver', [])



.controller('DriverController', [
  '$rootScope', '$scope', '$state','$translate', '$http' ,'SANITRANSPORT',
    require('./DriverController')
])

.controller('BookingController', [
  '$rootScope', '$scope', '$state','$translate', '$http' ,'SANITRANSPORT',
    require('./BookingController')
]);

module.exports = app;
