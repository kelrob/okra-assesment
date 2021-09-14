const ServicesController = require("./Controllers/ServicesController");
const Endpoints = function (router) {
  router.get("/fetch-balance", ServicesController.index);

  return router;
};

module.exports = Endpoints;
