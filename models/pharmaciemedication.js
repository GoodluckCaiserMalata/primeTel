'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PharmacieMedication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PharmacieMedication.belongsTo(models.Enterprise, { foreignKey: 'pharmaci_id', as: 'pharmacy' });
      PharmacieMedication.belongsTo(models.Medication, { foreignKey: 'medication_id', as: 'medication' });
      PharmacieMedication.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
      PharmacieMedication.hasMany(models.OrderLine, { foreignKey: 'pharmacie_medication_id', as: 'orderLines', onDelete: 'CASCADE' });
      PharmacieMedication.hasMany(models.Inventory, { foreignKey: 'pharmacie_medication_id', as: 'inventory', onDelete: 'CASCADE' });
    }
  }
  PharmacieMedication.init({
    pharmaci_id: DataTypes.STRING,
    medication_id: DataTypes.STRING,
    sale_price: DataTypes.DECIMAL,
    expiration_date: DataTypes.DATE,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PharmacieMedication',
  });
  return PharmacieMedication;
};