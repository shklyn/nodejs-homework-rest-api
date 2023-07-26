const nodemailer = require("nodemailer");
require("dotenv").config();

const { NODEMAILER_API_KEY, BASE_URL } = process.env;


const sendVerificationEmail = ({ email, verificationToken }) => {
  try {
    const mailConfig = {
      host: "smtp.ukr.net",
      port: 2525,
      secure: true,
      auth: {
        user: "shoni0807@ukr.net",
        pass: NODEMAILER_API_KEY,
      },
    }

    const transposter = nodemailer.createTransport(mailConfig)

    const emailOptions = {
      from: "shoni0807@ukr.net",
      to: email,
      subject: "verification",
      html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`
    }

    transposter
      .sendMail(emailOptions)
      .then((info) => console.log(info))
      .catch((err) => console.log(err));
      
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendVerificationEmail;
