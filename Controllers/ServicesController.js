const axios = require("axios");
const ServicesController = {};

//axios.create({ baseUrl: "https://api.okra.ng/v2/mock-api/" });

ServicesController.index = async (req, res) => {
  try {
    axios
      .post("https://api.okra.ng/v2/mock-api/", {
        id: "573839293",
      })
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res.status(500).json({
          error: true,
          message: "An error Occured",
          data: err.toString(),
        });
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
