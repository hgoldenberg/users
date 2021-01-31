const { Router } = require("express");
const router = Router();

router.route("/").post((req, res) =>
  res.json({
    message: "register post request",
  })
),
  (module.exports = router);
