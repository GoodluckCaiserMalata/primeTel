'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsTo(models.PharmacieMedication, { foreignKey: 'pharmacie_medication_id', as: 'pharmacieMedication' });
    }
  }
  Inventory.init({
    current_stock: DataTypes.STRING,
    minimum_stock: DataTypes.INTEGER,
    pharmacie_medication_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};