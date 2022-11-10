const Product = require("../../../models/product")



//create product
exports.addProduct=(req,res,next)=>{
    console.log(req.body.brand)
   
    const url = req.protocol+"://"+req.get("host")+"/public/"+req.file.filename;

    const product=new Product({
       name:req.body.name,
       brand:req.body.brand,
       price:req.body.price,
       stock:req.body.stock,
       category:req.body.category,
        img:url
    })


    // console.log(req.body,"helo")
    product.save()
    // console.log("product added");
    res.status(200).json({
        message:"product added suceesfully",
        details:product
        
    })
    
}

//get all products
exports.getAllProducts = (req,res,next)=>{
    console.log(req.session);
    products=Product.find()
    .then((documents)=>{
        res.json(documents)
    })
 }

//update product -- admin

exports.updateProduct =(req, res,next)=> {
    const productId=req.params.id;
    // const url = req.protocol+"://"+req.get("host")+"/public/"+req.file.filename;
    Product.findByIdAndUpdate(productId,{name:req.body.name,stock:req.body.stock,price:req.body.price},{ new: true },(err,doc)=>{
        if(err){
            res.status(404).json({
                message:"No BOOK with this ID found !!! Check ID again"
            })
        }
        console.log(doc);
        res.status(200).json({
            message:"Product has been updated succesfully",
            updatedProduct:doc
        })
    })
}

//delete product
exports.deleteProduct =(req, res)=> {
    const bookId=req.params.id;
    console.log(bookId);

    Product.findByIdAndDelete(bookId,(err,docs)=>{
        if (err){
            res.status(404).json({
                message:"Product not Found!!!!"
            })
        }
        else{
            console.log("Deleted : ", docs);
            res.status(200).json({
                message:"Prodcut has been deleted succesfully",
                Deleted_product:docs
            })
        }
    })   

 } 

 exports.getProductById = (req,res,next)=>{
    
    Product.findOne({_id: req.params.id})
        .then(result => {
            res.status(200).json({
                product: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

