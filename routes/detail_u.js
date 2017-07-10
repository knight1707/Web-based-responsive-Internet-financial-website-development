module.exports = function ( app ) {
    app.get('/detail_u', function (req, res) {
        var  User = global.models.getModel('user');
        User.find({}, function (error, docs) {
        res.render('detail_u',{Users:docs});
        });
     });    
      
}