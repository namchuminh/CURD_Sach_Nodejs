const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  hoTen: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  matKhau: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phanQuyen: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = User;
