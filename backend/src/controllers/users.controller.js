const usersCtrl = {};
const User = require("../models/users.db");

usersCtrl.getUsers = async (req, res) => {
  const usuarios = await User.find();
  res.json(usuarios);
};

usersCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

usersCtrl.updateUser = async (req, res) => {
  const { name, lastname, email, password, dni, address } = req.body;
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      name,
      lastname,
      email,
      password,
      dni,
      address,
    }
  );
  res.json({
    message: "PUT ID user - request",
  });
};

usersCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({
    message: "DELETE ID user - request",
  });
};

usersCtrl.createUser = async (req, res) => {
  const { name, lastname, email, password, dni, address } = req.body;
  const newUser = new User({
    name: name,
    lastname: lastname,
    email: email,
    password: password,
    dni: dni,
    address: address,
  });
  await newUser.save();
  res.json({
    message: "create user",
  });
};

module.exports = usersCtrl;
