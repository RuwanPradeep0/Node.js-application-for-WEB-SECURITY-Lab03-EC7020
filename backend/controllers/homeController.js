// controllers/homeController.js
const homeService = require('../services/homeService');

exports.home = (req, res) => {
  const message = homeService.getHomeMessage();
  res.send(`<h1>${message}</h1>`);
};

exports.apiData = (req, res) => {
  const data = homeService.getApiData();
  res.json(data);
};
