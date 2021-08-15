const sequelize = require("../../../config/database/db");
const { DataTypes} = require("sequelize");
const Ranking = require("../ranking/model");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = sequelize.define(
  'User',
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,50],
        notNull: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,50],
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [10,100],
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10,15],
        notNull: true  
      }
    }
  },
  {
    tableName: 'users',
    underscored: true
  }
);

User.addHook('beforeCreate', async (user, options) => {
  try {
    const hash = bcrypt.hashSync(user.password, saltRounds);
    user.password = hash;
  } catch (error) {
    console.error(error);
  }
});

User.hasOne(
  Ranking,
  {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
  }
);
Ranking.belongsTo(User,  {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

module.exports = User;