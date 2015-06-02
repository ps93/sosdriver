'use strict';

module.exports = function (app) {

    app.directive('defineArea', ['$rootScope',
        function ($rootScope) {
            return {
                restrict: 'A',
                scope: {
                    typeArea: '@'
                },
                link: function (scope, element) {

                    element.ready(function () {

                        if (scope.typeArea === 'withHeaderFooterTabHome') {
                            document.querySelector('.swiper-container')
                                .setAttribute('style', 'height:' + $rootScope.deviceData.withHeaderFooterTabHome + 'px;');

                            document
                                .querySelector('.mioDiv')
                                .setAttribute('style', 'margin-top:' + $rootScope.deviceData.header + 'px;');


                            [].forEach.call(document.querySelectorAll('.swiper-slide'), function (item) {
                                item.setAttribute('style', 'height:' + $rootScope.deviceData[scope.typeArea] + 'px;');
                            });

                        }



                    });
                }
            };
        }
    ]);

};
