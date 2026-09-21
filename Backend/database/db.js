const mongoose=require("mongoose")


async function dbConnection(){
    await mongoose.connect(process.env.DB_CONNECT_KEY)
    // await mongoose.connect("mongodb://ashishsonkar3452_db_user:Ashish%40123@ac-zr8omab-shard-00-00.bzhusry.mongodb.net:27017,ac-zr8omab-shard-00-01.bzhusry.mongodb.net:27017,ac-zr8omab-shard-00-02.bzhusry.mongodb.net:27017/?ssl=true&replicaSet=atlas-5mgfo3-shard-0&authSource=admin&appName=Coding/File-Sharing")
}

// dbConnection()
// .then(()=>console.log("db connected"))
// .catch((err)=>console.log("Error"+err.message))

module.exports=dbConnection 

// const dns = require('dns');

// dns.resolveSrv('_mongodb._tcp.coddingadda.ce8o9vp.mongodb.net', (err, addresses) => {
//   if (err) {
//     console.error('DNS SRV resolution failed on this system:', err);
//   } else {
//     console.log('DNS SRV resolved successfully:', addresses);
//   }
// });