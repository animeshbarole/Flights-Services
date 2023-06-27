'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
        this.belongsTo(models.City,{
          foreignKey:'cityID',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        })
    }
  }
  Airport.init({
    name: 
    {
      type: DataTypes.STRING,
      allowNull :false,
      unique : true,
    },

    code: 
    {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    address:
    {
      type: DataTypes.STRING,
      unique:true,

    },
    cityID: 
    {
      type: DataTypes.INTEGER,
      allowNull:false, //Every Airport belongs to some city
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};