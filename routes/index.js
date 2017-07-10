module.exports = function ( app ) {
    require('./login')(app);
    require('./invest')(app);
    require('./logout')(app);
    require('./register')(app);
    require('./account')(app);
    // require('./notice')(app);
    require('./forus')(app);
    require('./guide')(app);
    require('./safe')(app);
    require('./appload')(app);
    require('./backstagelogin')(app);
    require('./detail_e')(app);
    require('./detail_n')(app);
    require('./detail_u')(app);
    app.get('/index', function(req, res){   
        res.render('index');
    })
};
