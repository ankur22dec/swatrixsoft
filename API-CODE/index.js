const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sendEmail, sendEmailToHtml, sendEmailToOfficeCareer, sendEmailToUserInquiry, sendEmailToUserCareer } = require("./sendEmail.js");
const { upload } = require("./upload.js");
const https = require('https');
const fs = require("fs");
const moment = require("moment");

const app = express();
const db = require("./databse");
const Contact = require("./models/contact.model");
const inquiryLog = require("./models/inquiryLog.model");
const Career = require("./models/career.model");
const logTraking = require("./models/logTraking.model");
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
const PORT = 8002;
const PROD_PORT = 8080;

//// ====== PRODUCTION SERVER =========
// // HTTPS key details
// const privateKey = fs.readFileSync('/etc/nginx/ssl/cmarix.key', 'utf8');
// const certificate = fs.readFileSync('/etc/nginx/ssl/cmarix.com.chained.crt', 'utf8');

// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	// ca: ca
// };
// const httpsServer = https.createServer(credentials, app);
//// ===== PRODUCTION END =======

// app.use(bodyParser());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome");
})

app.post('/contact', function (req, res) {
    upload(req, res, async (err, result) => {
        if (err) {
            console.log(err);
            res.send({ "success": false, msg: err });
        } else {
            let filename = '';
            const { firstName, email } = req.body;
            if (req.file) {
                filename = req.file.filename
            }
            console.log('---body', req.body);
            await Contact.create({
                ...req.body
            })
            // console.log('--------', insert);
            const sendMail = await sendContactEmail(filename, req.body);
            console.log('---email', sendMail);
            if (sendMail) {
                const insert = await inquiryLog.create({
                    firstName,
                    email,
                    status: 'true'
                })
                // console.log('----',insert);
                res.send({ "success": true });
            } else {
                const insert = await inquiryLog.create({
                    firstName,
                    email,
                    status: 'false'
                })
                // console.log('----',insert);
                res.send({ "success": true });
            }
        }
    })
})

const sendContactEmail = async (filename, body) => {
    try {
        const endDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        const startDate = moment(new Date()).subtract(12, "hours").format("YYYY-MM-DD HH:mm:ss");

        let result = await logTraking.findAll({
            where: {
                datetime: {
                    [Op.gte]: startDate,
                    [Op.lte]: endDate
                },
                ip: body.ip
            },
            raw: true,
            order: [['id', 'desc']]
        })

        result = JSON.stringify(result);
        result = JSON.parse(result);

        for (let i in result) {
            result[i].datetime = moment(result[i].datetime).format("YYYY-MM-DD hh:mm:ss");
        }
        body['logs'] = result;
        body['referrer'] = (result.length > 0) ? result[0].referral : '-';
        body['country'] = (result.length > 0) ? result[0].country : '-';
        sendEmailToHtml(body, filename);
        const sendEmail = await sendEmailToUserInquiry(body);
        console.log('email22---', sendEmail);
        return sendEmail;

    } catch (e) {
        console.log(e);
    }
}

app.post('/apply', function (req, res) {
    upload(req, res, async (err, rsult) => {
        if (err) {
            console.log(err);
            res.send({ "success": false, msg: err });
        } else {
            let filename = '';
            if (req.file) {
                filename = req.file.filename
            }
            await Career.create({
                ...req.body
            })
            await sendEmailToOfficeCareer(filename, req.body)
            await sendEmailToUserCareer(req.body);

            res.send({ "success": true });
        }
    })
})

app.post("/log", bodyParser.json(), async function (req, res) {
    const { ip } = req.body;
    if (ip === "203.109.113.178" || ip === "203.109.113.179") {
        res.send({ "success": true });
        return;
    } else {
        await logTraking.create({
            ...req.body
        })
        res.send({ "success": true });
        // let sql = `INSERT INTO log_tracking (ip, os, browserName, country, city, countryCode, routeName, referral, deviceType, datetime) 
        // VALUES ('${ip}', '${os}', '${browserName}', '${country}', '${city}', '${countryCode}', '${routeName}', '${referral}', '${deviceType}', NOW())`;

        // db.query(sql, (err, result) => {
        //     if (err) {
        //         res.send({ "success": false, msg: err });
        //     } else {
        //         res.send({ "success": true });
        //     }
        // });
    }
})

// db.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {

//         /**
//          * Development
//          **/

//         // console.log("DB Conncted");
//         app.listen(PORT, (err) => {
//             if (err) {
//                 console.log("FAIELD TO START SERVER");
//             } else {
//                 console.log(`Server started on http://localhost:${PORT}/`);
//             }
//         })

//         /**
//          * Production
//          **/
//         // httpsServer.listen(PORT, (err) => {
//         //     if(err) {
//         //         console.log(err);
//         //         return;
//         //     }
//         //     console.log('HTTPS Server running on port 3000');
//         // });
//     }
// })
app.listen(PORT, (err) => {
    if (err) {
        console.log("FAIELD TO START SERVER");
    } else {
        console.log(`Server started on http://localhost:${PORT}/`);
    }
})

