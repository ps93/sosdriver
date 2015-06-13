'use strict';


module.exports = function ($rootScope, $scope, $state,$translate, $http , SANITRANSPORT) {

  var partenza = $rootScope.homeCustomer ;
  var destinazione = $rootScope.driverSelected;
$scope.percorso= {};
$scope.percorso.partenza = partenza;
$scope.percorso.destinazione = destinazione;

console.log("questooo "+$scope.partenza);


  var idautista = $state.params.id;

  $scope.provaBooking= function()
  {

     alert("entraaaa");

  };
};// end of all
