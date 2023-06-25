const express = require('express');
const {AirplaneMiddlewares} = require('../../middlewares')

const {AirplaneController}  = require('../../controllers')
const router  = express.Router();


/*
Post Request
api/v1/airplanes/ 
*/

router.post('/',
   AirplaneMiddlewares.validateCreateRequest, 
   AirplaneController.createAirplane)


/*
get Request
api/v1/airplanes/ 
*/
router.get('/',AirplaneController.getAirplanes);  

/*
get Request
api/v1/airplanes/:id 
*/
router.get('/:id',AirplaneController.getAirplane);


/*
delete Request
api/v1/airplanes/:id 

 { data =0 means we deleted not available file
    data  = 1 response json we delete available file }
*/

router.delete('/:id',AirplaneController.deleteAirplane);

/**
 /api/v1/airplane - PATCH
 Req Body: {capacity: 250}
 */
router.patch('/:id',AirplaneController.updateAirplane);

module.exports = router;
