
var mc = require('../modal/dbConnection');
// var routes = require('../routes/appRoutes');
var regModal  = require('../modal/regModal');

console.log("regController");

exports.getUsers = function(req, res){ 
    console.log("getUsers");
    if(req.params.regID){
        res.status(400).send({ error:true, message:'please provide task/status'});
    }else{
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
}

exports.regUsers = ()=>{
    console.log("pppppppppppppppppp");
}
    
