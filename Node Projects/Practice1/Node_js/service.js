const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const signupRoutes = require("./app/routes/signup");
const mc = require("./app/routes/connection");


const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

app.use("/signup", signupRoutes);


app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Method",
    "GET, POST, DELETE, PUT, PATCH, OPTIONS");
});


app.listen(port,  ()=>{
    console.log("Server is running on port 3000");
});


//importing Route
// const routes = require('./app/routes/appRoutes');
// routes(app);  // register the route