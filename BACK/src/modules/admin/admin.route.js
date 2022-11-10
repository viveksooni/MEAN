const router = require("express").Router();

const {getAllUser, getUser, deleteUser, updateUser, adminLogin, adminSignup, addUser, loginSession } = require("./admin.controller");


//admin CURD on user routes
router.post("/adminlogin",adminLogin,loginSession);
router.post("/admin/signup",adminSignup);


// router.get("/user/all",getAllUser);
router.delete("/user/delete/:id",deleteUser);
router.post("/adduser",addUser);

module.exports = router