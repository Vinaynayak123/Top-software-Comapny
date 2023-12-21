const mongoose = require("mongoose")


// Connect to MongoDB
async function dbConnect(){
    mongoose.connect("mongodb://127.0.0.1:27017/Datas")
    .then(()=> console.log("Mongodb Connect"))
    .catch((err)=> console.log("Mongo Error", err))
}

module.exports = dbConnect;