const { Router } = require("express");
const router = Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/users.controller");

router.route("/").get(getUsers);
router.route("/register").post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
