const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const session = require('express-session');
const authRoutes = require('./routes/authRoute');
const flash = require('connect-flash');
const port = 4000;

// for view engine
app.engine('ejs',ejsMate);
app.set('view engine','ejs');

//session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }));

//for paths
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

// for http request
app.use(express.urlencoded({extended:true}));

// overriding http request
app.use(methodOverride('_method'));

//flas middleware
app.use(flash());
// create middleware for res.local

app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    console.log("Hello");
    next();
});

// routes middleware
app.use(authRoutes);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
