const express = require('express');

const {CityMiddlewares} = require('../../middlewares')
const {CityController}  = require('../../controllers')
const router  = express.Router();


/*
Post Request
api/v1/cities/ 
*/

router.post('/', CityMiddlewares.validateCreateRequest, CityController.createCity);


module.exports = router;