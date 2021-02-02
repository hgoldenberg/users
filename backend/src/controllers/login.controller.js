const loginCtrl = {};
const Login = require("../models/login.db");

loginCtrl.createLogin = async (req, res) => {
  const { email } = req.body;
  const newLogin = new Login({
    email: email,
  });
  await newLogin.save();
  res.json({
    message: "login success ",
  });
};

loginCtrl.getLogins = async (req, res) => {
  const logins = await Login.find();
  res.json(logins);
};

loginCtrl.getLogin = async (req, res) => {
  const login = await Login.findById(req.params.id);
  res.json(login);
};

module.exports = loginCtrl;
