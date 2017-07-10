module.exports = function ( app ) {
    app.get('/guide', function(req, res){
        
        res.render('guide');
    })
}