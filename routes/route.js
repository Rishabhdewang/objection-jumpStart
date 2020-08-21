const express = require('express');
const app = express.Router();
const Post = require('../model/user')

app.get('/allusers',(req,res) => {
    const users = Post.query();
    console.log("Users are");
})

app.post('/adduser', async (req,res ) => {
    console.log(req.body);
    let data  =  await Post.query().insert(req.body);
    
})


module.exports = app;