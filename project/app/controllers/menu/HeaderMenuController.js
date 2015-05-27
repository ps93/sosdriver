'use strict';

module.exports = function ($rootScope, $scope, $state) {
  var swiper = new Swiper('.swiper-container');


 console.log('sono area controller');


  $scope.goToTab = function(tab){


    console.log(tab);

    if(tab==1)
      $state.go('user');


  };


  $scope.prova = function(){


    console.log('funge');


  };


};
