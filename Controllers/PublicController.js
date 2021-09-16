const axios = require("axios");

const PublicController = {};

PublicController.index = (req, res) => {
  sess = req.session;
  const data = sess.data;
  res.render("pages/index", {
    data: data,
  });
};

PublicController.dashboard = (req, res) => {
  if (
    typeof req.session.data !== "object" ||
    req.session.data.message === "okra-logout-bingo"
  ) {
    req.session.destroy();
    return res.redirect("/");
  }

  sess = req.session;
  res.render("pages/dashboard", {
    data: sess.data,
  });
};

PublicController.logout = (req, res) => {
  axios
    .get("https://api.okra.ng/v2/mock-api/logout")
    .then((response) => {
      sess = req.session;
      const data = response.data;
      sess.data = data;
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      const data = err.response.data;
      res.render("pages/index", {
        data: data,
      });
    });
};

PublicController.login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    axios
      .post(
        "https://api.okra.ng/v2/mock-api/login",
        { username: username, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        sess = req.session;
        const data = response.data;
        sess.data = data;
        res.redirect("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        const data = err.response.data;
        res.render("pages/index", {
          data: data,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

PublicController.apiHealthCheck = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "We are Live and Good to Go!",
    data: {},
  });
};

module.exports = PublicController;
