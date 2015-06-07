module.exports = function (app) {
    require('./routes')(app);
    require('./run')(app);
    require('./language')(app);

};
