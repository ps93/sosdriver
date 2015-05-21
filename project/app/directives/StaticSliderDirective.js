'use strict';

module.exports = function (app) {

    app.directive('staticSlider', function () {
        return {
            restrict: 'E',
            link: function (scope, element) {

                element.ready(function () {

                    var myStaticSlider = new Swiper(element[0], {
                        speed: 2000,
                        autoplay: 2000,
                        loop: true,
                        autoplayDisableOnInteraction: false,
                        noSwiping: true,
                        effect: 'fade'
                    });

                });
            }
        };
    });

};
