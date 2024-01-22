const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://abhijeet:A9968263578a@cluster0.s5ysc1g.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    }
    catch {
        console.log(error);
    }
}

connect();


app.listen(8000, () => {
    console.log("server started on port 8000");
});