var mc = require('../modal/dbConnection');


const appRouter = (app)=>{ 
     var regController = require('../controller/registerController');

     console.log("Routes");  
     app.route('/registration/signup').get(regController.getUsers);
     console.log('hi')
}

module.exports = appRouter;
