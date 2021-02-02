const express = require("express");
const cors = require("cors");
const app = express();

// settngs
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes

app.use("/api/login", require("./routes/login"));
app.use("/api/users", require("./routes/users"));

module.exports = app;
