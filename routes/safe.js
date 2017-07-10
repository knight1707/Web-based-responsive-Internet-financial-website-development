module.exports = function ( app ) {
    app.get('/safe', function(req, res){
        
        res.render('safe');
    })
}