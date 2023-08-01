const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false }, // new field
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  effects: [{ type: String }],
  category: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  imageFilename: { type: String, required: false },
});

module.exports = mongoose.model('Recipe', RecipeSchema);