'use strict';

module.exports = function ($rootScope, $scope, $state) {
  var swiper = new Swiper('.swiper-container');


 console.log('sono area controller');


  $scope.goToTab = function(tab){


    console.log(tab);

    if(tab==1)
      $scope.tab=1;
    if(tab==2)
      $scope.tab=2;
    if(tab==3)
      $scope.tab=3;
    if(tab=4)
      $scope.tab=4;


  };


  $scope.prova = function(){


    console.log('funge');


  };


};
