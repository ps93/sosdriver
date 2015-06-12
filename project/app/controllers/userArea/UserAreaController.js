'use strict';

module.exports = function ($rootScope,$scope,$state,GoogleMapInitService,$interval) {
  var swiper = new Swiper('.swiper-container');


  $interval(function()
  {
    console.log('passati 5 secondi');
  }, 5000);


 console.log('sono area controller');
 $scope.tab=1;

 $scope.template = "../views/home/user.html";




 GoogleMapInitService.then(function () {


 
});









};
