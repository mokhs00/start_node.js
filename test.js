const { info } = require("console");
const nodemailer = require("nodemailer");

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "user",
    pass: "pass",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let data = {
    from : 'rlagkstn36@gmail.com',
    to : 'rlagkstn36@gmail.com',
    subject : '테스트 메일입니다.',
    text : 'node.js nodemailer test'
}

send(data);