const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityRoute=require("./controllers/securityRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nasla:nasla1711@cluster0.f8gbros.mongodb.net/securityAppDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.use("/api/securityapp",securityRoute)

app.listen(3001,()=>{
    console.log("Server Running")
})