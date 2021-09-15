const _ = require("lodash");

const QuestionOneController = {};

QuestionOneController.index = (req, res) => {
  _.times(3, connectApp);
  res.json(_.times(3, connectApp));
};

let app = {
  id: "484929849",
  company_name: "Budget Core Limited",
  slug: "budget-core-app",
};

let user = {
  id: "573839293",
  name: "Dami Banwo",
  accounts: [
    {
      id: "3084202491",
      name: "Core Savings",
      act_no: 1933849303,
      connected: true,
      connected_apps: ["catch-a-ride-app"],
    },
    {
      id: "3084202492",
      name: "Current Account",
      act_no: 2844908489,
      connected: false,
      connected_apps: [],
    },
  ],
};

function connectApp() {
  // New Account List
  let new_accounts = [];

  // Loop through all Current Apps to add to new account list
  user.accounts.map((account) => {
    let new_account = JSON.parse(JSON.stringify(account));

    new_accounts.push(new_account);

    if (account.connected === true) {
      // Loop through connected apps and make sure it is added just once
      new_accounts[0].connected_apps.forEach((connected_app) => {
        if (new_accounts[0].connected_apps.indexOf(app.slug) === -1) {
          new_accounts[0].connected_apps.push(app.slug);
        }
      });
    }
  });

  user.accounts = new_accounts;
  return new_accounts;
}

module.exports = QuestionOneController;
