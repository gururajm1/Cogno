const express = require('express');
const router = express.Router();
const Disorder = require('../models/Disorder');

// @route   GET api/disorders
// @desc    Get all disorders
// @access  Public
router.get('/', async (req, res) => {
  try {
    const disorders = await Disorder.find();
    res.json(disorders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/disorders/:id
// @desc    Get disorder by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const disorder = await Disorder.findOne({ id: req.params.id });
    
    if (!disorder) {
      return res.status(404).json({ msg: 'Disorder not found' });
    }
    
    res.json(disorder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/disorders
// @desc    Create a disorder
// @access  Private (Admin only - middleware to be added)
router.post('/', async (req, res) => {
  try {
    const { id, title, description, icon, color, games } = req.body;

    // Check if disorder already exists
    let disorder = await Disorder.findOne({ id });
    if (disorder) {
      return res.status(400).json({ msg: 'Disorder already exists' });
    }

    // Create new disorder
    disorder = new Disorder({
      id,
      title,
      description,
      icon,
      color,
      games: games || []
    });

    await disorder.save();
    res.json(disorder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/disorders/:id
// @desc    Update a disorder
// @access  Private (Admin only - middleware to be added)
router.put('/:id', async (req, res) => {
  try {
    const { title, description, icon, color, games } = req.body;
    
    // Build disorder object
    const disorderFields = {};
    if (title) disorderFields.title = title;
    if (description) disorderFields.description = description;
    if (icon) disorderFields.icon = icon;
    if (color) disorderFields.color = color;
    if (games) disorderFields.games = games;
    
    let disorder = await Disorder.findOne({ id: req.params.id });
    
    if (!disorder) {
      return res.status(404).json({ msg: 'Disorder not found' });
    }
    
    disorder = await Disorder.findOneAndUpdate(
      { id: req.params.id },
      { $set: disorderFields },
      { new: true }
    );
    
    res.json(disorder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/disorders/:id
// @desc    Delete a disorder
// @access  Private (Admin only - middleware to be added)
router.delete('/:id', async (req, res) => {
  try {
    const disorder = await Disorder.findOne({ id: req.params.id });
    
    if (!disorder) {
      return res.status(404).json({ msg: 'Disorder not found' });
    }
    
    await Disorder.findOneAndRemove({ id: req.params.id });
    
    res.json({ msg: 'Disorder removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 