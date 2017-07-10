var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var path = require('path');
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.json());
app.use(express.static('www'));
app.use(bodyParser.urlencoded({extended:true}));
// 设置过期时间
app.use(session({secret:'secret',cookie:{maxAge:8000*60*1}}));
global.models = require('./mongoose');
global.db = mongoose.connect("mongodb://127.0.0.1:27017/knight_website");


app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});

require('./routes')(app);
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000,()=>console.log('正在运行中...'));
