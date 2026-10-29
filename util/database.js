const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Castrofidel9,.", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
