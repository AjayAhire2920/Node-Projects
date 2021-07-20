const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000; 
const path = require('path');
const http = require("http");
var mc = require('./modal/dbConnection');






app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Method",
    "GET, POST, DELETE, PUT, PATCH, OPTIONS");
    next();
});




app.listen(port, ()=>{
    console.log("Server Started on port 3000");
});



var router = require('./routes/appRoutes');
router(app);