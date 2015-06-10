'use strict';

module.exports = function (app) {

    app.directive('tabs', ['$rootScope', '$timeout',
        function ($rootScope, $timeout) {
            return {
                restrict: 'E',
                scope : '=',
                link: function (scope, element) {

                    element.ready(function () {

                        var initTab = 0;
                        initTab = $rootScope[$rootScope.currentPage + '_tab'] =
                            $rootScope[$rootScope.currentPage + '_tab'] ? $rootScope[$rootScope.currentPage + '_tab'] : 0;

                        $timeout(function () {
                            $rootScope.currentTabState = $rootScope.currentPage + '_' + initTab;
                        }, 200);

                        var myTabs = new Swiper(element[0], {
                            speed: 400,
                            initialSlide: initTab,
                            allowSwipeToPrev: initTab === 0 ? false : true,
                            onSlideChangeStart: function (e) {
                                initTab = $rootScope[$rootScope.currentPage + '_tab'] = e.activeIndex;
                                $timeout(function () {
                                    $rootScope.currentTabState = $rootScope.currentPage + '_' + e.activeIndex;
                                }, 200);

                                this.allowSwipeToPrev = !e.isBeginning;
                                this.allowSwipeToNext = !e.isEnd;
                            }
                        });

                        scope.changeTab = function (tab) {




                            if (myTabs.activeIndex !== tab) myTabs._slideTo(tab);
                        };

                        $rootScope.$watch('currentTabState', function (currentTabState) {


                          if(currentTabState=='undefined_0')
                          {
                            $rootScope.title="user";
                          }
                          if(currentTabState=='undefined_1')
                          {
                            $rootScope.title="geolocalization";
                          }
                          if(currentTabState=='undefined_2')
                          {
                            $rootScope.title="history";
                          }
                          if(currentTabState=='undefined_3')
                          {
                            $rootScope.title="settings";
                          }



                          console.log(currentTabState);
                            if (currentTabState !== undefined
                                && $rootScope.currentTabState
                                && $rootScope.currentTabState.indexOf('home') !== -1
                                && $rootScope.currentPage === 'home') {
                                var currentStateNumber = currentTabState.replace('home_', '');
                                scope.changeTab(currentStateNumber);
                            }
                        });

                    });
                }
            };
        }
    ]);

};
