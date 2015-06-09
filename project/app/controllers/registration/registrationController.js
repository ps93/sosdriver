'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT) {


  var url= SANITRANSPORT+"registration";


  $scope.registration = function(){




     var user = {

       Nome : $scope.name,
       Cognome : $scope.surname,
       Sesso : $scope.gender,
       Nascita : $scope.birthday,
       Username : $scope.username,
       Password : $scope.password,
       Email : $scope.email,
       Telefono : $scope.number,
       Citta : $scope.city,
       Via : $scope.street,

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
            $state.go('userArea');
          alert(data);

        }).error(function(){
           // called asynchronously if an error occurs
           // or server returns response with an error status.
           alert("errore");
         });
  };

  $scope.goToPrehome = function () {
    $state.go('prehome');
  };



};
