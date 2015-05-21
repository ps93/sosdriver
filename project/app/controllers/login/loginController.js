'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT) {

  var url= SANITRANSPORT+"authentication?username="+$scope.username+"&password="+$scope.password;

  $scope.login = function ()
  {
    //   alert("hai inserito  " + $scope.name + " "+ $scope.surname+ " ! ");


       $http.get(url).
  success(function(data, status, headers, config) {
   alert(data);
  }).
  error(function(data, status, headers, config) {
    alert("errore");
  });


  };



  $scope.goToPrehome = function () {
    $state.go('prehome');
  };


};
