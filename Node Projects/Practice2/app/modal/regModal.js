var sql = require('../modal/dbConnection');



var regModal = function(regUser){
    this.reg_id = regUser.reg_id;
    this.reg_logo = regUser.reg_logo;
    this.reg_restname = regUser.reg_restname;    
    this.reg_fname = regUser.reg_fname;
    this.reg_lname = regUser.reg_lname;
    this.reg_email = regUser.reg_email;
    this.reg_mobile = regUser.reg_mobile;    
    this.reg_username = regUser.reg_username;
    this.reg_password = regUser.reg_password;
    this.reg_status = regUser.reg_status;
    this.reg_date = new Date();
};











module.exports = regModal;