'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT,GoogleMapInitService,localStorageService,$window) {

  $rootScope.title="geolocalization";
    var url = SANITRANSPORT+'drivers';

    GoogleMapInitService.then(function () {
        var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(45.4822,9.21405),
            disableDefaultUI: false
        };
        $rootScope.mapOptions = mapOptions ;
        var map = new google.maps.Map(document.querySelector('#google-map'), mapOptions);

 });

    $http.get(url).
    success(function(data, status, headers, config) {
      $scope.drivers = data;
    }).
    error(function(data, status, headers, config) {


    });

    $scope.findCustomer= 0;


    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
          $scope.options = {scrollwheel: false};

  $scope.goToTab = function(tab){


  };




    $scope.driverDetail = function(){

alert("dettali");
    };




};
