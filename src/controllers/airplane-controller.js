const {StatusCodes} = require('http-status-codes');

const {AirplaneService} = require('../services');

const {ErrorResponse,SuccessResponse} = require('../utils/common')


/*
   
  (Req,Res) => 

   Post -> Airplanes
   req-body =>(modelNumber : Airbus480 , capacity : 200)

 */


async function createAirplane(req,res){
    try {  
        
    
        const airplane = await AirplaneService.createAirplane ({
              modelNumber : req.body.modelNumber,
              Capacity : req.body.Capacity,

        });
         
        SuccessResponse.data =airplane
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

async function getAirplanes(req,res)
{
    try{ 
         
         const airplanes = await AirplaneService.getAirplanes();
         SuccessResponse.data = airplanes;

         return res.
                   status(StatusCodes.OK)
                  .json( SuccessResponse );

    }catch(error) 
    {
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
    }
}


/*
   
  (Req,Res) => 

   get -> /airplanes/:id 
   req-body =>{}

 */

async function getAirplane(req,res)
{
    try{ 
         
        console.log("inside controller");
         const airplane = await AirplaneService.getAirplane(req.params.id);
         SuccessResponse.data = airplane;

         return res.
                   status(StatusCodes.OK)
                  .json( SuccessResponse );

    }catch(error) 
    {
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
    }
}

async function deleteAirplane(req,res)
{
    try{ 
         
         const airplanes = await AirplaneService.deleteAirplane(req.params.id);
         SuccessResponse.data = airplanes;

         return res.
                   status(StatusCodes.OK)
                  .json( SuccessResponse );

    }catch(error) 
    {
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
    }
}

async function updateAirplane(req,res)
{
    try{ 

         const airplanes = await AirplaneService.updateAirplane({
            Capacity : req.body.Capacity
         },req.params.id);
         SuccessResponse.data = airplanes;

         return res.
                   status(StatusCodes.CREATED)
                  .json( SuccessResponse );

    }catch(error) 
    {
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}