'use strict';

module.exports = function (app) {

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider




                        //////////////////////////////////////////////
                          ///////////// HEDARMENUSLIDER /////////////////
                          ////////////////////////////////////////////
                          .state('headermenuslider', {
                            parent: 'base',
                              template: require('../partials/headermenuslider.html')
                          })


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
                      //////////////// USER AREA ////////////////
                      ////////////////////////////////////////////
                      .state('userArea', {
                          url: '/userArea/:pat',
                          parent: 'base',
                          template: require('../views/home/userArea.html'),
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


                      ///////////////////////////////////////////////////////////
                        /////////////////// RIGISTRATION LICENSE ////////////////
                        /////////////////////////////////////////////////////////
                        .state('registrationlicense', {

                                                  url: '/licence',
                                                  template: require('../views/home/registrationlicense.html'),
                                                  controller: 'registrationLicenseController',
                                                  resolve: {
                                                      load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                                          var deferred = $q.defer();
                                                          require.ensure([], function () {
                                                              $ocLazyLoad.load({name: 'app.registrationLicence'});
                                                              deferred.resolve(require('../controllers/userArea'));
                                                          });
                                                          return deferred.promise;
                                                      }]
                                                  }
                                              })




                      //////////////////////////////////////////////
                        //////////////// DRIVER ////////////////
                        ////////////////////////////////////////////
                        .state('driver', {
                            url: '/driver/:id',

                            template: require('../views/drivers/driver.html'),
                            controller: 'DriverController',
                            resolve: {
                                load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                    var deferred = $q.defer();
                                    require.ensure([], function () {
                                        $ocLazyLoad.load({name: 'app.driver'});
                                        deferred.resolve(require('../controllers/drivers'));
                                    });
                                    return deferred.promise;
                                }]
                            }
                        })



                        //////////////////////////////////////////////
                          //////////////// DRIVER ////////////////
                          ////////////////////////////////////////////
                          .state('booking', {
                              url: '/booking/:id',

                              template: require('../views/drivers/booking.html'),
                              controller: 'BookingController',
                              resolve: {
                                  load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                      var deferred = $q.defer();
                                      require.ensure([], function () {
                                          $ocLazyLoad.load({name: 'app.booking'});
                                          deferred.resolve(require('../controllers/drivers'));
                                      });
                                      return deferred.promise;
                                  }]
                              }
                          });


        }
    ]);




    console.log(app);

};
