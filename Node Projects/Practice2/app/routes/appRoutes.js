


const appRouter = (app)=> { 
     var regController = require('../controller/registerController');

     console.log("Routes");  
     app.route('/registration/signup').get(regController.getUsers);
}

module.exports = appRouter;