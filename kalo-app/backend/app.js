const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json())

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

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
    const {
        email,
        password,
        name,
        phoneNum,
        date,
        country,
        englishLev,
        educLevel,
        educForm,
        skills,
        roles,
        expTime} = req.body;
    try {
        await User.create({
            email,
            password,
            name,
            phoneNum,
            date,
            country,
            englishLev,
            educLevel,
            educForm,
            skills,
            roles,
            expTime,
        });
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error2"})
    }
});