'use strict';

module.exports = function ($rootScope, $scope, $state,$http,SANITRANSPORT) {
  var swiper = new Swiper('.swiper-container');
  

 console.log('sono area controller');


  $scope.goToTab = function(tab){


    console.log(tab);


  };


  $scope.prova = function(){


    console.log('funge');


  };


};
