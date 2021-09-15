const utils = require("../Utils/Utils");

const ServicesController = {};

ServicesController.refundCustomer = async (req, res) => {
  try {
    // Make sure all fields are passed
    if (!req.body.fromid || !req.body.toid || !req.body.amount) {
      return res.status(400).json({
        status: "error",
        message: "Please Pass fromid, toid and an Amount before submitting",
        data: {},
      });
    }

    // Get the wallet balance of the customer
    let oldBalance = await utils.fetchWallet(req.body.toid.toString());

    // Fund account
    let newBalance = await utils.fundAccount(
      req.body.fromid,
      req.body.toid,
      req.body.amount
    );

    return res
      .status(200)
      .json({ status: true, data: { customer: { oldBalance, newBalance } } });

    // Api call to Refund customer
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "An error Occured",
      data: err.toString(),
    });
  }
};

module.exports = ServicesController;
