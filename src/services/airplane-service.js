const {AirplaneRespository} = require('../repositories')


const airplaneRepository = new AirplaneRespository();

async function createAirplane(data){
     
    try {
        console.log("inside airplane services");
         const airplane = await airplaneRepository.create(data);
         return airplane;
    } catch (error) {
        throw error;
    }
      
}

module.exports = {
    createAirplane
}