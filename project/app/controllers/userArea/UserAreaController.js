'use strict';

module.exports = function ($rootScope,$scope,$state,GoogleMapInitService,$interval,SANITRANSPORT,$http) {
  var swiper = new Swiper('.swiper-container');

  $scope.openMenu = function () {
      $rootScope.toggleMenu = true;
  };


    $scope.closeMenu = function () {
        $rootScope.toggleMenu = false;
    };


    var url = SANITRANSPORT+'notifications?id='+$rootScope.user.idUser;

  $interval(function()
  {



  $http.get(url).
    success(function(data, status, headers, config) {
      $scope.notifiche = data;
    }).
    error(function(data, status, headers, config) {
        alert("errore notifiche");

    });




    console.log('passati 5 secondi');
  }, 60000);


 console.log('sono area controller');
 $scope.tab=1;

 $scope.template = "../views/home/user.html";




 GoogleMapInitService.then(function () {



});









};
