module.exports = function (app) {


    require('./StaticSliderDirective')(app);
    require('./TabsDirective')(app);
    require('./LoadTemplates')(app);
};
