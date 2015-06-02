'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT) {


    var url = SANITRANSPORT+'drivers';

    $http.get(url).
    success(function(data, status, headers, config) {
      $scope.drivers = data;
    }).
    error(function(data, status, headers, config) {


    });


  $scope.goToTab = function(tab){


  };



};
