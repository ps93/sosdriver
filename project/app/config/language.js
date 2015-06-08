'use strict';

module.exports = function (app) {

    app.config(['$translateProvider', 'tmhDynamicLocaleProvider',
        function ($translateProvider, tmhDynamicLocaleProvider) {

            tmhDynamicLocaleProvider.localeLocationPattern('./languages/angular-locale_{{locale}}.js');

            $translateProvider
                .translations('gb', require('../../languages/gb'))
                .translations('it', require('../../languages/it'))
                .useSanitizeValueStrategy('escaped')
                .preferredLanguage('it');
        }

    ]);

};
