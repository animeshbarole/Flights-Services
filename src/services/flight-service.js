const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { Op } = require('sequelize');


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

async function getAllFlights(query)
{  
       let customFilter  ={};
       let sortFilter =[];
       const endingTripTime = " 23:59:00";
       
       //trips = MUM-DEL
       if(query.trips)
       {
              [departureAirportID,arrivalAirportID] = query.trips.split("-");
              customFilter.departureAirportID = departureAirportID;
              customFilter.arrivalAirportID = arrivalAirportID;
              if(departureAirportID===arrivalAirportID)
              {
                     throw new AppError("Both Id is same ",StatusCodes.UNPROCESSABLE_ENTITY)
              }
       }


       if(query.price) {
              [minPrice,maxPrice] = query.price.split("-");
              customFilter.price = {
                     [Op.between]:[minPrice,((maxPrice==undefined)?20000:maxPrice)],
              }
       }

       if(query.travellers) 
       {
               customFilter.totalSeats = {
                     [Op.gte]:query.travellers
               }

       }

       if(query.tripDate)
       {
              customFilter.departureTime = {
                     [Op.between] :[query.tripDate, query.tripDate+endingTripTime]
              }
       }

       if(query.sort)
       {
              //'departureTime_ASC,price_ASC;
              const params  = query.sort.split(',');
              //Refer Sequlize Sort
              //sort(title,type)
              const sortFilters = params.map((param)=> param.split('_'))
              sortFilter = sortFilters;
       }

       try {
              const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
              return flights;
              
       } catch (error) {

                 
        throw new AppError('Not able to fectch data of all the flights',StatusCodes.INTERNAL_SERVER_ERROR)
       }


}


async function getFlight(id)
{
       try{
             
              const flight= await flightRepository.get(id);
              return flight;
       }
       catch(error){
 
          
         /*
          Error come from
            Respository -> Services -> Controller -> Routes -> index 
           */
 
         if(error.statusCode==StatusCodes.NOT_FOUND)
         {
                throw new AppError('The flight you requested is not present ',error.statusCode);
         }
           
         throw new AppError('Not able to fectch data of all the data  flight',StatusCodes.INTERNAL_SERVER_ERROR)
 
       }

}

async function updateSeats(data)
{
       try{
             
            const response = await flightRepository.updateRemainingSeats(data.flightID,data.seats,data.dec);
            return response;  

       }catch(error)
       {
              console.log(error);

              throw new AppError('Cannot update data of  the flight',StatusCodes.INTERNAL_SERVER_ERROR);

       }
}


module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats,
   
}