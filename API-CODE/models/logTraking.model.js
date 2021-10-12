var sequelize = require('../databse');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
//Create Item Table Structure
var logTracking = sequelize.define('log_tracking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ip: { type: Sequelize.STRING },
    os: { type: Sequelize.STRING },
    browserName: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    countryCode: { type: Sequelize.STRING },
    routeName: { type: Sequelize.STRING },
    referral: { type: Sequelize.STRING },
    deviceType: { type: Sequelize.STRING },
    datetime: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'log_tracking'
});
/*
tbl_playlist.findAll({}).then((result)=>{
  console.log(result);
});*/
module.exports = logTracking;