
var sql = require('../modal/dbConnection');
var regModal  = require('../modal/regModal');
var multer  = require('multer');
var upload  = multer();


exports.regUsers = function(req, res){
    var abc=req.body;    
    var reg_logo  = req.file.filename;
    var reg_username  = abc.reg_username;
    var reg_restname  = abc.reg_restname;
    var reg_fname  = abc.reg_fname;
    var reg_lname  = abc.reg_lname;
    var reg_email  = abc.reg_email;
    var reg_password  = abc.reg_password;
    var reg_mobile  = abc.reg_mobile;
    var reg_status  = abc.status;
    var reg_date  = new Date();
    console.log("hi"+ reg_status);
    
    if(!reg_email){
        res.status(400).send({error:true, message:'please provide data'});
    }else{ 
        var query = "INSERT INTO signup (reg_logo, reg_username, reg_restname, reg_fname, reg_lname, reg_email, reg_password, reg_mobile, status, reg_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        console.log(query);
        sql.query(query, [reg_logo,reg_username,reg_restname,reg_fname,reg_lname,reg_email,reg_password,reg_mobile,reg_status,reg_date], function(err, data){
            if(err){
                console.log(err);
                res.json({ "message" : "failed" , "status": "0" , "data": null});
            }
            else{
                res.json({ "message": "success" , "status": 1 , "data": data});
            }
        });
    }
}


exports.getUsers = function(req, res){ 
        regModal.getUsers(req, function(err, res1){
            if(err)
            res.json({
                "message": "failed",
                "status": "0",
                "data": null
            });
            res.json({
                "message": "success",
                "status": "1",
                "data": res1
            });
        }); 
}

exports.updateUsers = function(req, res){
    console.log("into update"); 
    console.log(req.body);
    regModal.updateUsers(req, function(err, res1){
        if(err){
            res.json({ 
                "message": "failed",
                "status": 0,
                "data": null
        });
        }else{
            res.json({
                "message":"success",
                "status":1,
                "data": res1
            });
        }
    });
}


exports.updateUsersWithoutImg = function(req, res){
     regModal.updateUsersWithoutImg(req, function(err,res1){
         if(err){
             res.json({
                 "message": "failed",
                 "data": null,
                 "status": 0
             });
         }else{
            res.json({
                "message": "success",
                "data": res1,
                "status": 1
            });
         }
     });
}


exports.deleteUser = function(req, res){
    console.log(req);
    var id = req.params.accountId;
    console.log(id);
    regModal.deleteUser(id, function(err, res1){
        if(err){
            res.json({
                "message": "failed",
                "status": 0
            });
        }else{
            res.json({
                "message": "success", 
                "status": 1
            });
        }
    });
}
    
