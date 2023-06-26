const express = require('express');

const {CityMiddlewares} = require('../../middlewares')
const {CityController}  = require('../../controllers')
const router  = express.Router();


/*
Post Request
api/v1/cities/ 
*/

router.post('/', CityMiddlewares.validateCreateRequest, CityController.createCity);


/*
Post Request
api/v1/cities/:id 
*/

router.delete('/:id',CityController.deleteCity);


/*/api/v1/cities - PATCH
Req Body: {name:anything }
*/
router.patch('/:id',CityController.updateCity);


module.exports = router;