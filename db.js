const {Sequelize} = require('sequelize');
require('dotenv').config()
const dbName = process.env.DB_NAME
const dbUserName = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const FilmModel = require('./model/films')
const UserModel = require('./model/users')

const sequelize = new Sequelize (dbName,dbUserName, dbPassword,{
    host: 'localhost',
    dialect: 'mysql' 
});

const DBTest = async () =>{
    try {
      await sequelize.authenticate();
      console.log('Se conecto a la base de datos.');
      } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
     }    
  
  }  
const Film= FilmModel(sequelize,Sequelize)
const User =UserModel(sequelize,Sequelize)

sequelize.sync({force: false}).then(()=>{
  console.log('Tablas sinconizadas')
})




module.exports = {sequelize, DBTest , Film, User}  