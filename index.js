const express=require('express');
const app=express();
const userroute=require('./routes/users');
const commentroute=require('./routes/comments');
const middleware=(req,res,next)=>{
    console.log("middleware");
    next();
}
app.use('/users',middleware,userroute);
app.use('/comments',commentroute);
app.listen(2000,()=>console.log("server is listening"));