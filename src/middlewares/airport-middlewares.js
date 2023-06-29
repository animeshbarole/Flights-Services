const {StatusCodes, BAD_REQUEST, INTERNAL_SERVER_ERROR}= require('http-status-codes');

const {ErrorResponse} =require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next)
{
    if(!req.body.name)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Airport',
         
         ErrorResponse.error =new AppError(['name is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    
    if(!req.body.code)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Airport ',
         
         ErrorResponse.error =new AppError(['code is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }
    if(!req.body.cityID)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Airport',
         
         ErrorResponse.error =new AppError(['cityID is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }


    next();
}

module.exports={
    validateCreateRequest
}