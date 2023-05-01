const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// secure the database passwords from users
dotenv.config({path: 'config.env'});

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log('MongoDB Connected!');
}).catch((err)=>{
    console.log("Connection Failed to MongoDB");
})

//NOTE - if i get deprication warning then i use this inside (DB, here)
/*

{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
*/

//

// middleware
const middleware = (req, res, next)=>{
    console.log('Hello my Middleware');
    next();
}
//


// get == read fetching the data from server and get hello world msg to user in home page '/'
app.get('/',(req,res)=>{
    res.send("Hello Home Page from Server");
});


// contact page
app.get('/contact',(req,res)=>{
    res.send("Hello Contact from Server");
});

// middleware applied here
app.get('/about',middleware,(req,res)=>{
    console.log("About Section Middleware is working");
    res.send("Hello About from Server");
});

//
app.get('/signup',(req,res)=>{

    res.send("Hello Signup from Server");
});

//
app.get('/login',(req,res)=>{
    res.send("Hello login from Server");
});

//  this is used to tell the server that someone is visited in our site
// and that shows our server is running correctly
const port = 3000;
app.listen(port, ()=> {
    console.log(`Server is Running at: ${port}`);
});


//  mongodb+srv://mridul01:kCghsMLhyEaJhqGY@cluster0.gforvhb.mongodb.net/?retryWrites=true&w=majority