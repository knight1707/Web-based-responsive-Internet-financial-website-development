module.exports = function ( app ) {
    app.get('/appdload', function(req, res){
        
        res.render('appdload');
    })
}