const express = require('express');
const {AirplaneMiddlewares} = require('../../middlewares')

const {AirplaneController}  = require('../../controllers')
const router  = express.Router();

console.log("Inside the airplane Route")
router
.post('/',
   AirplaneMiddlewares.validateCreateRequest, 
   AirplaneController.createAirplane)

module.exports = router;
