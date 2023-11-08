'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnterprisePayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EnterprisePayment.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
    }
  }
  EnterprisePayment.init({
    payement_amount: DataTypes.FLOAT,
    payement_method: DataTypes.STRING,
    order_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EnterprisePayment',
  });
  return EnterprisePayment;
};