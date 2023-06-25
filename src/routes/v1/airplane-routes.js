const express = require('express');
const {AirplaneMiddlewares} = require('../../middlewares')

const {AirplaneController}  = require('../../controllers')
const router  = express.Router();


//Post Request
//api/v1/airplanes/ 

console.log("Inside the airplane Route")
router.post('/',
   AirplaneMiddlewares.validateCreateRequest, 
   AirplaneController.createAirplane)

 
  // get Request 
 // api/v1/airplanes/     

router.get('/',AirplaneController.getAirplanes);  


// api/v1/airplanes/:id
router.get('/:id',AirplaneController.getAirplane);

module.exports = router;
