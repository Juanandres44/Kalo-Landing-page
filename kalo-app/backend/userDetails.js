const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
    {
        email:String,
        password:String,
        name:String,
        phoneNum: String,
        date: Date,
        country: String,
        englishLev: String,
        educLevel: String,
        educForm: String,
        skills: String,
        roles: String,
        expTime: String,
    },{
        collection:"UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailSchema);