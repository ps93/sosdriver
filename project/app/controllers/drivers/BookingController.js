'use strict';


module.exports = function ($rootScope, $scope, $state,$translate, $http , SANITRANSPORT) {


$scope.partenza= {};
$scope.partenza.lat_partenza = $rootScope.driverSelected.lat;
$scope.partenza.lon_partenza = $rootScope.driverSelected.lon;
console.log("questooo "+$scope.partenza);


  var idautista = $state.params.id;

  $scope.provaBooking= function()
  {

     alert("entraaaa");

  };
};// end of all
