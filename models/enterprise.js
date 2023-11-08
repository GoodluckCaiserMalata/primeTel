'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enterprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enterprise.belongsToMany(models.Tests, {
        through: 'LaboratoryTest',
        as: 'tests',
        foreignKey: 'enterprise_id',
      });
      Enterprise.belongsToMany(models.Medication, {
        through: 'PharmacieMedication',
        as: 'medications',
        foreignKey: 'enterprise_id',
      });
    }
  }
  Enterprise.init({
    creation_date: DataTypes.DATE,
    enterprise_name: DataTypes.STRING,
    enterprise_address: DataTypes.STRING,
    enterprise_phone_number: DataTypes.STRING,
    enterprise_email: DataTypes.STRING,
    type_of_enterprise: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enterprise',
  });
  return Enterprise;
};