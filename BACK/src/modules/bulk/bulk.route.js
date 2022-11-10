const multer = require("multer");
const { bulkUpload } = require("./bulk.controller");


const router = require("express").Router();
console.log(__dirname)
const Storage = multer.diskStorage({
    //location where uploaded file will be stored i.e. ./uploads
    destination:(req,file,cb)=>{
        cb(null,'upload');
    },
    //file name
    filename:(req,file,cb)=>{
       
        cb(null,file.originalname); 
    }
    
});

const uploads = multer({storage:Storage});

//

router.post("/product/bulk-add",uploads.single('file'),bulkUpload);

module.exports=router 