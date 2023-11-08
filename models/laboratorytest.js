'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LaboratoryTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LaboratoryTest.belongsTo(models.Enterprise, { foreignKey: 'laboratory_id', as: 'laboratory' });
      LaboratoryTest.belongsTo(models.Test, { foreignKey: 'test_id', as: 'test' });
      LaboratoryTest.hasMany(models.OrderLine, { foreignKey: 'laboratoryTestId', as: 'orderLines', onDelete: 'CASCADE' });
    }
  }
  LaboratoryTest.init({
    laboratory_id: DataTypes.STRING,
    test_id: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'LaboratoryTest',
  });
  return LaboratoryTest;
};