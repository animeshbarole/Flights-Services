const express = require('express');
const {FlightMiddlewares} = require('../../middlewares')

const {FlightController}  = require('../../controllers')
const router  = express.Router();


/*
Post Request
api/v1/flights/ 
*/

router.post('/',
   FlightMiddlewares.validateCreateRequest, 
   FlightController.createFlight)

 

   /**
    * api/v1/flights?trips=MUM-DEL GET
    */
   router.get('/',
   
   FlightController.getAllFlights)

   router.get('/:id',FlightController.getFlight)
  





module.exports = router;
