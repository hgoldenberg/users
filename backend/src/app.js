const express = require("express");
const cors = require("cors");
const app = express();

// settngs
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.post("/api/register", (req, res) => res.send("register route"));
app.post("/api/login", (req, res) => res.send("login route"));
app.get("/api/users", (req, res) => res.send("users route"));

module.exports = app;
