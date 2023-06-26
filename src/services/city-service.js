const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');


const cityRepository = new CityRepository();

async function createCity(data){
     
    try {
        
         const city = await cityRepository.create(data);
         return city;
    } catch (error) {
        
             
            console.log(error)
            
            //SequelizeUniqueConstraintError -> Recreating Same cities , but not possible because Contraints is unique. 
            if(error.name == 'SequelizeValidationError'||error.name == "SequelizeUniqueConstraintError")
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


module.exports = {
    createCity,
}
