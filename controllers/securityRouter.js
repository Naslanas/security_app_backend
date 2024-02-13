const express=require("express")
const securityModel = require("../Models/securityModel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator = async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/regsecurity",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword

    let security=new securityModel(data)
    let result=await security.save()
    res.json({
        status:"success"
    })
})



module.exports=router