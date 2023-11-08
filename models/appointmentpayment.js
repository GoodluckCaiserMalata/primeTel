'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AppointmentPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AppointmentPayment.init({
    payement_amount: DataTypes.DECIMAL,
    payement_method: DataTypes.STRING,
    payement_ref: DataTypes.STRING,
    patient_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AppointmentPayment',
  });
  return AppointmentPayment;
};