const {Schema,model} = require("mongoose");

const gigSchema = new Schema({
    userId:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    totalStars:{type:Number,default:0},
    starNumber:{type:Number,default:0},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    cover:{type:String, required:true},
    images:{type:[String],required:false},
    shortDesc:{type:String, required:true},
    shortTitle:{type:String, required:true},
    deliveryTime:{type:Number,required:true},
    revisionTime:{type:Number,required:true},
    features:{type:[String],required:true},
    sales:{type:Number, default:0}
    

},{ timestamps: true });

module.exports = model("Gig",gigSchema);