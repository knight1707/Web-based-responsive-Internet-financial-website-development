module.exports = function ( app ) {
    app.get('/invest', function (req, res) {
        var Pro = global.models.getModel('pro');
        Pro.find({}, function (error, docs) {
        res.render('invest',{Pros:docs});
        });
     });    
}