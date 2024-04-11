const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = "mongodb://127.0.0.1:27017/xyz"
// const uri = "mongodb+srv://tanmaysontakke99:EYMMEaKEG8O2phOP@mycluster.2f1acsn.mongodb.net/?retryWrites=true&w=majority&appName=myClusterz"
const USER_ROUTER = require("./routers/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());
// routes
app.use("/User",USER_ROUTER);

async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

connect();
app.listen(5000, ()=>{
    console.log('App is running on: http://localhost:5000');
})