const {StatusCodes, BAD_REQUEST}= require('http-status-codes');

const {ErrorResponse} =require('../utils/common')

function validateCreateRequest(req,res,next)
{
    if(!req.body.modelNumber)
    {   
         ErrorResponse.message ='SomeThing went wrong while creating an Airplane',
         ErrorResponse.error ={explanation: 'model number is not found '}

         return res.
                   status(StatusCodes.BAD_REQUEST)
                   .json( ErrorResponse)

    }

    next();
}

module.exports={
    validateCreateRequest
}