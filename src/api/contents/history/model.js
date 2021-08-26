const sequelize = require("../../../config/database/db");
const { DataTypes, literal } = require("sequelize");

const User = require("../users/model");
const Category = require("../categories/model");
const Difficulty = require("../difficulties/model");
const QuestionType = require("../question_types/model");

const Record = sequelize.define("Record", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: literal("DEFAULT"),
    primaryKey: true,
    validate: {
      isNull: true
    }
  },
  user_id: {
    type: DataTypes.UUIDV4,
    defaultValue: literal("DEFAULT"),
    validate: {
      isNull: true
    }
  },
  category_id: {
    type: DataTypes.UUIDV4,
    defaultValue: literal("DEFAULT"),
    validate: {
      isNull: true
    }
  },
  difficulty_id: {
    type: DataTypes.UUIDV4,
    defaultValue: literal("DEFAULT"),
    validate: {
      isNull: true
    }
  },
  question_type_id: {
    type: DataTypes.UUIDV4,
    defaultValue: literal("DEFAULT"),
    validate: {
      isNull: true
    }
  },
  score: {
    type: DataTypes.INTEGER,
    validate: {
      isNull: false,
      isNumeric: true
    }
  },
  attemps: {
    type: DataTypes.INTEGER,
    validate: {
      isNull: false,
      isNumeric: true,
      max: 2,
      min: 1
    }
  }
}, {
  tableName: "records",
  underscored: true
});

User.hasMany(Record, {
  foreignKey: "user_id"
});
Record.belongsTo(User);
// Record.belongsTo(User, {
//   foreignKey: "user_id"
// });

Category.hasMany(Record, {
  foreignKey: "category_id"
});
Record.belongsTo(Category);
// Record.belongsTo(Category, {
//   foreignKey: "category_id"
// });

Difficulty.hasMany(Record, {
  foreignKey: "difficulty_id"
});
Record.belongsTo(Difficulty);
// Record.belongsTo(Difficulty, {
//   foreignKey: "difficulty_id"
// });

QuestionType.hasMany(Record, {
  foreignKey: "question_type_id"
});
Record.belongsTo(QuestionType);
// Record.belongsTo(QuestionType, {
//   foreignKey: "question_type_id"
// });



module.exports = Record;