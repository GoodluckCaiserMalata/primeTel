'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enterprises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creation_date: {
        type: Sequelize.DATE
      },
      enterprise_name: {
        type: Sequelize.STRING
      },
      enterprise_address: {
        type: Sequelize.STRING
      },
      enterprise_phone_number: {
        type: Sequelize.STRING
      },
      enterprise_email: {
        type: Sequelize.STRING
      },
      type_of_enterprise: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enterprises');
  }
};