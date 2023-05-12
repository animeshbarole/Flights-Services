
const CrudRepository = require('./crud-repository')

const  {Airplane} = require('../models')

class AirplaneRespository extends CrudRepository {
     
      constructor()
      {
           super(Airplane);
      
      }

}

module.exports = AirplaneRespository;