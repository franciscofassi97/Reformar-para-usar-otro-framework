require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  URL_MONGO: process.env.URL_MONGO,
  CONTENEDOR: process.env.CONTENEDOR,
  MAIL: process.env.GMAIL,
  PASS: process.env.PASSGMAIL,
  ACCOUNT_SID: process.env.ACCOUNT_SID,
  TOKEN: process.env.TOKEN,
  TWILIO_NUMBER_FROM: process.env.TWILIO_NUMBER_FROM,
  TWILIO_NUMBER_TO: process.env.TWILIO_NUMBER_TO,
  MODOFORK: process.env.MODOFORK
};