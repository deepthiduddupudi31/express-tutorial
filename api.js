const express=require('express');
const app=express();
let data=require('./data.json');
app.use(express.json());
app.get('/api/:id',(req,res)=>{
    const {id}=req.params;
    const user=data.find((data)=>{
        return data.id===Number(id);
    })
    if(user)
    {
        return res.json(user);
    }
    return res.status(404).json("page not found");
})
app.get('/api',(req,res)=>{
    res.json(data);
})
app.post('/api',(req,res)=>{
    const user=req.body;
    data.push(user);
    res.send(data);
})
app.put('/api/:id',(req,res)=>{
    const user=req.body;
    const {id}=req.params;
    let users=data.find((user)=>{
        return user.id===Number(id);
    })
    users=user;
    res.json(data);
})
app.delete('/api/:id',(req,res)=>{
    const {id}=req.params;
    const users=data.filter((user)=>{
        return user.id!==Number(id);
    })
    res.json(users);
})

app.listen(3500,()=>console.log("server is listening"));