'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PharmacieMedications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pharmaci_id: {
        type: Sequelize.STRING
      },
      medication_id: {
        type: Sequelize.STRING
      },
      sale_price: {
        type: Sequelize.DECIMAL
      },
      expiration_date: {
        type: Sequelize.DATE
      },
      category_id: {
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
    await queryInterface.dropTable('PharmacieMedications');
  }
};