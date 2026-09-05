const mongoose=require("mongoose")
const {Schema}=mongoose

const fileSchema=new Schema({
    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    downloadContent:{
        type:Number,
        required:true,
        default:0
    }
})

const File=mongoose.model("file",fileSchema)

module.exports=File