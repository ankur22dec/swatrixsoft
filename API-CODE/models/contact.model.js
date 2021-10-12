var sequelize = require('../databse');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
//Create Item Table Structure
var Contact = sequelize.define('contact', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    interest: { type: Sequelize.STRING },
    routeName: { type: Sequelize.STRING },
    services: { type: Sequelize.STRING },
    fileName: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'contact'
});
/*
tbl_playlist.findAll({}).then((result)=>{
  console.log(result);
});*/
module.exports = Contact;