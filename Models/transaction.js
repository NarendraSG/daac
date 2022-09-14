const { Schema, model } = require("mongoose");

module.exports = model("transactions", new Schema({
    name: { type: Schema.Types.String, required: true },
    amount: { type: Schema.Types.Number, required: true },
    date: { type: Schema.Types.Date, required: true },
    category: { type: Schema.Types.ObjectId, required: true }
}))