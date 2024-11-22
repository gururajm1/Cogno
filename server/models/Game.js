// models/Game.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  disabilityName: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
  gameDetails: [{
    gameName: { type: String, required: true },
    difficultyLevel: { type: String, required: true },
    avgScore: { type: Number, required: true },
    highestScore: { type: Number, required: true },
  }]
});

module.exports = mongoose.model('Game', gameSchema);
