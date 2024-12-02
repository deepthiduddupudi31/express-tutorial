const express=require('express');
const app=express();
const logger=require('./logger');
app.use(logger);
const middleware1=((req,res,next)=>{
    req.name="deepu";
    console.log("middleware1");
    next();
})
const middleware2=((req,res,next)=>{
    console.log("middleware2");
    next();
})
const middleware3=((req,res,next)=>{
    console.log("middleware3");
    next();
})
app.use('/users',middleware1);
app.use(['/users','/comments'],middleware2);
app.use('/comments',middleware3);


app.get('/users',(req,res)=>{
    console.log(req.name)
    res.end("users");
})
app.get('/comments',(req,res)=>{
    res.send("comments");
})
app.listen(5959,()=>{
    console.log("server is listening");
})