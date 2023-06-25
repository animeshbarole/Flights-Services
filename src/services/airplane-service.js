const { StatusCodes } = require('http-status-codes');
const {AirplaneRespository} = require('../repositories');
const AppError = require('../utils/errors/app-error');


const airplaneRepository = new AirplaneRespository();

async function createAirplane(data){
     
    try {
        
         const airplane = await airplaneRepository.create(data);
         return airplane;
    } catch (error) {
        
            
            if(error.name == 'SequelizeValidationError')
            {
                 let explaination = [];
                 error.errors.forEach((err=>{
                     explaination.push(err.message);

                 }));

                console.log(explaination);  
                 
                throw new AppError(explaination,StatusCodes.BAD_REQUEST)
            }
           throw new AppError('Cannot create new Airplane',StatusCodes.INTERNAL_SERVER_ERROR)
         }
}  

async function getAirplanes()
{
      try{
             const airplanes= await airplaneRepository.getAll();
             return airplanes;
      }
      catch(error){
          
        throw new AppError('Not able to fectch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)

      }
}
async function getAirplane(id)
{
      try{
             
             const airplane= await airplaneRepository.get(id);
             return airplane;
      }
      catch(error){

         
        /*
         Error come from
           Respository -> Services -> Controller -> Routes -> index 
          */

        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
               throw new AppError('The airplane you requested is not present ',error.statusCode);
        }
          
        throw new AppError('Not able to fectch data of all the data  airplanes',StatusCodes.INTERNAL_SERVER_ERROR)

      }
}
 

async function deleteAirplane(id)
{
      try{
             const response= await airplaneRepository.destroy(id);
             return response;
      }
      catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
               throw new AppError('The airplane you requested to delete is not present ',error.statusCode);
        }
          
        throw new AppError('Not able to fectch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)

      }
}

async function updateAirplane(data,id)
{
      try{
             const response= await airplaneRepository.update(data,id);
             return response;
      }
      catch(error){
        
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
               throw new AppError('The airplane you requested to update is not present ',error.statusCode);
        }
          
        throw new AppError('Not able to fectch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)

      }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}