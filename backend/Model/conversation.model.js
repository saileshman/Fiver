const {Schema,model} = require("mongoose");

const conversationSchema = new Schema({
   id:{type:String,required:true,unique:true},
   sellerId:{type:String,required:true},
   buyerId:{type:String,required:true},
   readBySeller:{type:Boolean, default:false},
   readByBuyer:{type:Boolean, default:false},
   lastMessage:{type:String,required:false},

},{ timestamps: true });

module.exports = model("Conversation",conversationSchema);