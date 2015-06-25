'use strict';

module.exports = function ($rootScope,$scope,$state,GoogleMapInitService,$interval,SANITRANSPORT,$http) {
  var swiper = new Swiper('.swiper-container');

  $scope.openMenu = function () {
      $rootScope.toggleMenu = true;
  };



    $scope.closeMenu = function () {
        $rootScope.toggleMenu = false;
    };

    $scope.openNotification = function(){

      alert('funge');
    };
    var url = SANITRANSPORT+'notifications?id='+$rootScope.user.IdUser;
      var url2 = SANITRANSPORT+'drivers';
      $http.get(url).
        success(function(data, status, headers, config) {
          $scope.notifiche = data;
          console.log("notifiche");
        }).
        error(function(data, status, headers, config) {
            console.log("errore notifiche");

        });
  $interval(function()
  {



  $http.get(url).
    success(function(data, status, headers, config) {
      $scope.notifiche = data;
      console.log("notifiche");
    }).
    error(function(data, status, headers, config) {
        console.log("errore notifiche");

    });



  $http.get(url2).
    success(function(data, status, headers, config) {
      $rootScope.drivers = data;
      console.log("drivers");
    }).
    error(function(data, status, headers, config) {
        console.log("errore drivers");

    });



    console.log('passati 5 secondi');
  }, 60000);


 console.log('sono area controller');
 $scope.tab=1;

 $scope.template = "../views/home/user.html";




 GoogleMapInitService.then(function () {



});









};
