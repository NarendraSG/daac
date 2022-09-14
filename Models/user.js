const { Schema, model } = require("mongoose");

module.exports = model("users", new Schema({
    email: { type: "string", required: true }
}))