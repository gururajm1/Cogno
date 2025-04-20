// src/models/Game.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IPatient } from './Patient';

export interface IGameDetail {
  gameName: string;
  difficultyLevel: string;
  avgScore: number;
  highestScore: number;
  playedAt?: Date;
  duration?: number;
  eegCorrelation?: number[];
}

export interface IGame extends Document {
  disabilityName: string;
  patient: mongoose.Types.ObjectId | IPatient;
  gameDetails: IGameDetail[];
  createdAt: Date;
  updatedAt: Date;
}

const gameSchema = new Schema({
  disabilityName: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  gameDetails: [{
    gameName: { type: String, required: true },
    difficultyLevel: { type: String, required: true },
    avgScore: { type: Number, required: true },
    highestScore: { type: Number, required: true },
    playedAt: { type: Date, default: Date.now },
    duration: { type: Number }, // in seconds
    eegCorrelation: [Number] // correlation between EEG data and game performance
  }]
}, { timestamps: true });

export default mongoose.model<IGame>('Game', gameSchema);