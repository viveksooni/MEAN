const multer = require("multer");
const path = require("path")
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProduct, addProduct, getProductById } = require("./product.controller");

const router = require("express").Router();
// console.log(__dirname)
const Storage = multer.diskStorage({
    //location where uploaded file will be stored i.e. ./uploads
    destination:(req,file,cb)=>{
        
        // cb(null,'upload');
        cb(null,'upload')
    },
    //file name
    filename:(req,file,cb)=>{
    //    console.log("name of the :",req.body.name);
        cb(null,req.body.name+path.extname(file.originalname)); 
    }
    
});

const uploads = multer({storage:Storage});

//

router.post("/product/add",uploads.single('file'),addProduct);
router.get("/product/all",getAllProducts);
router.post("/product/update/:id",uploads.single('file'),updateProduct);
router.delete("/product/delete/:id",deleteProduct)
router.get("/product/:id",getProductById)
module.exports=router 