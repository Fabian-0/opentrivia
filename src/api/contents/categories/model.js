const sequelize = require("../../../config/database/db");
const { DataTypes, literal } = require("sequelize");

const Category = sequelize.define("Category", {
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
      len: [5, 45]
    }
  }
}, {
  tableName: "categories",
  underscored: true
}
);

module.exports = Category;