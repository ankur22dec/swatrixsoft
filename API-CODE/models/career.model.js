var sequelize = require('../databse');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
//Create Item Table Structure
var Career = sequelize.define('career', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    company: { type: Sequelize.STRING },
    fileName: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'career'
});
/*
tbl_playlist.findAll({}).then((result)=>{
  console.log(result);
});*/
module.exports = Career;