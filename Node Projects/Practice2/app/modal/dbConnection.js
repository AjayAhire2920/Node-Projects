var mysql = require("mysql");



// create connection
var mc = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "registration"
});

//connect to db 
mc.connect(function(err){
    if(err) throw err;
    console.log("Database Connected!");
});


module.exports = mc;