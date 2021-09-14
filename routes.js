const PublicController = require("./Controllers/PublicController");
const ServicesController = require("./Controllers/ServicesController");

const Endpoints = function (router) {
  router.get("/", PublicController.index);
  router.post("/fetch-balance", ServicesController.fetchBalance);
  router.post("/refund-customer", ServicesController.refundCustomer);

  return router;
};

module.exports = Endpoints;
