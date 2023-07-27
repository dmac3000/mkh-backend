const mongoose = require('mongoose');
const Ingredient = require('./models/Ingredient');

mongoose.connect('mongodb://localhost:27017/myKitchenHyrules', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Array to hold the ingredient data
const ingredients = [
    { name: 'Apple', imageFilename: 'src/assets/ingredient-icons/apple.png' },
    { name: 'Acorn', imageFilename: 'assets/ingredient-icons/acorn.png' },
    { name: 'Cane Sugar', imageFilename: 'cane-sugar.png' },
    { name: 'Chickaloo Tree Nut', imageFilename: 'assets/ingredient-icons/chickaloo-tree-nut.png' },
    { name: 'Courser Bee Honey', imageFilename: 'assets/ingredient-icons/courser-bee-honey.png' },
    { name: 'Fresh Milk', imageFilename: 'assets/ingredient-icons/fresh-milk.png' },
    { name: 'Goat Butter', imageFilename: 'assets/ingredient-icons/goat-butter.png' },
    { name: 'Goron Spice', imageFilename: 'assets/ingredient-icons/goron-spice.png' },
    { name: 'Hylian Rice', imageFilename: 'assets/ingredient-icons/hylian-rice.png' },
    { name: 'Monster Extract', imageFilename: 'assets/ingredient-icons/monster-extract.png' },
    { name: 'Tabantha Wheat', imageFilename: 'assets/ingredient-icons/tabantha-wheat.png' },
    { name: 'Wood', imageFilename: 'assets/ingredient-icons/wood.png' },
  // ...
];

async function populateIngredients() {
  try {
    for (let ingredientData of ingredients) {
      const ingredient = new Ingredient(ingredientData);
      await ingredient.save();
    }
    console.log('Ingredients populated successfully');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

populateIngredients();
