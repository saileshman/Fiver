const {Schema,model} = require("mongoose");

const messageSchema = new Schema({
   conversationId:{type:String,required:true},
   userId:{type:String,required:true},
   description:{type:String,required:true}

},{ timestamps: true });

module.exports = model("message",messageSchema);