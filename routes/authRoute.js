const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wishhut').then(()=>{
    console.log('database is connected');
}).catch(()=>{
    console.log('database not connected');
});

router.get('/',(req,res)=>{

    res.render('auth/login');

});

router.post('/user/register',async(req,res)=>{

    try{
        const{username,email,password} = req.body;
        const user = new User({username,email});
        const newUser = await User.register(user,password);
        req.flash("success","User registered successfully");
        res.redirect('/');
    }catch{
        req.flash("error","User already registered");
        res.redirect('/');
    }
    
});




module.exports = router;