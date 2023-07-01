const { Sequelize} = require('sequelize')
const CrudRepository = require('./crud-repository')

const  {Flight,Airplane,Airport,City} = require('../models')

class FlightRepository extends CrudRepository {
     
      constructor()
      {
           super(Flight);
      
      }

 
      async getAllFlights(filter,sort){
             
            const response = await Flight.findAll({
                  where: filter,
                  order:sort,
                  //include is sequelize syntax used to apply joins in multiple tables 
                  //Read more about on Google 
                  include :[
                  {
                        model : Airplane,
                        required:true ,// OuterJoin
                        as : 'airplaneDetails'
                  },
                  {
                        model : Airport,
                        required : true,
                        as : 'departureAirport',
                        on:{
                              col1:Sequelize.where(Sequelize.col("Flight.departureAirportID"),"=",Sequelize.col("departureAirport.code")),
                        },
                        include :[
                          {
                              model :City,
                              required : true,
                          }
                        ] 

                  },
                  {
                        model : Airport,
                        required : true,
                        as : 'arrivalAirport',
                        on:{
                              col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportID"),"=",Sequelize.col("arrivalAirport.code")),
                        },

                        include :[
                              {
                                  model :City,
                                  required : true,
                              }
                            ] 


                  }

            
                  ]
            });
            return response;
      }

}

module.exports = FlightRepository;