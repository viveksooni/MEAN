const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '68807345286-tugm5c39n5p9eoihnaqsj4ffp0j7d1l6.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04-FGzThuw0DdCgYIARAAGAQSNwF-L9IrPV6B7Dctlvb-YSq8wEBfY1Bb2HlNomk29t1BO7zoEdCuVZl7DrRZjkPnPoQdRKHUd7A';


const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(mailOptions) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'studying.purpose0@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });


    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}



module.exports={
  sendMail
}