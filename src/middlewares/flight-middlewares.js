const {StatusCodes, BAD_REQUEST, INTERNAL_SERVER_ERROR}= require('http-status-codes');

const {ErrorResponse} =require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next)
{
    if(!req.body.flightNumber)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight',
         
         ErrorResponse.error =new AppError(['FlightNumber  is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    
    if(!req.body.airplaneID)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight ',
         
         ErrorResponse.error =new AppError(['airplaneID is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    if(!req.body.departureAirportID)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight',
         
         ErrorResponse.error =new AppError(['departureAirportID is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    if(!req.body.arrivalAirportID)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight',
         
         ErrorResponse.error =new AppError(['arrivalAirportID is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    if(!req.body.arrivalTime)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight',
         
         ErrorResponse.error =new AppError([' arrivalTime is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    if(!req.body.departureTime)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight',
         
         ErrorResponse.error =new AppError(['departureTime is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    if(!req.body.price)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight',
         
         ErrorResponse.error =new AppError(['price is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }

    if(!req.body.totalSeats)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Flight',
         
         ErrorResponse.error =new AppError(['totalSeats is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }


    next();
}

function validateUpdateSeats(req,res,next)
{
     if(!req.body.seats)
     {   
          ErrorResponse.message ='SomeThing went wrong while updating seats',
          
          ErrorResponse.error =new AppError(['seats are not found in the incoming request '],StatusCodes.BAD_REQUEST)
 
          return res.
                    status(StatusCodes.BAD_REQUEST)
                    .json( ErrorResponse)
 
     }

     next();

 
}

module.exports={
    validateCreateRequest,
    validateUpdateSeats,
}