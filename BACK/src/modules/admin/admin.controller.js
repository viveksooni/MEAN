const User = require("../../../models/user")
const Admin = require("../../../models/admin");
const user = require("../../../models/user");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

//update user --admin
exports.updateUser = async(req,res,next)=>{
   const newUserData = {
    name:req.body.name,
    email:req.body.email,
    role:req.body.role
   };

   const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
    new:true,
    runValidators:true,
    useFindAndModify:false,
   });

   if(!user)
   {
       return next(res.status(400).json({message:`no user exists with id ${req.params.id}`}))
   }
   res.status(200).json({
    success:true,
    message:"updated"
   })
}


//delete user
exports.deleteUser =(req, res)=> {
    const userId=req.params.id;
    console.log(userId);

    User.findByIdAndDelete(userId,(err,docs)=>{
        if (err){
                res.status(404).json({
                    message:"No USER with this ID found !!! Check ID again"
               })
        }
        else{
            console.log("Deleted : ", docs);
            res.status(200).json({
                message:"User successfully deleted",
                user:docs
            })
        }
    })     
 }


// exports.adminLogin = (req,res,next)=>{
//     console.log("hiiiiiiii",req.body.userName,req.body.Password);
//     Admin.findOne({
//        username:req.body.userName,
//        password:req.body.Password,
       
//     }).then(user=>{
//         if(!user){
//            console.log("no user found");
//             res.status(200).json({
//                 message:"user not found",
//                 loginstatus:false
//             })
//         }  else{
//            console.log("succesfully loggedin");
//            console.log(user);
//            console.log(user.password,user.liked,user.type,user._id);
//            req.session.loggedIn=true 
//            res.locals.username = req.body.username
//            res.locals._id = user._id 
//            res.locals.type = user.type  
//            console.log(req.body._id);
//            next()
//            res.status(200).json({
//                message:"succesfully logged  in",
//                details:user,
//                loginstatus:true
//            })
//        }
//     })
// }

// -------------------------
exports.adminLogin = async (req,res,next)=>{
    console.log("in login api")
    try {
        const username=req.body.userName;
        const password=req.body.Password
      if (!(username && password)) {
        res.status(400).send("All input is required");
      }
      const admin = await Admin.findOne({ username });
      if (admin && (await bcrypt.compare(password, admin.password))) {
        const token = jwt.sign(
          { admin_id: admin._id},
          "this_is_secret_key",
          {
            expiresIn: "2h",
          }
        );
        admin.token = token;
        console.log(admin.token)
        res.status(200).json({
            message:"succesfully logged  in",
            details:admin,
            loginstatus:true
        })
      }
      else{
      res.status(200).json({
        message:"invalid user ",
        details:admin,
        loginstatus:false
    })}
    } catch (err) {
      console.log(err);
    }
  };

// -----------------------
exports.loginSession=(req,res)=>
{
req.session.loggedIn = true
req.session.username = res.locals.username
req.session.ID = res.locals._id.toString()
req.session.type=res.locals.type
console.log(req.session)
}

// exports.adminSignup =(req,res,next)=>{
//     const newAdmin= new Admin({
//        username:req.body.userName,
//        password:req.body.Password,
//        type:"Admin"
      
//     })
//     newAdmin.save()
//     res.status(200).json({
//        message:"Admin succesfully added",
//        Admin:newAdmin
//     })
// }

// ------------------------------

exports. adminSignup =async (req,res,next)=>{
    try {
    //   const { first_name, last_name, email, password } = req.body;
        const username=req.body.userName
       const password=req.body.Password
       const email=req.body.Email
      encryptedPassword = await bcrypt.hash(password, 10);
      const newAdmin = await Admin.create({
        username:username,
        email: email.toLowerCase(), 
        password: encryptedPassword,
      });
      res.status(200).json({
               message:"Admin succesfully added",
                Admin:newAdmin
             })
    } catch (err) {
      console.log(err);
    }
  }
// ------------------------------------------------
exports.addUser = (req,res,next)=>{
    const newUser= new User({
        username:req.body.username,
        password:req.body.password,
        type:"User"
        
     })
     newUser.save()
     res.status(200).json({
        message:"User succesfully added",
        User:newUser
        
     })

 }