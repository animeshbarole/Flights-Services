const express = require('express');
const {AirportMiddlewares} = require('../../middlewares')

const {AirportController}  = require('../../controllers')
const router  = express.Router();


/*
Post Request
api/v1/airplanes/ 
*/

router.post('/',
   AirportMiddlewares.validateCreateRequest, 
   AirportController.createAirport)


/*
get Request
api/v1/airplanes/ 
*/
router.get('/',AirportController.getAirports);  

/*
get Request
api/v1/airplanes/:id 
*/
router.get('/:id',AirportController.getAirport);


/*
delete Request
api/v1/airplanes/:id 

 { data =0 means we deleted not available file
    data  = 1 response json we delete available file }
*/

router.delete('/:id',AirportController.deleteAirport);

/**
 /api/v1/airplane - PATCH
 Req Body: {capacity: 250}
 */
//router.patch('/:id',AirplaneController.updateAirplane);

module.exports = router;
