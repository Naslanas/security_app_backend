const mongoose=require("mongoose")
const visitorSchema=mongoose.Schema(
    {
        name:String,
        address:String,
        phone:String,
        purpose:String
    }
)

module.exports=mongoose.model("visitor",visitorSchema)