'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT) {


  $scope.carica=false;


  $scope.login = function ()
  {
    $scope.carica=true;
    $scope.message = '';
    //   alert("hai inserito  " + $scope.name + " "+ $scope.surname+ " ! ");
    var url= SANITRANSPORT+"authentication?username="+$scope.username+"&password="+$scope.password;


       $http.get(url).
  success(function(data, status, headers, config) {
    $scope.carica=false;
    if(data=='200')
      {
        console.log('login con successo');
        $state.go('person');
      }
    else {
      $scope.message='Login fallito';

    }

  }).
  error(function(data, status, headers, config) {
    $scope.carica=false;
    $scope.message='Login fallito';
    alert("errore");
  });


  };



  $scope.goToPrehome = function () {
    $state.go('prehome');
  };


};
