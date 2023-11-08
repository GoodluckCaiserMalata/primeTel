'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.Doctor, { foreignKey: 'doctor_id', as: 'doctor' });
      Appointment.belongsTo(models.AppointmentPayment, { foreignKey: 'appointement_payement_id', as: 'appointmentPayment' });
      Appointment.hasMany(models.Prescription, { foreignKey: 'appointmentId', as: 'prescriptions' });
    
    }
  }
  Appointment.init({
    appointement_date: DataTypes.DATE,
    appointement_status: DataTypes.STRING,
    doctor_id: DataTypes.STRING,
    appointement_payement_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};