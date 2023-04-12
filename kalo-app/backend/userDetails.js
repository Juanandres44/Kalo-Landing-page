const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
    {
        username:String,
        email:String,
        phoneNum:String,
    },{
        collection:"UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailSchema);