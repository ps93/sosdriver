
/* LOAD ANGULAR DEPENDENCIES */
require('angular');
require('ocLazyLoad');
require('angular-ui-router');
require('angular-touch');
require('ionic');
require('swiper');


/* LOAD CSS */
require('css/common.css');
require('css/views/splashscreen.css');
require('css/views/prehome.css');
require('css/lib/ionic/css/ionicons.css');
require('css/lib/ionic/css/ionic.css');
require('css/tabs.css');



/* WIDGETS */
require('css/widgets/swiper.css');

var app = angular.module('app', [
        'oc.lazyLoad',
        'ui.router',
        'ngTouch',
        'ngLocale',
        'ionic'
    ]
);



var widthDevice = document.querySelector('html').clientWidth;
var heightDevice = document.querySelector('html').clientHeight;

app.constant('COMPONENTS_VALUES', {
    width: widthDevice,
    height: heightDevice,
    header: 50,
    wizard: 50,
    tabs: 50,
    footer: 40,
    paddingTopHeader: 0,
    backHomeButton: 20,
    backShareButton: 0,
    withHeader: heightDevice - 50,
    withBackButtonFooter: heightDevice - 150,
    withTitleHeader: widthDevice - 160,//todo da cambiare nella versione ios
    withHeaderButtonTabWizard: heightDevice - 144,
    withHeaderTabWizard: heightDevice - 100,
    withHeaderFooterTabHome: heightDevice - 50,
    withHeaderButtonFooter: heightDevice - 94
});

app.constant('SANITRANSPORT',"http://sanitrasport.esy.es/");


require('../config')(app);
require('../directives')(app);


angular.bootstrap(document.body, ['app']);
