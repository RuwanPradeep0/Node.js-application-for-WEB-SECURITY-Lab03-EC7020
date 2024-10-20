// config/httpsConfig.js
const fs = require('fs');
const path = require('path');

const key = fs.readFileSync(path.join(__dirname, '../certs/key.pem'));
const cert = fs.readFileSync(path.join(__dirname, '../certs/cert.pem'));

module.exports = {
  key: key,
  cert: cert
};
