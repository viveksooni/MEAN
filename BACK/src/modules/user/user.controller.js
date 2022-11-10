const User = require("../../../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
//handle errors
const handleErrors = (err)=>{
    console.log(err.message,err.code)
    let error = {email:'',password:''}

    if(err.code ===11000)
    {
        error.email= 'email already exists'
        return error;
    }

    if(err.message==='incorrect email')
    {
        error.email = 'not registered email'

    }
    if(err.message==='incorrect password')
    {
        error.password = 'password is not correct';
        
    }
    if(err.message.includes('user validation failed')){
        console.log(Object.values(err.errors).forEach(({properties})=>{
            error[properties.path]=properties.message;
        }));

       
    }
    return error;
}



const maxAge = 2*24*60*60;


//Register a User 
// exports.registerUser = (req,res,next)=>{
//     const newUser= new User({
//        username:req.body.userName,
//        password:req.body.Password,
//        email:req.body.Email,
//        phoneno:req.body.Phone,
//        type:"User"
       
//     })
//     newUser.save()
//     res.status(200).json({
//        message:"User succesfully added",
//        User:newUser
       
//     })
// }
// -----------------------
exports.registerUser =async (req,res,next)=>{
    try {
    const username=req.body.userName
    const password=req.body.Password
    const email=req.body.Email
    const phoneno=req.body.Phone
    const type="User"
    encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username:username,
        email: email.toLowerCase(), 
        password: encryptedPassword,
        phoneno:phoneno,
        type:type
      });
      res.status(200).json({
               mmessage:"User succesfully added",
               User:newUser
             })
    } catch (err) {
      console.log(err);
    }
  }
// --------------------------

//login user(done)
// exports.loginUser = (req,res,next)=>{
//     console.log(req.body.userName,req.body.Password)
//     User.findOne({
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
//            res.status(200).send({
//                message:"succesfully logged in",
//                details:user,
//                loginstatus:true
//            })
//        }
//     })
// }

// --------------
exports.loginUser = async (req,res,next)=>{
    console.log("in login api")
    try {
        const username=req.body.userName;
        const password=req.body.Password
      if (!(username && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ username });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id},
          "this_is_secret_key",
          {
            expiresIn: "2h",
          }
        );

        res.status(200).json({
            message:"succesfully logged  in",
            details:user,
            loginstatus:true,
            Token:token
        })
      }
      else{
      res.status(200).json({
        message:"invalid user ",
        details:user,
        loginstatus:false,
    })}
    } catch (err) {
      console.log(err);
    }
  };
// ----------


exports.logout =(req,res,next)=>{
    req.session.destroy();
    res.status(201).json({
        message:"Succesfully logged out",
        details:{
            "username":req.body.username
        }
    })
}

//get user by id
exports.getUserById =(req,res,next)=>{
    
    User.findOne({_id: req.params.id})
        .then(result => {
            res.status(200).json({
                user: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


exports.getAllUsers = (req,res,next)=>{    
    users=User.find()
    .then((documents)=>{
        console.log(documents);
        res.json(documents)
    })
    
 }