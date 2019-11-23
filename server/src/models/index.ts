import * as fs from 'fs';
import * as path from 'path';
require('dotenv').config();
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    default: console.log,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  }
);

// import all the models
const db: any = {};
fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename;
  })
  .forEach(file => {
    if (file.slice(-3) !== '.js') {
      return;
    }
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// module.exports = db;
export default db;
