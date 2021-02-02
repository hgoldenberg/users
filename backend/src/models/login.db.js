const { Schema, model } = require("mongoose");

const loginSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Login", loginSchema);
