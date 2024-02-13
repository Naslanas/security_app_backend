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

router.post("/loginsecurity",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await securityModel.findOne({"email":email})
    if(!data){
        return res.json(
            {
                status:"Invalid EmailId"
            }
        )
    }

    let dbPassword=data.password
    let inputPassword=req.body.password
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        return res.json({
            status:"Invalid password"
        })
    }
    res.json({
        status:"success"
    })
})

module.exports=router