const express=require('express');
const router=express.Router()
router.get('/comment',(req,res)=>{
    res.send("comments");
})
module.exports=router;