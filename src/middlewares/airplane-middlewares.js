const {StatusCodes, BAD_REQUEST, INTERNAL_SERVER_ERROR}= require('http-status-codes');

const {ErrorResponse} =require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next)
{
    if(!req.body.modelNumber)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Airplane',
         
         ErrorResponse.error =new AppError(['model number is not found '],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }

    next();
}

module.exports={
    validateCreateRequest
}