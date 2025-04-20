// src/controllers/gameController.ts
import { Request, Response } from 'express';
import Game, { IGame, IGameDetail } from '../models/Game';
import Patient from '../models/Patient';
import mongoose from 'mongoose';

// Add a new game record
export const addGame = async (req: Request, res: Response): Promise<void> => {
  try {
    const game = new Game(req.body);
    await game.save();
    
    // Add game to patient's gamesProgress
    const patient = await Patient.findById(game.patient);
    if (patient) {
      patient.gamesProgress.push(game._id);
      await patient.save();
    }
    
    res.status(201).json({ message: 'Game added successfully!', game });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get game by patient ID
export const getGameByPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const game = await Game.findOne({ patient: req.params.patientId });
    
    if (!game) {
      res.status(404).json({ message: 'Game data not found' });
      return;
    }
    
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Update game details
export const updateGame = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const game = await Game.findByIdAndUpdate(id, updates, { new: true });
    
    if (!game) {
      res.status(404).json({ message: 'Game not found' });
      return;
    }
    
    res.status(200).json({ message: 'Game updated successfully', game });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Add game detail to existing game
export const addGameDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const gameDetail: IGameDetail = req.body;
    
    const game = await Game.findById(id);
    
    if (!game) {
      res.status(404).json({ message: 'Game not found' });
      return;
    }
    
    game.gameDetails.push(gameDetail);
    await game.save();
    
    res.status(200).json({ 
      message: 'Game detail added successfully', 
      gameDetails: game.gameDetails 
    });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get all games
export const getAllGames = async (req: Request, res: Response): Promise<void> => {
  try {
    const games = await Game.find().populate('patient', 'patientName');
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get game by ID
export const getGameById = async (req: Request, res: Response): Promise<void> => {
  try {
    const game = await Game.findById(req.params.id).populate('patient');
    
    if (!game) {
      res.status(404).json({ message: 'Game not found' });
      return;
    }
    
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete a game
export const deleteGame = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const game = await Game.findById(id);
    if (!game) {
      res.status(404).json({ message: 'Game not found' });
      return;
    }
    
    // Remove game from patient's gamesProgress
    const patient = await Patient.findById(game.patient);
    if (patient) {
      const gameIndex = patient.gamesProgress.findIndex(
        g => g.toString() === id
      );
      
      if (gameIndex !== -1) {
        patient.gamesProgress.splice(gameIndex, 1);
        await patient.save();
      }
    }
    
    await Game.findByIdAndDelete(id);
    
    res.status(200).json({ message: 'Game deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};