const sequelize = require("../../../config/database/db");
const { DataTypes } = require("sequelize");

const Ranking = sequelize.define(
  'Ranking',
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notNull: true
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  },
  {
    tableName: 'ranking',
    underscored: true
  }
);

module.exports = Ranking;