const mongoose = require('mongoose');
const Ingredient = require('./models/Ingredient');

mongoose.connect('mongodb://localhost:27017/myKitchenHyrules', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Array to hold the ingredient data
const ingredients = [
  
  // In-game classification:"Ingredient"
    { name: 'Acorn', imageFilename: 'assets/ingredient-icons/acorn.png' },
    { name: 'Bird Egg', imageFilename: 'assets/ingredient-icons/bird-egg.png' },
    { name: 'Cane Sugar', imageFilename: 'cane-sugar.png' },
    { name: 'Chickaloo Tree Nut', imageFilename: 'assets/ingredient-icons/chickaloo-tree-nut.png' },
    { name: 'Courser Bee Honey', imageFilename: 'assets/ingredient-icons/courser-bee-honey.png' },
    { name: 'Fresh Milk', imageFilename: 'assets/ingredient-icons/fresh-milk.png' },
    { name: 'Goat Butter', imageFilename: 'assets/ingredient-icons/goat-butter.png' },
    { name: 'Goron Spice', imageFilename: 'assets/ingredient-icons/goron-spice.png' },
    { name: 'Hateno Cheese', imageFilename: 'assets/ingredient-icons/hateno-cheese.png' },
    { name: 'Hylian Rice', imageFilename: 'assets/ingredient-icons/hylian-rice.png' },
    { name: 'Oil Jar', imageFilename: 'assets/ingredient-icons/oil-jar.png' },
    { name: 'Monster Extract', imageFilename: 'assets/ingredient-icons/monster-extract.png' },
    { name: 'Tabantha Wheat', imageFilename: 'assets/ingredient-icons/tabantha-wheat.png' },

  // In-game classification: Vegetable
    {name: 'Big Hearty Radish', imageFilename: 'assets/ingredient-icons/big-hearty-radish.png'},
    {name: 'Endura Carrot', imageFilename: 'assets/ingredient-icons/endura-carrot.png'},
    {name: 'Fortified Pumpkin', imageFilename: 'assets/ingredient-icons/fortified-pumpkin.png'},
    {name: 'Hearty Radish', imageFilename: 'assets/ingredient-icons/hearty-radish.png'},
    {name: 'Sun Pumpkin', imageFilename: 'assets/ingredient-icons/sun-pumpkin.png'},
    {name: 'Swift Carrot', imageFilename: 'assets/ingredient-icons/swift-carrot.png'},

  // In-game classification:"Fruit"
    { name: 'Apple', imageFilename: 'src/assets/ingredient-icons/apple.png' },

    { name: 'Dark Clump', imageFilename: 'src/assets/ingredient-icons/dark-clump.png' },
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
