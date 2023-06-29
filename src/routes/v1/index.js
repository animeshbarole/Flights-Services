const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes =require('./airplane-routes');
const cityRoutes =require('./city-routes');
const airportRoutes = require('./airport-routes');


const router = express.Router();

console.log("We are inside v1 routes");
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes)
router.use('/airports',airportRoutes);


router.get('/info', InfoController.info);

module.exports = router;