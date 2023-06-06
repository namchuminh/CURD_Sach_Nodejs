const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Book = sequelize.define("book", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  tieuDe: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  moTa: {
    type: DataTypes.TEXT,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
  tacGia: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  theLoai: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
  ngayPhatHanh: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  soTrang: {
    type: DataTypes.NUMBER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
  soLuongBan: {
    type: DataTypes.NUMBER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
  anhBia: {
    type: DataTypes.TEXT,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
});

module.exports = Book;
