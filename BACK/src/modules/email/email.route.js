const router = require("express").Router();
const {sendMail}=require('./email.controller')


router.post("/sendmail",sendMail)


module.exports = router;