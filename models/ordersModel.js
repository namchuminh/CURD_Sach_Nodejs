const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../models/userModel");
const Book = require("./booksModel.js");

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
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
  soLuong: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  diaChi: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

Order.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Order, { foreignKey: 'user_id' });

Order.belongsTo(Book, { foreignKey: 'book_id' });
Book.hasMany(Order, { foreignKey: 'book_id' });

module.exports = Order;
