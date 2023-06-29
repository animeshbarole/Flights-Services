const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');


const flightRepository = new FlightRepository;

async function createFlight(data){
     
    try {
        
         const flight = await flightRepository.create(data);
         return flight;
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
           throw new AppError('Cannot create new Flight',StatusCodes.INTERNAL_SERVER_ERROR)
         }
}  

/**async function getAirports()
{
      try{
             const airports= await airportRepository.getAll();
             return airports;
      }
      catch(error){
          
        throw new AppError('Not able to fectch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)

      }
}
async function getAirport(id)
{
      try{
             
             const airport= await airportRepository.get(id);
             return airport;
      }
      catch(error){

         
        /*
         Error come from
           Respository -> Services -> Controller -> Routes -> index 
        

        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
               throw new AppError('The airplane you requested is not present ',error.statusCode);
        }
          
        throw new AppError('Not able to fectch data of all the data  airports',StatusCodes.INTERNAL_SERVER_ERROR)

      }
}
 

async function deleteAirport(id)
{
      try{
             const response= await airportRepository.destroy(id);
             return response;
      }
      catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
        {
               throw new AppError('The airport you requested to delete is not present ',error.statusCode);
        }
          
        throw new AppError('Cannot delete   the airports',StatusCodes.INTERNAL_SERVER_ERROR)

      }
}

//async function updateAirport(data,id)
//{
//      try{
//             const response= await airportRepository.update(data,id);
//             return response;
//      }
//      catch(error){
//
//        if(error.statusCode==StatusCodes.NOT_FOUND)
//        {
//               throw new AppError('The airport you requested to update is not present ',error.statusCode);
//        }
//
//        throw new AppError('Not able to fectch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
//
//      }
//}

*/



module.exports = {
    createFlight,
   
}