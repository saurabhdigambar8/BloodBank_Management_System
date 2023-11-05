const mongoose = require('mongoose')
const colors = require('colors')

const dbConnect=async function(){
   try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`MONGODB IS CONNECT ${mongoose.connection.host}`);
   }
   catch(error){
    console.log(`mongodb error: ${error}`.bgRed.white);
   }
}
module.exports={dbConnect}