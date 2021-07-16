
const mysql = require("mysql");
// const pg = require("pg");


// connection configuration or connection setup
var mc = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'registration'
});

//connect to db now.
mc.connect( function(err){
    if(err) throw err;
    console.log("Database connected Successfully!");
});



module.exports = mc;
