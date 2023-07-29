const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String }],  // Change this line
  effects: [{ type: String }],
  category: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  imageFilename: { type: String, required: false },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
