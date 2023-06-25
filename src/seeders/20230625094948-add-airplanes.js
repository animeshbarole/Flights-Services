'use strict';

const {Op} =require('sequelize')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airplanes',[

      {
        modelNumber : 'Airbus430',
        Capacity :900,
        createdAt : new Date(),
        updatedAt : new Date(), 
        
      },
      {
        modelNumber : 'Boeing777',
        Capacity :900, 
        createdAt : new Date(),
        updatedAt : new Date(),     
      }
    ])
     //If we need to add seed in database then command 
      //npx sequelize db : seed :All

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airplanes',
    {[Op.or]:
      [
        { modelNumber : 'Airbus430'},
        {modelNumber : 'Boeing777'}
      ]
    })
  }
};
