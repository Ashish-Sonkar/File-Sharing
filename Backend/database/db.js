const mongoose=require("mongoose")


async function dbConnection(){
    await mongoose.connect(process.env.DB_CONNECT_KEY)
}

module.exports=dbConnection