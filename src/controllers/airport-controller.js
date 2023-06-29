const {StatusCodes} = require('http-status-codes');

const {AirportService} = require('../services');

const {ErrorResponse,SuccessResponse} = require('../utils/common')


/*
   
  (Req,Res) => 

   Post -> Airplanes
   req-body =>(modelNumber : Airbus480 , capacity : 200)

 */


async function createAirport(req,res){
    try {  
        
    
        const airport = await AirportService.createAirport ({
              
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityID : req.body.cityID

             
        });
         
        SuccessResponse.data =airport
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

async function getAirports(req,res)
{
    try{ 
         
         const airport = await AirportService.getAirports();
         SuccessResponse.data = airport;

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

async function getAirport(req,res)
{
    try{ 
         
      
         const airport = await AirportService.getAirport(req.params.id);
         SuccessResponse.data = airport;

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

async function deleteAirport(req,res)
{
    try{ 
         
         const airport = await AirportService.deleteAirport(req.params.id);
         SuccessResponse.data = airport;

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

//async function updateAirport(req,res)
//{
//    try{ 
//
//         const airport = await AirportService.updateAirport({
//            Capacity : req.body.Capacity
//         },req.params.id);
//         SuccessResponse.data = airport;
//
//         return res.
//                   status(StatusCodes.CREATED)
//                  .json( SuccessResponse );
//
//    }catch(error) 
//    {
//        ErrorResponse.error = error 
//        return res
//                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
//                                            //Pass it with statusCode
//                  .json(ErrorResponse);
//    }
//}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    //updateAirplane
}