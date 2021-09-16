const PublicController = require("./Controllers/PublicController");
const ServicesController = require("./Controllers/ServicesController");
const QuestionOneController = require("./Controllers/QuestionOneController");

const Endpoints = function (router) {
  router.get("/", PublicController.index);
  router.get("/dashboard", PublicController.dashboard);
  router.get("/refresh-balance/:id", PublicController.refreshBalance);
  router.get("/logout", PublicController.logout);
  router.get("/api", PublicController.apiHealthCheck);
  router.post("/api/refund-customer", ServicesController.refundCustomer);
  router.get("/api/question-one", QuestionOneController.index);

  // Form Submission
  router.post("/", PublicController.login);

  return router;
};

module.exports = Endpoints;
