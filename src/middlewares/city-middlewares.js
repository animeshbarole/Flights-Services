const {StatusCodes, BAD_REQUEST, INTERNAL_SERVER_ERROR}= require('http-status-codes');

const {ErrorResponse} =require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next)
{
    if(!req.body.name)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an name',
         
         ErrorResponse.error =new AppError(['City name  is not found in incoming Request'],StatusCodes.BAD_REQUEST)

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }

   

    next();
}

module.exports={
    validateCreateRequest
}