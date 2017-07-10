const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const models = {
        user: {
            name: { type: String, required: true },
            password: { type: String, required: true },
            tel:{type: String, required:false}
        },
        notice:{
            nId: String,
            name: String,
            n_title: String,
            createTime: String,
            description: String
        },
        pro:{
           pId: String,
           name: String,
           period: String,
           profit: String,
           gvm: String,
           cate: String
        },
        account: {
           uId: { type: String },
           aId: { type: String },
           a_name: { type: String },
           a_period: { type: String },
           a_profit: { type:String },
           a_gvm: { type: String },
           a_cate: { type:String } ,
           a_Quantity: { type: Number },
           a_Status : { type: Boolean, default: false  }
        }
    };

for (var m in models) {
    mongoose.model(m, new Schema(models[m]));
}

var _getModel = function (type) {
    return mongoose.model(type);
};
 
//导出
module.exports = {
    getModel: function (type) {
        return _getModel(type);
    }
};
