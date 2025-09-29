let express= require('express');
let router= express.Router();
//start creating the end points

router.get('/home',(req,res)=>{
    res.send("home page");
})

router.get('/login',(req,res)=>{
    res.send("login page");
})

module.exports = router;