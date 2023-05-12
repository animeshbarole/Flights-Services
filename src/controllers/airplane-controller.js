const {StatusCodes} = require('http-status-codes');

const {AirplaneService} = require('../services');



async function createAirplane(req,res){



    try {  
        
        console.log("inside Controller");   
        const airplane = await AirplaneService.createAirplane ({
              modelNumber : req.body.modelNumber,
              Capacity : req.body.Capacity,

        });
        return res.status(StatusCodes.CREATED)
                  .json(
                    {
                        success :true,
                        message :"Successfully Created an Airplane",
                        data : {airplane},
                        error : {}
                    }
                  );
        
    } catch (error) {

        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(
                    {
                        success :false,
                        message :"SomeThing went wrong while creating an Airplane",
                        data : {},
                        error : error
                    }
                  );
        
    }
      
}

module.exports = {
    createAirplane
}