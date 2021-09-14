const axios = require("axios");
const ServicesController = {};

ServicesController.fetchBalance = async (req, res) => {
  try {
    let data = {
      id: 573839293,
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
      error: true,
      message: "An error Occured",
      data: err.toString(),
    });
  }
};

//company ID: 484929849
//customer ID: 573839293

function refundCustomer(company, user, amount) {
  refundCustomer("484929849", "573839293", 2003.0);
}

module.exports = ServicesController;
