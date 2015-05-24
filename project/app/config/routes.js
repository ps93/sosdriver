'use strict';

module.exports = function (app) {
  var a =5;
    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
          console.log("sisisisisisisisisisisisi");
 a =6;
            $urlRouterProvider.otherwise('/');

            $stateProvider



            //////////////////////////////////////////////
            ///////////////// SPLASHSCREEN //////////////
            ////////////////////////////////////////////
            .state('splashscreen', {
              parent: 'headermenuslider',
                url: '/',
                template: require('../views/splashscreen/splashscreen.html'),
                controller: 'SplashscreenController',
                resolve: {
                        load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            var deferred = $q.defer();
                            require.ensure([], function () {
                                $ocLazyLoad.load({name: 'app.splashscreen'});
                                deferred.resolve(require('../controllers/splashscreen'));
                            });
                            return deferred.promise;
                        }]
                    }
            })


            //////////////////////////////////////////////
              ///////////// REGISTRATION /////////////////
              ////////////////////////////////////////////


            .state('registration', {
                url: '/Registration',
                template: require('../views/home/registration.html'),
                controller: 'registrationController',
                resolve: {
                        load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            var deferred = $q.defer();
                            require.ensure([], function () {
                                $ocLazyLoad.load({name: 'starter'});
                                deferred.resolve(require('../controllers/registration'));
                            });
                            return deferred.promise;
                        }]
                    }
            })



            //////////////////////////////////////////////
            ///////////////// LOGIN ////////////////////
              ////////////////////////////////////////////


            .state('login', {
                url: '/login',
                template: require('../views/home/login.html'),
                controller: 'loginController',
                resolve: {
                        load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            var deferred = $q.defer();
                            require.ensure([], function () {
                                $ocLazyLoad.load({name: 'starter'});
                                deferred.resolve(require('../controllers/login'));
                            });
                            return deferred.promise;
                        }]
                    }
            })




            //////////////////////////////////////////////
              /////////////////// HEADERS /////////////////
              ////////////////////////////////////////////
              .state('headermenuslider', {
                parent: 'base',
                  template: require('../partials/headermenuslider.html')
              })


              .state('base', {
                    template: '<ui-view></ui-view>',

                })


                //////////////////////////////////////////////
                  /////////////////// PRE HOME ////////////////
                  ////////////////////////////////////////////
                  .state('prehome', {
                      parent: 'headermenuslider',
                      url: '/prehome',
                      template: require('../views/prehome/prehome.html'),
                      controller: 'PrehomeController',
                      resolve: {
                          load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                              var deferred = $q.defer();
                              require.ensure([], function () {
                                  $ocLazyLoad.load({name: 'app.prehome'});
                                  deferred.resolve(require('../controllers/prehome'));
                              });
                              return deferred.promise;
                          }]
                      }
                  })



                  //////////////////////////////////////////////
                    //////////////// HEADERMENU ////////////////
                    ////////////////////////////////////////////
                    .state('headerMenu', {
                        url: '/myarea',
                        template: require('../views/partials/headermenu.html'),
                        controller: 'UserAreaController',
                        resolve: {
                            load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                var deferred = $q.defer();
                                require.ensure([], function () {
                                    $ocLazyLoad.load({name: 'app.userArea'});
                                    deferred.resolve(require('../controllers/userArea'));
                                });
                                return deferred.promise;
                            }]
                        }
                    })


                    //////////////////////////////////////////////
                      //////////////// HEADERMENU ////////////////
                      ////////////////////////////////////////////
                      .state('person', {
                          url: '/person',
                          parent:'headerMenu',
                          template: require('../views/home/person.html'),
                          controller: 'PersonController',
                          resolve: {
                              load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                  var deferred = $q.defer();
                                  require.ensure([], function () {
                                      $ocLazyLoad.load({name: 'app.userArea'});
                                      deferred.resolve(require('../controllers/userArea'));
                                  });
                                  return deferred.promise;
                              }]
                          }
                      })




        }
    ]);




    console.log(app);

};
