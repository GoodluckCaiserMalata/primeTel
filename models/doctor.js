'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
      Doctor.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      Doctor.belongsToMany(models.AppointmentPayment, {
        through: 'Appointment',
        foreignKey: 'doctor_id',
        otherKey: 'appointement_payement_id',
        as: 'patients',
      });
    }
  }
  Doctor.init({
    specialization: DataTypes.STRING,
    licence_number: DataTypes.STRING,
    category_id: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};