const express=require('express');
const data=require('./data.json');
const app=express();
app.get('/api/query',(req,res)=>{
    const {id,name}=req.query;
    const user=data.find((user)=>{
        return user.id===Number(id) && name===user.firstname;
    })
    if(user)
    {
        return res.json({"status":"success","data":user});
    }
    return res.status(404).send(`<h1> page not found</h1>`);
})
app.get('/api/:id',(req,res)=>{
    const {id}=req.params;
    const user=data.find((data)=>{
        return data.id===Number(id);
    })
    if(user)
    {
        return res.json({"status":"success","data":user});
    }
    else
    {
        return res.status(404).send(`<h1>404<h1> page not found`);
    }
})
app.get('/api',(req,res)=>{
    return res.json(data);
})
app.listen(5859,()=>{
    console.log("server is listening");
})