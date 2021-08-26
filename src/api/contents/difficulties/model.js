const sequelize = require("../../../config/database/db");
const { DataTypes, literal } = require("sequelize");

const Difficulty = sequelize.define("Difficulty", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: literal("DEFAULT"),
    primaryKey: true,
    validate: {
      isNull: true
    }
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      isNull: false,
      len: [3, 20]
    }
  }
}, {
  tableName: "difficulties",
  underscored: true
});

module.exports = Difficulty;