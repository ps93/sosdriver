'use strict';


module.exports = function ($rootScope, $scope, $state, $http, SANITRANSPORT) {



    $scope.clock = new Date();


    $scope.disponibile = function (){


      var user = {

                  username : $rootScope.user.username,
                  datainizio : $scope.datestart,
                  orainizio : $scope.timestart,
                  datafine : $scope.datefinish,
                  orafine : $scope.timefinish,

                };


                var request = {
                               'method' : 'GET',
                               'url' : url2 ,
                               'headers' : {  'Content-Type': 'application/json' },
                               'data' : user
                               };

               var url2= SANITRANSPORT+'availability';

                $http(request).success(function(data, status, headers, config)
                  {
                    if(status==200)

                    alert('Salvato con Successo');

                  }).error(function(){
                     // called asynchronously if an error occurs
                     // or server returns response with an error status.
                     alert("Errore Salvataggio");
                   });
              };  //end of function salva()

$scope.salva = function(){

    var user = {
                Username : $rootScope.user.username,
                Email : $scope.email,
                Telefono : $scope.number,
                Citta : $scope.city,
                Via : $scope.street,
                Patente : $scope.license,
                Emissione : $scope.dateofissue,
                Scadenza : $scope.dateofexpiration,
                Tipopatente : $scope.typelicense,
              };


     var request = {
                    'method' : 'POST',
                    'url' : url1 ,
                    'headers' : {  'Content-Type': 'application/json' },
                    'data' : user
                    };

      var url1= SANITRANSPORT+'modification';


     $http(request).success(function(data, status, headers, config)
       {
         if(status==200)

         alert('Salvato con Successo');
         $state.go('userArea');


       }).error(function(){
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("Errore Salvataggio");
        });
   };  //end of function salva()






};// end of all
