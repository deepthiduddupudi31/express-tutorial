const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/users',(req,res)=>{
    res.send("users");
})
app.get('/comments',(req,res)=>{
    res.send("comments");
})

app.listen(5002,()=>{
    console.log("server is listening");
})
