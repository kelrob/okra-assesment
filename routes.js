const PublicController = require("./Controllers/PublicController");
const ServicesController = require("./Controllers/ServicesController");

const Endpoints = function (router) {
  router.get("/", PublicController.index);
  router.get("/fetch-balance", ServicesController.fetchBalance);

  return router;
};

module.exports = Endpoints;
