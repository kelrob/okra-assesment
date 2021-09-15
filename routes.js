const PublicController = require("./Controllers/PublicController");
const ServicesController = require("./Controllers/ServicesController");
const QuestionOneController = require("./Controllers/QuestionOneController");

const Endpoints = function (router) {
  router.get("/", PublicController.index);
  router.post("/refund-customer", ServicesController.refundCustomer);
  router.get("/question-one", QuestionOneController.index);

  return router;
};

module.exports = Endpoints;
