const sequelize = require("../../../config/database/db");
const { DataTypes, literal} = require("sequelize");
const Ranking = require("../ranking/model");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: literal("DEFAULT"),
      validate: {
        isNull: true
      }
    },
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
    score:{
      type: DataTypes.INTEGER,
      validate: {
        max: 1000
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

User.addHook("beforeBulkCreate", async (user, options)  => {
  try {
    console.log(user);
    if(user.attributes.password) {
      const hash = bcrypt.hashSync(user.password, saltRounds);
      user.password = hash;
    }
    return;
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