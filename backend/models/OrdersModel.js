const mongoose=require("mongoose");
const { model }=require("mongoose");
const {OrdersSchema}=require("../schemas/OrdersSchema");

const OrderModel=mongoose.model("order",OrdersSchema);

module.exports={OrderModel};