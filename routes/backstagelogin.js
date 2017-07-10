module.exports = function ( app ) {
    app.get('/backstagelogin', function(req, res){
        
        res.render('backstagelogin');
    })
}