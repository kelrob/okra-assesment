const axios = require("axios");
const { response } = require("express");
const ServicesController = {};

ServicesController.fetchBalance = async (req, res) => {
  try {
    if (!req.body.id) {
      return res
        .status(400)
        .json({ status: "error", message: "Please Pass an Id", data: {} });
    }

    let data = {
      id: req.body.id,
    };
    axios
      .post("https://api.okra.ng/v2/mock-api/fetch-wallet", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return res.json(response.data);
      })
      .catch((err) => {
        return res.status(500).json(err.response.data);
      });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "An error Occured",
      data: err.toString(),
    });
  }
};

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
    let oldBalance = await fetchWallet(req.body.toid);
    return res.json(oldBalance);

    // Fund account
    let newBalance = await fundAccount(
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

const fetchWallet = async (id) => {
  const wallet = await axios.post(
    "https://api.okra.ng/v2/mock-api/fetch-wallet",
    { id: id },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return (walletBalance = wallet.data.data.wallet.amount);
};

const fundAccount = async (from, to, amount) => {
  const fundwallet = await axios.post(
    "https://api.okra.ng/v2/mock-api/pay",
    { from_id: from, to_id: to, amount: amount },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (fundwallet.data.status === "success") {
    return fundwallet.data.data.wallets.to.amount;
  }
};
module.exports = ServicesController;
