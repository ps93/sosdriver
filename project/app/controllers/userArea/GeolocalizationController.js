'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT) {

  $rootScope.title="geolocalization";
    var url = SANITRANSPORT+'drivers';

    $http.get(url).
    success(function(data, status, headers, config) {
      $scope.drivers = data;
    }).
    error(function(data, status, headers, config) {


    });


    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
          $scope.options = {scrollwheel: false};

  $scope.goToTab = function(tab){


  };



    $scope.driverDetail = function(){

alert("dettali");
    };




};
