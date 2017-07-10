module.exports = function ( app ) {
    app.get('/detail_n', function (req, res) {
        var Not = global.models.getModel('notice');
        Not.find({}, function (error, docs) {
        res.render('detail_n',{Nots:docs});
        });
     });    
    app.get('/add_n', function(req, res) {
        res.render('add_n');
    });
    app.post('/add_n', function (req, res) {
        var Not = models.getModel('notice');
        Not.create({
            nId:req.body.nId,
            name: req.body.name,
            n_title: req.body.n_title,           
            createTime: req.body.createTime,
            description: req.body.description,
        }, function (error, doc) {
            if (doc) {
                res.send(200);
            }else{
                res.send(404);
            }
        });
    });
    
    // 删除公告
    app.get("/delFromNot/:id", function(req, res) {
        //req.params.id 获取项目ID号
        var Not = models.getModel('notice');
        Not.remove({"_id":req.params.id},function(error,doc){
            
            if(error) {
                console.log('error')
                return res.redirect('/index')
            }
            // console.log(doc);
            //成功返回1  失败返回0
            if(doc.result.ok === 1){
                console.log('hahaha')
                res.redirect('/detail_n');
            }
        });
    });     
      
}