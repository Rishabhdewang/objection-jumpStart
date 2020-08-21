const express = require('express');
const app = express.Router();
const Post = require('../model/user')

app.get('/allusers',(req,res) => {
    const users = Post.query();
    console.log("Users are");
})

app.get('/user/:id', async(req,res) => {
    const user = await Posts.query().findById(req.params.id);
})

app.post('/adduser', async (req,res ) => {
    let data  =  await Posts.query().insert(req.body);
    console.log(data);
    res.send("data added",data);   
});

app.post('/update/:id', async (req,res) => {
    console.body(req.body,req.params.id);
    let updated = await Posts.query().findById(req.params.id)
    .patch(req.body);
    res.send(updated);
});

app.delete('/delete/:id',async(req,res) => {
    const deleted = await Posts.query().deleteById(req.params.id);
    res.send(deleted)
});

module.exports = app;
