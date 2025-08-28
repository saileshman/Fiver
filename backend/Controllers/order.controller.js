const orderModel = require("../Model/order.model");


const Order = (req,res)=>{
    res.send("hello i an order from controller")
}



module.exports = {Order};