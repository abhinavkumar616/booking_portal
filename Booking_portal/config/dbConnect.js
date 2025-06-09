const mongoose=require("mongoose")
require('dotenv').config();

async function getData(){

    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connection is stablished");
    }   
    catch(error){
        console.log("Error",error);
    }

}
getData()