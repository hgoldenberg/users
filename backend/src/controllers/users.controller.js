const usersCtrl = {};

usersCtrl.getUsers = (req, res) =>
  res.json({
    message: "users get request",
  });

usersCtrl.getUser = (req, res) =>
  res.json({
    message: "GET ID user - request",
  });

usersCtrl.updateUser = (req, res) =>
  res.json({
    message: "PUT ID user - request",
  });

usersCtrl.deleteUser = (req, res) =>
  res.json({
    message: "DELETE ID user - request",
  });

module.exports = usersCtrl;
