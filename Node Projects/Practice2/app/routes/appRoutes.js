var mc = require('../modal/dbConnection'); 

const appRouter = (app)=>{ 
     var regController = require('../controller/registerController'); 
     const multer  = require('multer');
     var upload  = multer(); 
    

     const  storage = multer.diskStorage({
          destination: (req, file, cb)=>{
            const isValid = MINE_TYPE_MAP[file.mimetype];
            let error = Error("Invalid mime type");
            if(isValid){
              error = null;
            }
            cb(error, "images");
          },
          filename: (req, file, cb) =>{
            const name = file.originalname;
          //  const ext = file.mimetype;
          cb(null, Date.now()+new Date().getMilliseconds()+".png");
            // cb(null, name);    
          }  
        });
      
        const MINE_TYPE_MAP = {
          // 'application/pdf':'pdf',
          "image/jpeg":'jpeg',
          "image/png":'png'          
          }
      


          
     app.route('/registration/signup').get(regController.getUsers);
     //app.route('/registration/signup').post(regController.regUsers);

     app.route('/registration/signup')
   .post(multer({storage: storage}).single("reg_logo"),regController.regUsers);


     app.route('/registration/signup/update').post(regController.updateUsers);










}

module.exports = appRouter;
