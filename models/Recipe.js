const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  effects: [{ type: String }],
  category: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageFilename: { type: String, required: false },
});

// Text index for the `name` and `effects` fields
RecipeSchema.index({ name: 'text', effects: 'text' });

module.exports = mongoose.model('Recipe', RecipeSchema);
