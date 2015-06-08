
/* LOAD ANGULAR DEPENDENCIES */
require('angular');
require('ocLazyLoad');
require('angular-ui-router');
require('angular-touch');
require('ionic');
require('swiper');
require('angular-local-storage');
require('../../lib/ui-bootstrap-custom-tpls-0.12.0');
require('../../../bower_components/angular-dynamic-locale/dist/tmhDynamicLocale');
require('angular-translate');


/* LOAD CSS */
require('css/common.css');
require('css/views/splashscreen.css');
require('css/views/prehome.css');
require('css/lib/ionic/css/ionicons.css');
require('css/lib/ionic/css/ionic.css');
require('css/tabs.css');
require('css/lib/inputEffects/css/demo.css');
require('css/lib/inputEffects/css/normalize.css');
require('css/lib/inputEffects/css/set1.css');
require('css/lib/inputEffects/fonts/font-awesome-4.2.0/css/font-awesome.min.css');
require('css/views/map.css');


/* WIDGETS */
require('css/widgets/swiper.css');
require('css/widgets/panel.css');

var app = angular.module('app', [
        'oc.lazyLoad',
        'ui.router',
        'ngTouch',
        'ngLocale',
        'ionic',
        'LocalStorageModule',
      'tmh.dynamicLocale',
      'ui.bootstrap',
      'pascalprecht.translate'
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

app.constant('SANITRANSPORT',"http://sosdriver.esy.es/");


require('../config')(app);
require('../directives')(app);
require('../services')(app);


angular.bootstrap(document.body, ['app']);
