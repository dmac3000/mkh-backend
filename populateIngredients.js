const mongoose = require('mongoose');
const Ingredient = require('./models/Ingredient');

mongoose.connect('mongodb://localhost:27017/myKitchenHyrules', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Array to hold the ingredient data
const ingredients = [
  
  // In-game classification:"Ingredient"
    { name: 'Bird Egg', imageFilename: 'assets/ingredient-icons/bird-egg.png' },
    { name: 'Cane Sugar', imageFilename: 'cane-sugar.png' },
    { name: 'Chickaloo Tree Nut', imageFilename: 'assets/ingredient-icons/chickaloo-tree-nut.png' },
    { name: 'Courser Bee Honey', imageFilename: 'assets/ingredient-icons/courser-bee-honey.png' },
    { name: 'Dark Clump', imageFilename: 'src/assets/ingredient-icons/dark-clump.png' },
    { name: 'Fresh Milk', imageFilename: 'assets/ingredient-icons/fresh-milk.png' },
    { name: 'Goat Butter', imageFilename: 'assets/ingredient-icons/goat-butter.png' },
    { name: 'Goron Spice', imageFilename: 'assets/ingredient-icons/goron-spice.png' },
    { name: 'Hateno Cheese', imageFilename: 'assets/ingredient-icons/hateno-cheese.png' },
    { name: 'Hylian Pine Cone', imageFilename: 'hylian-pine-cone.png' },
    { name: 'Hylian Rice', imageFilename: 'assets/ingredient-icons/hylian-rice.png' },
    { name: 'Large Zonai Charge', imageFilename: 'large-zonai-charge.png' },
    { name: 'Monster Extract', imageFilename: 'assets/ingredient-icons/monster-extract.png' },
    { name: 'Oil Jar', imageFilename: 'assets/ingredient-icons/oil-jar.png' },
    { name: 'Star Fragment', imageFilename: 'assets/ingredient-icons/star-fragment.png' },
    { name: 'Tabantha Wheat', imageFilename: 'assets/ingredient-icons/tabantha-wheat.png' },
    { name: 'Wood', imageFilename: 'wood.png' },
    { name: 'Zonai Charge', imageFilename: 'assets/ingredient-icons/zonai-charge.png' },

  // In-game classification: Vegetable
    { name: 'Big Hearty Radish', imageFilename: 'assets/ingredient-icons/big-hearty-radish.png'},
    { name: 'Endura Carrot', imageFilename: 'assets/ingredient-icons/endura-carrot.png'},
    { name: 'Fortified Pumpkin', imageFilename: 'assets/ingredient-icons/fortified-pumpkin.png'},
    { name: 'Hearty Radish', imageFilename: 'assets/ingredient-icons/hearty-radish.png'},
    { name: 'Sun Pumpkin', imageFilename: 'assets/ingredient-icons/sun-pumpkin.png'},
    { name: 'Swift Carrot', imageFilename: 'assets/ingredient-icons/swift-carrot.png'},

 // In-game classification: Shroom
    { name: 'Big Hearty Truffle', imageFilename: 'big-hearty-truffle.png' },
    { name: 'Brightcap', imageFilename: 'brightcap.png' },
    { name: 'Chillshroom', imageFilename: 'chillshroom.png' },
    { name: 'Endura Shroom', imageFilename: 'endura-shroom.png' },
    { name: 'Hearty Truffle', imageFilename: 'hearty-truffle.png' },
    { name: 'Hylian Shroom', imageFilename: 'hylian-shroom.png' },
    { name: 'Ironshroom', imageFilename: 'ironshroom.png' },
    { name: 'Puffshroom', imageFilename: 'puffshroom.png' },
    { name: 'Razorshroom', imageFilename: 'razorshroom.png' },
    { name: 'Rushroom', imageFilename: 'rushroom.png' },
    { name: 'Silent Shroom', imageFilename: 'silent-shroom.png' },
    { name: 'Skyshroom', imageFilename: 'skyshroom.png' },
    { name: 'Stamella Shroom', imageFilename: 'stamella-shroom.png' },
    { name: 'Sunshroom', imageFilename: 'sunshroom.png' },
    { name: 'Zapshroom', imageFilename: 'zapshroom.png' },

 // In-game classification: Seafood
    { name: 'Ancient Arowana', imageFilename: 'ancient-arowana.png' },
    { name: 'Armored Carp', imageFilename: 'armored-carp.png' },
    { name: 'Armored Porgy', imageFilename: 'armored-porgy.png' },
    { name: 'Bright-Eyed Crab', imageFilename: 'bright-eyed-crab.png' },
    { name: 'Chillfin Trout', imageFilename: 'chillfin-trout.png' },
    { name: 'Glowing Cave Fish', imageFilename: 'glowing-cave-fish.png' },
    { name: 'Hearty Bass', imageFilename: 'hearty-bass.png' },
    { name: 'Hearty Blueshell Snail', imageFilename: 'hearty-blueshell-snail.png' },
    { name: 'Hearty Salmon', imageFilename: 'hearty-salmon.png' },
    { name: 'Hyrule Bass', imageFilename: 'hyrule-bass.png' },
    { name: 'Ironshell Crab', imageFilename: 'ironshell-crab.png' },
    { name: 'Mighty Carp', imageFilename: 'mighty-carp.png' },
    { name: 'Mighty Porgy', imageFilename: 'mighty-porgy.png' },
    { name: 'Razorclaw Crab', imageFilename: 'razorclaw-crab.png' },
    { name: 'Sanke Carp', imageFilename: 'sanke-carp.png' },
    { name: 'Sizzlefin Trout', imageFilename: 'sizzlefin-trout.png' },
    { name: 'Sneaky River Snail', imageFilename: 'sneaky-river-snail.png' },
    { name: 'Staminoka Bass', imageFilename: 'staminoka-bass.png' },
    { name: 'Stealthfin Trout', imageFilename: 'stealthfin-trout.png' },
    { name: 'Voltfin Trout', imageFilename: 'voltfin-trout.png' },

  // In-game classification:"Plant"
    { name: 'Acorn', imageFilename: 'assets/ingredient-icons/acorn.png' },
    { name: 'Armoranth', imageFilename: 'assets/ingredient-icons/armoranth.png' },
    { name: 'Blue Nightshade', imageFilename: 'assets/ingredient-icons/blue-nightshade.png' },
    { name: 'Bomb Flower', imageFilename: 'assets/ingredient-icons/bomb-flower.png' },
    { name: 'Brightbloom Seed', imageFilename: 'assets/ingredient-icons/brightbloom-seed.png' },
    { name: 'Cool Safflina', imageFilename: 'assets/ingredient-icons/cool-safflina.png' },
    { name: 'Electric Safflina', imageFilename: 'assets/ingredient-icons/electric-safflina.png' },
    { name: 'Giant Brightbloom Seed', imageFilename: 'assets/ingredient-icons/giant-brightbloom-seed.png' },
    { name: 'Hyrule Herb', imageFilename: 'assets/ingredient-icons/hyrule-herb.png' },
    { name: 'Korok Frond', imageFilename: 'assets/ingredient-icons/korok-frond.png' },
    { name: 'Mighty Thistle', imageFilename: 'assets/ingredient-icons/mighty-thistle.png' },
    { name: 'Muddle-Bud', imageFilename: 'assets/ingredient-icons/muddle-bud.png' },
    { name: 'Silent Princess', imageFilename: 'assets/ingredient-icons/silent-princess.png' },
    { name: 'Stambulb', imageFilename: 'assets/ingredient-icons/stambulb.png' },
    { name: 'Sundelion', imageFilename: 'assets/ingredient-icons/sundelion.png' },
    { name: 'Swift Violet', imageFilename: 'assets/ingredient-icons/swift-violet.png' },
    { name: 'Warm Safflina', imageFilename: 'assets/ingredient-icons/warm-safflina.png' },
 
  // In-game classification:"Meat"
    { name: 'Raw Bird Drumstick', imageFilename: 'assets/ingredient-icons/raw-bird-drumstick.png' },
    { name: 'Raw Bird Thigh', imageFilename: 'assets/ingredient-icons/raw-bird-thigh.png' },
    { name: 'Raw Gourmet Meat', imageFilename: 'assets/ingredient-icons/raw-gourmet-meat.png' },
    { name: 'Raw Meat', imageFilename: 'assets/ingredient-icons/raw-meat.png' },
    { name: 'Raw Prime Meat', imageFilename: 'assets/ingredient-icons/raw-prime-meat.png' },
    { name: 'Raw Whole Bird', imageFilename: 'assets/ingredient-icons/raw-whole-bird.png' },


   // In-game classification:"Fruit"
    { name: 'Apple', imageFilename: 'src/assets/ingredient-icons/apple.png' },
    { name: 'Wildberry', imageFilename: 'wildberry.png' },
    { name: 'Spicy Pepper', imageFilename: 'spicy-pepper.png' },
    { name: 'Voltfruit', imageFilename: 'voltfruit.png' },
    { name: 'Hearty Durian', imageFilename: 'hearty-durian.png' },
    { name: 'Hydromelon', imageFilename: 'hydromelon.png' },
    { name: 'Hylian Tomato', imageFilename: 'hylian-tomato.png' },
    { name: 'Golden Apple', imageFilename: 'golden-apple.png' },
    { name: 'Fire Fruit', imageFilename: 'fire-fruit.png' },
    { name: 'Ice Fruit', imageFilename: 'ice-fruit.png' },
    { name: 'Shock Fruit', imageFilename: 'shock-fruit.png' },
    { name: 'Palm Fruit', imageFilename: 'palm-fruit.png' },
    { name: 'Mighty Bananas', imageFilename: 'mighty-bananas.png' },   
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
