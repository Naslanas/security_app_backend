const express=require("express")
const visitorModel = require("../Models/visitorModel")

const router=express.Router()

router.post("/addvisitor",async(req,res)=>{
    let data=req.body
    let visitor=new visitorModel(data)
    let result=await visitor.save()
    res.json(
        {
            status:"success"
        }
    )
})

module.exports=router