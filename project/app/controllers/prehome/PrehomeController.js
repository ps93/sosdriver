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
    if(status=='200')
      {
        console.log('login con successo');

        $rootScope.user = data;

        $state.go('userArea');
      }
    else {
      $scope.message='Login fallito';
      console.log('login fallito');

    }

  }).
  error(function(data, status, headers, config) {
    $scope.carica=false;
    $scope.message='Login fallito';

  });


  };



  $scope.goToRegistration = function ()
  {
        console.log('registra');
        $state.go('registration');
  };

};
