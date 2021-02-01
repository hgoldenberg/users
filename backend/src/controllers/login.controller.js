const loginCtrl = {};

loginCtrl.doLogin = (req, res) =>
  res.json({
    message: "login ",
  });

module.exports = loginCtrl;
