const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: true, 
        },
        email:{
            type: String,
            require: true,
        },
        phone:{
            type: Number,
            require: true,
        },
        password:{
            type: String,
            require: true
        }
    },
    {
        timestamps:true,
    }
)

const UserInfo = mongoose.model("User",userSchema);
module.exports = UserInfo;