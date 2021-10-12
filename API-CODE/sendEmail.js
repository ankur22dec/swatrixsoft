const nodemailer = require("nodemailer");
const path = require("path");
const moment = require("moment");
const fs = require("fs");
const Handlebars = require('handlebars');

const getFilePath = (name) => {
    return path.join(__dirname, "./uploads", name);
}

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'chirag@cmarix.com', // generated ethereal user
        pass: 'EpfFkSaCWG3gcLQ7' // generated ethereal password
    }
});

let gmailTransporter = nodemailer.createTransport({
    // host: "smtp-relay.gmail.com",
    // port: 465,
    // secure: true, // true for 465, false for other ports
    // auth: {
    //     user: 'pooja.cmarix@gmail.com', // generated ethereal user
    //     pass: 'pooja@49?' // generated ethereal password
    // }
    host: 'smtp.googlemail.com', // Gmail Host
    port: 465, // Port
    secure: true, // this is true as port is 465
    auth: {
        user: 'viram.cmarix@gmail.com', // generated ethereal user
        pass: 'viram*3311?', // generated ethereal password
    }
});


const getTemplate = (type) => {
    const file = path.join(__dirname, `./html/${type}.hbs`);
    return file;
}

const readFile = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile(name, 'utf-8', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

// let name = "ionic-app-development.html";
// name = name.replace(/\-/g, " ");
// let index = name.indexOf(".");
// name = name.slice(0, index);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/// Send Email to internal office.
const sendEmailToHtml = async (data, filename) => {
    try {
        const filePath = await getTemplate('inquiryOffice');
        const file = await readFile(filePath);
        const template = Handlebars.compile(file);
        const html = template(data);
        const attachments = [];

        if (filename) {
            attachments.push({
                filename: filename,
                path: getFilePath(filename)
            })
        }

        let fromRoute = data.routeName;
        fromRoute = fromRoute.replace(/\-/g, " ").replace(/\//g, "");
        let index = fromRoute.indexOf(".");
        fromRoute = fromRoute.slice(0, index);

        const name = `${data.firstName} ${data.lastName}`;

        await transporter.sendMail({
            from: `${name} <biz@cmarix.com>`, // sender address
            to: "inquiry@cmarix.com", // list of receivers
            // to : "niravp.cmarix@gmail.com",
            subject: `Inquiry from ${data.firstName} ${data.lastName} through ${capitalizeFirstLetter(fromRoute)} page`, // Subject line
            text: "", // plain text body
            html: html, // html body
            attachments: attachments,
            replyTo: data.email
        });
        gmailTransporter.sendMail({
            from: 'viram.cmarix@gmail.com', // sender address
            to: "atmansinh@gmail.com", // list of receivers
            // to : "niravp.cmarix@gmail.com",
            subject: `Inquiry from ${data.firstName} ${data.lastName} through ${capitalizeFirstLetter(fromRoute)} page`, // Subject line
            text: "", // plain text body
            html: html, // html body
            attachments: attachments
        });

    } catch (e) {
        console.log(e);
    }
}

/// Send Email TO user for contact form submit
const sendEmailToUserInquiry = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const filePath = await getTemplate('inquiryUser');
            const file = await readFile(filePath);
            const template = Handlebars.compile(file);
            const html = template(data);
            // const attachments = [];
            const mailOptions = {
                from: "CMARIX TechnoLabs <inquiry@cmarix.com>", // sender address
                // to: "inquiry@cmarix.com, hr@cmarix.com", // list of receivers
                to: data.email,
                subject: "Inquiry submitted to CMARIX TechnoLabs",
                text: "", // plain text body
                html: html, // html body
                replyTo: "inquiry@cmarix.com"
                // attachments: attachments
            };
            transporter.sendMail(mailOptions, function (err, body) {
                //If there is an error, render the error page
                if (err) {
                    console.log(err);
                    return reject({ sattus: 0, message: err });
                }
                //Else we can greet\ and leave
                else {
                    return resolve(body);
                }
            });
        } catch (e) {
            return resolve({ status: 0, message: e });
        }
    });
}

/// Send Email to internal office.
const sendEmailToOfficeCareer = async (filename, data) => {
    try {
        const filePath = await getTemplate('careerOffice');
        const file = await readFile(filePath);
        const template = Handlebars.compile(file);
        const html = template(data);
        const attachments = [];

        if (filename) {
            attachments.push({
                filename: filename,
                path: getFilePath(filename)
            })
        }
        console.log(attachments);
        await transporter.sendMail({
            from: `${data.name} <inquiry@cmarix.com>`, // sender address
            to: "hr@cmarix.com", // list of receivers
            // to : "niravp.cmarix@gmail.com",
            subject: `Job application : ${data.job} ${moment().format("DD-MM-YYYY")}`,
            text: "", // plain text body
            html: html, // html body
            attachments: attachments,
            replyTo: data.email
        });

    } catch (e) {
        console.log(e);
    }
}

/// Send Email To user for Apply Job
const sendEmailToUserCareer = async (data) => {
    try {
        const filePath = await getTemplate('careerUser');
        const file = await readFile(filePath);
        const template = Handlebars.compile(file);
        data['date'] = moment().format("DD-MM-YYYY");
        const html = template(data);

        // const attachments = [];
        await transporter.sendMail({
            from: 'CMARIX TechnoLabs <hr@cmairx.com>', // sender address
            to: data.email,
            subject: "Job application submitted to CMARIX TechnoLabs",
            text: "", // plain text body
            html: html, // html body
            replyTo: "hr@cmarix.com"
            // attachments: attachments
        });
    } catch (e) {
        console.log(e);
    }
}

const sendEmail = async (filename, data, type) => {

}

module.exports = {
    sendEmail,
    sendEmailToHtml,
    sendEmailToOfficeCareer,
    sendEmailToUserInquiry,
    sendEmailToUserCareer
}