const { Router } = require("express");
const router = Router();

router.route("/").get((req, res) =>
  res.json({
    message: "users get request",
  })
);

router
  .route("/:id")
  .get((req, res) =>
    res.json({
      message: "GET ID - request",
    })
  )
  .put((req, res) =>
    res.json({
      message: "PUT ID - request",
    })
  )
  .delete((req, res) =>
    res.json({
      message: "DELETE ID - request",
    })
  );

module.exports = router;
