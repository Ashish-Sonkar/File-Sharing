const File=require("../models/file.js")

const uploadImage=async (req,res)=>{
    const fileObj={
        path:req.file.path,
        name:req.file.originalname
    }
    try{
        const file=await File.create(fileObj)
        res.status(200).json({path:`http://localhost:4000/file/${file._id}`})
    }
    catch(err){
        console.error(err.message)
        res.status(500).json({error:error.message})
    }
}

const downloadImage=async (req,res)=>{
    try{
        const file=await File.findById(req.params.fileId)

        file.downloadContent++

        await file.save()

        res.download(file.path,file.name)
    }
    catch(err){
        console.error(error.message)
        return res.status(500).json({error:error.message})
    }
}

module.exports={uploadImage,downloadImage}