const registerCtrl = {};

registerCtrl.createUser = (req, res) =>
  res.json({
    message: "create user",
  });

module.exports = registerCtrl;
