const {Schema,model} = require("mongoose");

const UserSchema = new Schema({
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    img:{type:String, required:false},
    country:{type:String, required:true},
    phone:{type:String, required:true},
    description:{type:String},
    isSeller:{type:Boolean, default:false},

},{ timestamps: true });

module.exports = model("User",UserSchema);