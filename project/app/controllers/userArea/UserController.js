'use strict';
module.exports = function ($rootScope, $scope, $state, $http, SANITRANSPORT, $filter, localStorageService, GoogleMapInitService) {

  var pat = $state.params.pat;

  $rootScope.user = localStorageService.get('user');

    $scope.controllo;
    $scope.driver = true;
    $scope.clock = new Date();

    $scope.capturePhoto = function(){

      $scope.test = "test 1";
      var defer = $q.defer();
      defer.promise.then(function (imageData){
           var image = imageData;

          alert($scope); // [object Object]
          alert($scope.test); // test1
          $scope.test = "test 2"; // Problem: do not show on screen
          alert($scope.test); // test2
      }, function (error){ alert('nadaa');});

      navigator.camera.getPicture(defer.resolve, defer.reject, { quality: 50,
      destinationType: Camera.DestinationType.DATA_URL });

  };








    if (pat == 1)
    {
      $scope.Patente = $rootScope.user.Patente;
      $rootScope.user.CodicePatente = $scope.Patente.CodicePatente;
      $rootScope.user.Emissione = $scope.Patente.Emissione;
      $rootScope.user.Scadenza = $scope.Patente.Scadenza;
      $rootScope.user.TipoPatente = $scope.Patente.TipoPatente;
    }



                var urldriver= SANITRANSPORT+'controlLicense?Username='+$rootScope.user.Username;
                   $http.get(urldriver).
                   success(function(data, status, headers, config) {
                                   if(data.Stato==0)
                                   {
                                     $scope.controllo=0;
                                     $scope.tabellapatente = 'false';
                                   }
                                   else {
                                     $scope.controllo=1;
                                       }
                                   if(data.Autista==0){
                                   $rootScope.user.Disponibile = data;
                                   localStorageService.set('user',$rootScope.user);
                                   $scope.checkautista = false;}
                                   if(data.Autista==1){
                                   $rootScope.user.disponibile = data;
                                   localStorageService.set('user',$rootScope.user);
                                   $scope.checkautista =true;
                                     }



                                 }).error(function(){
                                    // called asynchronously if an error occurs
                                    // or server returns response with an error status.
                                    alert("Errore");
                                  });
$scope.salva = function(){

  $scope.email = $rootScope.user.Email;
  $scope.cellulare  = $rootScope.user.Cellulare;
  $scope.citta = $rootScope.user.Citta;
  $scope.via = $rootScope.user.Via;
  $scope.codicepatente = $rootScope.user.CodicePatente;
  $scope.emissione = $rootScope.user.Emissione;
  $scope.scadenza = $rootScope.user.Scadenza;
  $scope.tipopatente = $rootScope.user.TipoPatente;



 $scope.email = $rootScope.user.Email == $scope.Email ? $rootScope.user.Email : $scope.email ;
 $scope.cellulare = $rootScope.user.Cellulare == $scope.cellulare ? $rootScope.user.Cellulare : $scope.cellulare ;
 $scope.citta = $rootScope.user.Citta == $scope.citta ? $rootScope.user.Citta : $scope.citta ;
 $scope.via = $rootScope.user.Via == $scope.via ? $rootScope.user.Via : $scope.via ;
 $scope.codicepatente = $rootScope.user.Codicepatente == $scope.codicepatente ? $rootScope.user.Codicepatente : $scope.codicepatente ;
 $scope.emissione = $rootScope.user.Emissione == $scope.emissione ? $rootScope.user.Emissione : $scope.emissione ;
 $scope.scadenza = $rootScope.user.Scadenza == $scope.scadenza ? $rootScope.user.Scadenza : $scope.scadenza ;
 $scope.tipopatente = $rootScope.user.TipoPatente == $scope.tipopatente ? $rootScope.user.TipoPatente : $scope.tipopatente ;





    var user = {

                Username : $rootScope.user.Username,
                Email : $scope.email /* !=='undefined' ? $rootScope.user.email : $scope.email */,
                Cellulare : $scope.cellulare,
                Citta : $scope.citta,
                Via : $scope.via /*== 'undefined' ? $rootScope.user.street.via : $scope.street*/,
                CodicePatente : $scope.codicepatente,
                Emissione : $filter('date')(new Date($scope.emissione), 'yyyy MM dd'),
                Scadenza : $filter('date')(new Date($scope.scadenza), 'yyyy MM dd'),
                TipoPatente : $scope.tipopatente
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
         {
         $rootScope.user = data;
         localStorageService.set('user',$rootScope.user);
         alert('Salvato con Successo');
         $scope.shouldShow = !$scope.shouldShow;
         $state.go('userArea');
         }
       }).error(function(){
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("Errore Salvataggio");
        });
   };  //end of function salva()



$scope.annulla = function (){
  $scope.shouldShow = !$scope.shouldShow;
  $state.go('userArea');
}



$scope.Driver = function() {
  if ($scope.controllo == 0)
    {
      alert("DEVI REGISTRARE I DATI DELLA PATENTE");
         $state.go('registrationlicense');
    }
    else {
      $scope.chooseDriver = !$scope.chooseDriver;
    }
};//fine function chooseDriver
$scope.autista = function (){



        var url2= SANITRANSPORT+'availability?id='+$scope.user.IdUser;

        $http.get(url2).success(function(data, status, headers, config)
          {
            if(data==1)
              {
                $rootScope.user.disponibile = data;
                localStorageService.set('user',$rootScope.user);
                $scope.checkautista = true;
              }
              else
              {
                $rootScope.user.disponibile = data;
                localStorageService.set('user',$rootScope.user);
                $scope.checkautista = false;
              }
            }).error(function(){
             // called asynchronously if an error occurs
             // or server returns response with an error status.
             alert("Errore Server");
              });
};



function mia_posizione(position) {
  var mylat = position.coords.latitude;
  var mylon = position.coords.longitude;
  var myPosition = new google.maps.LatLng(mylat,mylon); // my position
  console.log(myPosition);
    //myPosition contiene la tua posizione
 $scope.mylat = mylat;
 $scope.mylon = mylon;
var user = {
        iduser : $rootScope.user.username,
         lat : $scope.mylat,
         lon : $scope.mylon
      };
      var url3= SANITRANSPORT+'position';
var request = {
            'method' : 'POST',
            'url' : url3 ,
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
$scope.key="AIzaSyAm8OGXur9AQTbEx6HvVQotFO3gf54rEfk";
var urlgetAddress = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+$scope.mylat+","+$scope.mylon+"&key="+$scope.key;
$http.get(urlgetAddress).success(function(data, status, headers, config)
{
if(status==200)
{ alert("YEHEY");
  $scope.actualAddress = data.results[0].formatted_address;
}
}).error(function(){
 // called asynchronously if an error occurs
 // or server returns response with an error status.
 alert("Errore Server");
  });
}

$scope.localizzazione = function (){




                        if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mia_posizione);
  var a =5;
      }
      else{
        alert('La geo-localizzazione NON è possibile');
      }
     // end of function googlemapInitService
  };//end of function() localizzazione
           //-----------------------------
};// end of all
