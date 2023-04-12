const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json())

const mongoUrl = "mongodb+srv://juanansantiago2000:247JASjunio30@cluster0.9mggoap.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(() => {console.log("Connected to database");})
.catch(e=>console.log(e));

app.listen(5000,()=>{
    console.log("Server started");
})

 app.post("/post", async(req,res)=>{
    console.log(req.body);
    const {data} = req.body;

    try{
        if(data=="jaja"){
            res.send({status:"ok"})
        }
        else{
            res.send({status:"user not found"})
        }

    }catch(error){
        res.send({status:"error"})
    }
 });

 require("./userDetails");

 const User = mongoose.model("UserInfo");

 app.post("/register", async(req,res) => {
    const { name, email, mobileNum } = req.body;
    try {
        await User.create({
            username:name,
            email: email,
            phoneNum: mobileNum
        });
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error2"})
    }
 });