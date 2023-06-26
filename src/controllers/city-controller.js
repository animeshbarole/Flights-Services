const {StatusCodes} = require('http-status-codes');

const {CityService} = require('../services');

const {ErrorResponse,SuccessResponse} = require('../utils/common')


/*
   
  (Req,Res) => 

   Post -> Cities
   req-body =>{modelNumber : Airbus480 , capacity : 200}

 */


async function createCity(req,res){
    try {  
        
    
        const city = await CityService.createCity ({
            
            name : req.body.name 

        });
         
        SuccessResponse.data =city
        return res.status(StatusCodes.CREATED)
                  .json( SuccessResponse );
        
    } catch (error) {
   
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
        
    }
      
}

module.exports = {
    createCity
}