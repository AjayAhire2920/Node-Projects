var sql = require('../modal/dbConnection');
const date = require('date-and-time')



var regModal = function(regUser){
    this.reg_id = regUser.reg_id;
    this.reg_logo = regUser.reg_logo;
    this.reg_username = regUser.reg_username;
    this.reg_restname = regUser.reg_restname;    
    this.reg_fname = regUser.reg_fname;
    this.reg_lname = regUser.reg_lname;
    this.reg_email = regUser.reg_email;
    this.reg_password= regUser.reg_password;
    this.reg_mobile = regUser.reg_mobile;   
    this.reg_status = regUser.reg_status;
    // this.reg_date = new Date();
};




regModal.getUsers = function(req, result){

    console.log("into regModal");
    sql.query("SELECT * from signup", function(err, res1){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res1);
            // console.log(res1);
             }        
    });
}

regModal.updateUsers = function(req, result){
    regModal = req.body; 
    const now  =  new Date(); 
    const value = date.format(now,'YYYY/MM/DD HH:mm:ss'); 
    sql.query("UPDATE signup SET reg_logo = '"+req.file.filename+"', reg_username = '"+regModal.reg_username+"', reg_restname = '"+regModal.reg_restname+"', reg_fname = '"+regModal.reg_fname+"', reg_lname = '"+regModal.reg_lname+"', reg_email = '"+regModal.reg_email+"', reg_password = '"+regModal.reg_password+"', reg_mobile = '"+regModal.reg_mobile+"', status = '"+regModal.status+"', reg_date = '"+value+"' WHERE signup.accountId ='"+regModal.reg_id+"'" , function(err, res1){
        if(err){
            result(err, null);
            console.log(err);
        }else{
            result(null, res1);
            console.log("result"+res1);
        }
    });
}

regModal.updateUsersWithoutImg = function(req, result){
    regModal = req.body;
    var now = new Date();
    const DateValue = date.format(now, "YYYY/MM/DD HH:mm:ss");

    sql.query("UPDATE signup SET  reg_username = '"+regModal.reg_username+"', reg_restname = '"+regModal.reg_restname+"', reg_fname = '"+regModal.reg_fname+"', reg_lname = '"+regModal.reg_lname+"', reg_email = '"+regModal.reg_email+"', reg_password = '"+regModal.reg_password+"', reg_mobile = '"+regModal.reg_mobile+"', status = '"+regModal.status+"', reg_date = '"+DateValue+"' WHERE signup.accountId ='"+regModal.reg_id+"'" , function(err, res1){
        if(err){
            result(err, null);
            console.log(err);
        }else{
            result(null, res1);
            console.log("result"+res1);
        }
    }); 
}


regModal.deleteUser = function(req, result){ 
     sql.query("DELETE FROM signup WHERE signup.accountId = '"+req+"'" , function(err, res1){
         if(err);
         result(err, null);
         result(null, res1);
     });
}










module.exports = regModal;