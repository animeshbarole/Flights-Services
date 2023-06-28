'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight,{
            foreignKey :'airplaneID',
            onDelete :'CASCADE',
      });
    }
  }
  Airplane.init({
    modelNumber:{
      type: DataTypes.STRING,
      allowNull:false,   
                //We dont want table contraints to be NULL
      
            
      },
    Capacity: {
      type: DataTypes.INTEGER,
      allowNull:false,   
      defaultValue: 0,
      validate:{
        max :1000,
      }
        
      }
  }, {
    sequelize,
    modelName: 'Airplane',
  
  });
  return Airplane;
};