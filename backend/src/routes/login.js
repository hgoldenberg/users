const { Router } = require("express");
const router = Router();

router.route("/").post((req, res) =>
  res.json({
    message: "login post request",
  })
);

module.exports = router;
