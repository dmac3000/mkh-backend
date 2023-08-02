const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if email or username already exists
    const userExists = await User.findOne({ $or: [{username}, {email}] });
    if (userExists) return res.status(400).json({ message: 'User or email already exists' });

    const user = new User({ username, password, email });
    await user.save();
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Cannot find user' });
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: 'Invalid password' });
    const token = jwt.sign({ username }, 'SECRET_KEY', { expiresIn: '2h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/recipes', async (req, res) => {
  try {
    const { name, effects, ingredients, imageFilename, description } = req.body;  // include description here

    console.log("Incoming Request Body: ", req.body); // Added this line for debugging

    // Convert ingredient names to ids
    const ingredientPromises = ingredients.map(ingredientName => Ingredient.findOne({ name: ingredientName }));
    const ingredientDocs = await Promise.all(ingredientPromises);
    const ingredientIds = ingredientDocs.map(ingredient => ingredient._id);

    console.log("Incoming image: ", imageFilename);  // <-- Corrected line

    const newRecipe = new Recipe({
      name,
      effects,
      ingredients: ingredientIds,
      imageFilename,
      description,  // and here
      // createdBy: req.user._id, // Uncomment this if you want to save who created the recipe
    });

    console.log("New Recipe imageFilename: ", newRecipe.imageFilename);
    console.log("New Recipe before save: ", newRecipe); // Added this line for debugging

    await newRecipe.save();

    res.status(201).json(newRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/ingredients', async (req, res) => {
  try {
    const ingredients = await Ingredient.find({}); // Find all ingredients
    res.status(200).json(ingredients); // Send the ingredients as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

//  search route
router.get('/recipes/search', async (req, res) => {
  try {
    const term = req.query.term;
    const recipes = await Recipe.find({
      $text: {
        $search: term,
      },
    }).populate('ingredients'); // populate the ingredients field debugging
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



//  Get all recipes
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('ingredients');
    res.status(200).json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a single recipe
router.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('ingredients');
    console.log(recipe);  // Add this line
    res.status(200).json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});





module.exports = router;
