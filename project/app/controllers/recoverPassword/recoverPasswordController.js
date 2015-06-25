'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT,localStorageService)
{

  $scope.goToDrivers = function()
  {
    $state.go('prehome');
  };


  $scope.recover = function ()
  {

        var url= SANITRANSPORT+"recoverPassword?email="+$scope.email;



        var request =
        {
          'method' : 'GET',
          'url' : url
        };


        $http(request).success(function(data, status, headers, config)
        {

           if(status==200)
           {
              console.log('recupero password con successo');

              $state.go('prehome');
           }
           else
             console.log('password non recuperata');



       }).error(function(data, status, headers, config)
       {

               alert("errore");

       });
   };
};
