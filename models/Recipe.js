const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  effects: [{ type: String }],
  category: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  imageFilename: { type: String, required: false },
  hearts: { type: Number, required: true },
});

// Text index for the `name` and `effects` fields - for searchability
RecipeSchema.index({ name: "text", effects: "text" });

module.exports = mongoose.model("Recipe", RecipeSchema);
