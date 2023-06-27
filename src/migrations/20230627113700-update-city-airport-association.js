'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.addConstraint('Airports',{

       type:'FOREIGN KEY',
       name:'city_fkey_constraint',
       fields : ['cityID'],

       references:{
        table: 'Cities',
        field :'id'
       },
       onDelete:'cascade',
       onUpdate:'cascade'     
     
    });
  },

  async down (queryInterface, Sequelize) {
    

    await queryInterface.removeConstraint('Airports','city_fkey_constraint');

  }
};

