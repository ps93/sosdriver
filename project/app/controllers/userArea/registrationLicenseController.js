'use strict';


module.exports = function ($rootScope, $scope, $state, $http, SANITRANSPORT) {

  $scope.goToUser = function () {
    $state.go('userArea');
  };
  var url= SANITRANSPORT+'registrationlicense';

$scope.registrationlicense = function (){
  var user = {
    Username : $rootScope.user.username,
    Patente : $scope.license,
    Emissione : $scope.dateofissue,
    Scadenza : $scope.dateofexpiration,
    Tipopatente : $scope.typelicense,
};


   var request = {
     'method' : 'POST',
     'url' : url ,
     'headers' : {
       'Content-Type': 'application/json'
     },
     'data' : user
   };


   $http(request).success(function(data, status, headers, config)
     {
       if(status==200)

         alert('dati salvati');
         $state.go('userArea');
     }).error(function(){
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("errore");
      });
};

};
