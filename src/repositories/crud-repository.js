
const {Logger} = require('../config');

class CrudRepository{
       
    constructor(model)
    {
      this.model = model;
    }
   


    async create(data)
    {
     
    
             const response = await this.model.create(data)
             return response;
     
    }

    async destroy(data)
    {
        try {
             const response = await this.model.destroy(
              {
                   where :{
                      id : data,
                   }
              }
             )
             return response;
        } catch (error) {
              Logger.error('SomeThing went wrong in the Crud Repository :Create');
                throw error;
        }
    }

    async get(data)
    {
        try {
             const response = await this.model.findbyPk(data)
             return response;
        } catch (error) {
              Logger.error('SomeThing went wrong in the Crud Repository :Create');
                throw error;
        }
    }

    async getAll()
    {
        try {
             const response = await this.model.findAll()
             return response;
        } catch (error) {
              Logger.error('SomeThing went wrong in the Crud Repository :Create');
                throw error;
        }
    }

    async update(data,id) /*{data  -> {colvalue : "val"}*/  
      {
        try {
             const response = await this.model.update(data , {
                      
              where :{
                id :id,
              }
             })
             return response;
        } catch (error) {
              Logger.error('SomeThing went wrong in the Crud Repository :Create');
                throw error;
        }
    }

};

module.exports = CrudRepository;