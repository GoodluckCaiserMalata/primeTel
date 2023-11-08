'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prescription.belongsTo(models.Appointement, { foreignKey: 'appointement_id', as: 'appointement' });
    }
  }
  Prescription.init({
    medication_frequency: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    diagnosis_code: DataTypes.STRING,
    note: DataTypes.TEXT,
    laboratory_test: DataTypes.TEXT,
    appointement_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prescription',
  });
  return Prescription;
};