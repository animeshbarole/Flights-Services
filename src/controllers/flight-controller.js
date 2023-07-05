const {StatusCodes} = require('http-status-codes');

const {FlightService} = require('../services');

const {ErrorResponse,SuccessResponse} = require('../utils/common')


/*
   
  (Req,Res) => 

   Post -> /flights
   req-body =>{

       flightNumber : 'UK 808'
       airplaneID :'a380'
       departureAirportID :'IND'
       arrivalAirportID : 'PNJ'
       arrivalTime :'11:10:00'
       departureTime :'9:10:00'
       price : 2000
       boardingGate : '12A' 
       totalSeats : 120
  }

 */


async function createFlight(req,res){
    try {  
        
    
        const flight = await FlightService.createFlight ({
             
            flightNumber : req.body.flightNumber,
            airplaneID : req.body.airplaneID,
            departureAirportID : req.body.departureAirportID,
            arrivalAirportID : req.body.arrivalAirportID,
            arrivalTime : req.body.arrivalTime,
            departureTime :req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats,
        });
         
        SuccessResponse.data =flight
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

async function getAllFlights(req,res)
{
     try{
        const flights = await FlightService.getAllFlights(req.query);

        SuccessResponse.data =flights
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

async function getFlight(req,res)
{
    try{ 
         
      
         const flight = await FlightService.getFlight(req.params.id);
         SuccessResponse.data = flight;

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



/**async function getAirports(req,res)
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

**/

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    //updateAirplane
}