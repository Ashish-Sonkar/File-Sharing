const express=require("express")
const router=express.Router()
const {uploadImage}=require("../controller/image-controller.js")
const upload=require("../utils/upload.js")
const {downloadImage}=require("../controller/image-controller.js")

router.post("/upload",upload.single("file"),uploadImage)
router.get("/file/:fileId",downloadImage)

module.exports=router


