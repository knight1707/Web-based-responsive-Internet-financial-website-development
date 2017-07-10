module.exports = function ( app ) {
    app.get('/forus', function(req, res){
        
        res.render('forus');
    })
    app.get('/team', function(req, res) {
        res.render('team');
    });
    app.get('/partner', function(req, res) {
        res.render('partner');
    });
    app.get('/notice', function (req, res) {
        var Not = global.models.getModel('notice');
        Not.find({}, function (error, docs) {
        res.render('notice',{Nots:docs});
        });
     });  
    app.get('/develop', function(req, res) {
        res.render('develop');
    });
    app.get('/contact', function(req, res) {
        res.render('contact');
    });
    app.get('/join', function(req, res) {
        res.render('join');
    });
}