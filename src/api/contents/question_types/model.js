const sequelize = require("../../../config/database/db");
const { DataTypes, literal } = require("sequelize");

const QuestionTypes = sequelize.define("QuestionTypes", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: literal("DEFAULT"),
    primaryKey: true,
    validate: {
      isNull: true
    }
  },
  type: {
    type: DataTypes.STRING,
    validate: {
      isNull: false,
      len: [5, 20]
    }
  }
}, {
  tableName: "question_types",
  underscored: true
});

module.exports = QuestionTypes;