'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderLine.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
      OrderLine.belongsTo(models.LaboratoryTest, { foreignKey: 'laboratory_test_id', as: 'laboratoryTest' });
      OrderLine.belongsTo(models.PharmacieMedication, { foreignKey: 'pharmacie_medication_id', as: 'pharmacieMedication' });
    }
  }
  OrderLine.init({
    quantity: DataTypes.INTEGER,
    purchase_price: DataTypes.INTEGER,
    laboratory_test_id: DataTypes.STRING,
    pharmacie_medication_id: DataTypes.STRING,
    order_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderLine',
  });
  return OrderLine;
};