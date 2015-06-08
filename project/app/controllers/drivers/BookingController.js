'use strict';


module.exports = function ($rootScope, $scope, $state,$translate, $http , SANITRANSPORT) {

  var requestDriverDetail = $state.params.id;
  var url = SANITRANSPORT+'details?id='+requestDriverDetail;

  var idautista = $state.params.idautista;

};// end of all
