module.exports = function ( app ) {
    app.get('/detail_e', function (req, res) {
        var Pro = global.models.getModel('pro');
        Pro.find({}, function (error, docs) {
        res.render('detail_e',{Pros:docs});
        });
     });    
    app.get('/add_e', function(req, res) {
        res.render('add_e');
    });
    app.post('/add_e', function (req, res) {
        var Pro = models.getModel('pro');
        Pro.create({
            pId:req.body.name,
            name: req.body.name,
            period: req.body.period,           
            profit: req.body.profit,
            gvm: req.body.gvm,
            cate: req.body.cate
        }, function (error, doc) {
            if (doc) {
                res.send(200);
            }else{
                res.send(404);
            }
        });
    });
    //删除项目
    app.get("/delFromPro/:id", function(req, res) {
        //req.params.id 获取项目ID号
        var Pro = models.getModel('pro');
        Pro.remove({"_id":req.params.id},function(error,doc){
            
            if(error) {
                console.log('error')
                return res.redirect('/index')
            }
            // console.log(doc);
            //成功返回1  失败返回0
            if(doc.result.ok === 1){
                console.log('hahaha')
                res.redirect('/detail_e');
            }
        });
    });     
     
      
}