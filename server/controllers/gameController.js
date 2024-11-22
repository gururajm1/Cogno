// controllers/gameController.js
const Game = require('../models/Game');

exports.addGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json({ message: 'Game added successfully!', game });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getGameByPatient = async (req, res) => {
  try {
    const game = await Game.findOne({ patient: req.params.patientId });
    if (!game) {
      return res.status(404).json({ message: 'Game data not found' });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
