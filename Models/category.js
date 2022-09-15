const { Schema, model } = require("mongoose");

module.exports = model("categories", new Schema({
    name: { type: Schema.Types.String, required: true },
    type: { type: Schema.Types.String, required: true },
    isUserDefined: { type: Schema.Types.Boolean, required: true },
    user: { type: Schema.Types.ObjectId, default: null, required: false }
}))