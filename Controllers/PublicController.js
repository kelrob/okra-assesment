const PublicController = {};

PublicController.index = async (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "We are Live and Good to Go!",
    data: {},
  });
};

module.exports = PublicController;
