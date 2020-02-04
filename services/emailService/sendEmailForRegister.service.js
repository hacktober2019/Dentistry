const mailer = require('nodemailer');

const {EMAIL_DATES} = require('../../constant');

//TODO REPLACE EMAIL SENDER TO SERVICE!!!
module.exports = async (email, name, middleName) => { // TODO user not used!

    const transport = mailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAIL_DATES.EMAIL,
            pass: EMAIL_DATES.PASSWORD
        }
    });

    await transport.sendMail({
        from: `Dentistry👻 ${EMAIL_DATES.EMAIL} `,
        to: email,
        subject: 'Hello!',
        html: template()
    });

    function template() {
        return `<h1> Registration </h1>
         <br>
         <p>Hello, ${name} ${middleName}. Congratulations in our dentistry.</p>
    
         `;
    }
};