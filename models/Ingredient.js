const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageFilename: { type: String, required: true },
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
