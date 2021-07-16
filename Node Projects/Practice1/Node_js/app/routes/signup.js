const express = require("express");
const Router = express.Router();
// const app = express();
const mc = require("./connection");

console.log("signup pagejs");

Router.get("/", (req, res)=>{
    mc.query("SELECT * from signup", (err, result, fields)=>{
        if(!err){
            res.send(result);
        }else{
             console.log(err);
        }
    });
});
Router.post("/reg", (req, res)=>{
    console.log(req.body);
    let currentDate = new Date();
    mc.query("INSERT INTO `signup` ( `name`, `surname`,`email`, `password`, `createdAt`, `status`) VALUES ('"+req.body.name+"', '"+req.body.name+"','"+req.body.name+"', '"+req.body.password+"', '"+currentDate+"', '"+req.body.name+"');", (err, result, fields)=>{
        if(!err){
            res.send(result);
        }else{
             console.log(err);
        }
    });
});












module.exports = Router;