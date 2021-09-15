const axios = require("axios");
const utils = {};

utils.fetchWallet = async (id) => {
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

utils.fundAccount = async (from, to, amount) => {
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

module.exports = utils;
