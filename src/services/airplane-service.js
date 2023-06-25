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
 

module.exports = {
    createAirplane,
    getAirplanes
}