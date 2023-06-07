const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel")

const Comment = sequelize.define("comment", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  noiDung: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  book_id: {
    type: DataTypes.NUMBER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
  user_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

Comment.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });

module.exports = Comment;
