const { userSchema }=require("../schemas/SignUpSchema.js");
const mongoose=require("mongoose");
module.exports = mongoose.model("User", userSchema);