'use strict';


module.exports = function ($rootScope, $scope, $state, $http, SANITRANSPORT,$filter) {

  $scope.email = $rootScope.user.email ;
  $scope.number = $rootScope.user.cellulare;
  $scope.city= $rootScope.user.citta;
  $scope.street= $rootScope.user.via;
  $scope.license = $rootScope.user.codicepatente;
  $scope.dateofissue = $rootScope.user.emissione;
  $scope.dateofexpiration =  $rootScope.user.scadenza;
  $scope.typelicense=  $rootScope.user.tipopatente;


    $scope.clock = new Date();

    var controllo;


      var userdriver = {
                  username : $rootScope.user.username,
                       };

                var urldriver= SANITRANSPORT+'controlLicense?username='+$rootScope.user.username;

                   $http.get(urldriver).
                   success(function(data, status, headers, config) {

                                   if(data==0)
                                   {
                                     $state.controllo=0;
                                     $state.tabellapatente = !scope.tabellapatente;
                                   }
                                   else {
                                     $state.controllo=1;
                                     $state.go('registrationlicense');
                                   }

                                 }).error(function(){
                                    // called asynchronously if an error occurs
                                    // or server returns response with an error status.
                                    alert("Errore");
                                  });



    $scope.disponibile = function (){

<<<<<<< HEAD
=======


                                      if (controllo==1)
                                      {
>>>>>>> 23c84df2884806e8140bd2943877df05e8658863
                                           var user = {

                                                       username : $rootScope.user.username,
                                                       datainizio : $scope.datestart,
                                                       orainizio : $filter('date')($scope.timestart, "HH:mm:ss"),
                                                       datafine : $scope.datefinish,
                                                       orafine : $filter('date')($scope.timefinish, "HH:mm:ss")

                                                     };

                                                     var url2= SANITRANSPORT+'availability';

                                                     var request = {
                                                                    'method' : 'POST',
                                                                    'url' : url2 ,
                                                                    'headers' : {  'Content-Type': 'application/json' },
                                                                    'data' : user
                                                                    };



                                                     $http(request).success(function(data, status, headers, config)
                                                       {
                                                         if(status==200)

                                                         alert('Salvato con Successo');

                                                         }).error(function(){
                                                          // called asynchronously if an error occurs
                                                          // or server returns response with an error status.
                                                          alert("Errore Salvataggio");
                                                           });
                                      }

                             };  //end of function salva()




$scope.salva = function(){

  console.log($rootScope.user);

    var user = {
                Username : $rootScope.user.username,
                Email : $scope.email !=='undefined' ? $rootScope.user.email : $scope.email ,
                Telefono : $scope.number,
                Citta : $scope.city,
                Via : $scope.street == 'undefined' ? $rootScope.user.street.via : $scope.street,
                Patente : $scope.license,
                Emissione : $scope.dateofissue,
                Scadenza : $scope.dateofexpiration,
                Tipopatente : $scope.typelicense,
              };


              var url1= SANITRANSPORT+'modification';


     var request = {
                    'method' : 'POST',
                    'url' : url1 ,
                    'headers' : {  'Content-Type': 'application/json' },
                    'data' : user
                    };



     $http(request).success(function(data, status, headers, config)
       {
         if(status==200)

         alert('Salvato con Successo');
         $scope.shouldShow = !$scope.shouldShow;
         $state.go('userArea');
         $route.reload();


       }).error(function(){
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("Errore Salvataggio");
        });
   };  //end of function salva()



$scope.annulla = function (){
  $scope.shouldShow = !$scope.shouldShow;
  $state.go('userArea');
  $route.reload();
}




};// end of all
