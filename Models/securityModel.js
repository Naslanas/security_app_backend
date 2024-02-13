const mongoose=require("mongoose")
const securitySchema=mongoose.Schema(
    {
        name:String,
        empid:String,
        address:String,
        phone:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("security",securitySchema)