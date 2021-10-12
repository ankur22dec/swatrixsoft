var sequelize = require('../databse');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
//Create Item Table Structure
var inquiryLog = sequelize.define('inquiry_log', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'inquiry_log'
});
/*
tbl_playlist.findAll({}).then((result)=>{
  console.log(result);
});*/
module.exports = inquiryLog;