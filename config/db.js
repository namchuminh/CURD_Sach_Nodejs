const Sequelize = require('sequelize');
const sequelize = new Sequelize('curd_sach_nodejs', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false, // tắt log
});

module.exports = sequelize;
