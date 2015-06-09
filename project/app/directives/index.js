module.exports = function (app) {


    require('./StaticSliderDirective')(app);
    require('./TabsDirective')(app);
    require('./LoadTemplates')(app);
    require('./PanelMapMarkersDirective')(app);
    require('./DefineAreaDirective')(app);
    require('./GoogleHotelMap')(app);
};
