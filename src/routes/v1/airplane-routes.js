const express = require('express');

const {AirplaneController}  = require('../../controllers')
const router  = express.Router();

console.log("Inside the airplane Route")
router.post('/',AirplaneController.createAirplane)

module.exports = router;
