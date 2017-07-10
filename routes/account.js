module.exports = function ( app ) {
    //查看投标项目
    app.get('/account', function(req, res) {
        var Aut = global.models.getModel('account');
        if(!req.session.user){
            req.session.error = "请登录后进行操作"
            res.redirect('/login');
        }else{
            Aut.find({"uId":req.session.user._id,"a_Status":false}, function (error, docs) {
                res.render('account',{accounts:docs});
            })
        }
    });
    //添加投资项目
    app.get("/addToAut/:id", function(req, res) {
       //req.params.id 获取项目ID号
        if(!req.session.user){
            req.session.error = "用户已过期，请重新登录:"
            res.redirect('/login');
        }else{
            var Pro = models.getModel('pro'),
                Aut = models.getModel('account');
            Aut.findOne({"uId":req.session.user._id, "aId":req.params.id},function(error,doc){
                //项目已存在 +1
                if(doc){
                    Aut.update({"uId":req.session.user._id, "aId":req.params.id},{$set : { a_Quantity : doc.a_Quantity + 1 }},function(error,doc){
                        //成功返回1  失败返回0
                        if(doc.result > 0){
                            // console.log('投标成功');
                            res.redirect('/invest');
                            
                        }
                    });
                //项目不存在，添加
                }else{
                    Pro.findOne({"_id": req.params.id}, function (error, doc) {
                        if (doc) {
                            Aut.create({
                                uId: req.session.user._id,
                                aId: req.params.id,
                                a_name: doc.name,
                                a_period: doc.period,
                                a_profit: doc.profit,
                                a_gvm: doc.gvm,
                                a_cate: doc.cate,
                                a_Quantity : 1
                            },function(error,doc){
                                if(doc){
                                    console.log('投标成功');
                                    res.redirect('/account');
                                }
                            });
                        } else {

                        }
                    });
                }
            });
        }
    });

    //删除购物车商品
    app.get("/delFromAut/:id", function(req, res) {
        //req.params.id 获取项目ID号
        var Aut = models.getModel('account');
        Aut.remove({"_id":req.params.id},function(error,doc){
            
            if(error) {
                console.log('error')
                return res.redirect('/index')
            }
            // console.log(doc);
            //成功返回1  失败返回0
            if(doc.result.ok === 1){
                console.log('hahaha')
                res.redirect('/account');
            }
        });
    });   
}

