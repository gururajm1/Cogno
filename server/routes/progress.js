const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// @route   GET api/progress/user
// @desc    Get all progress for a user
// @access  Private (middleware to be added)
router.get('/user', async (req, res) => {
  try {
    // This will be modified once auth middleware is implemented
    // For now, it's just placeholder
    const progress = await Progress.find({ user: req.user.id });
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/progress/disorder/:disorderId
// @desc    Get user progress for a specific disorder
// @access  Private (middleware to be added)
router.get('/disorder/:disorderId', async (req, res) => {
  try {
    const progress = await Progress.find({
      user: req.user.id,
      disorderId: req.params.disorderId
    });
    
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/progress/game/:gameId
// @desc    Get user progress for a specific game
// @access  Private (middleware to be added)
router.get('/game/:gameId', async (req, res) => {
  try {
    const progress = await Progress.find({
      user: req.user.id,
      gameId: req.params.gameId
    });
    
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/progress
// @desc    Create or update user game progress
// @access  Private (middleware to be added)
router.post('/', async (req, res) => {
  const {
    disorderId,
    gameId,
    score,
    timeSpent,
    mistakes,
    completed
  } = req.body;
  
  try {
    let progress = await Progress.findOne({
      user: req.user.id,
      disorderId,
      gameId
    });
    
    // Create a new result entry
    const newResult = {
      score,
      timeSpent,
      mistakes,
      completed,
      date: Date.now()
    };
    
    if (progress) {
      // Update existing progress
      progress.results.unshift(newResult);
      
      // Update aggregate stats
      const totalResults = progress.results.length;
      const totalScore = progress.results.reduce((sum, result) => sum + result.score, 0);
      progress.averageScore = totalScore / totalResults;
      progress.totalTimeSpent += timeSpent;
      progress.gamesPlayed = totalResults;
      progress.lastPlayed = Date.now();
      
      await progress.save();
      return res.json(progress);
    }
    
    // Create new progress
    progress = new Progress({
      user: req.user.id,
      disorderId,
      gameId,
      results: [newResult],
      averageScore: score,
      totalTimeSpent: timeSpent,
      gamesPlayed: 1,
      lastPlayed: Date.now()
    });
    
    await progress.save();
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/progress/stats
// @desc    Get aggregated stats for user
// @access  Private (middleware to be added)
router.get('/stats', async (req, res) => {
  try {
    const allProgress = await Progress.find({ user: req.user.id });
    
    // Calculate total stats
    const stats = {
      totalGamesPlayed: 0,
      totalTimeSpent: 0,
      averageScore: 0,
      disorderProgress: {},
      recentActivity: []
    };
    
    if (allProgress.length === 0) {
      return res.json(stats);
    }
    
    let totalScore = 0;
    
    allProgress.forEach(progress => {
      stats.totalGamesPlayed += progress.gamesPlayed;
      stats.totalTimeSpent += progress.totalTimeSpent;
      totalScore += progress.averageScore * progress.gamesPlayed;
      
      // Group by disorder
      if (!stats.disorderProgress[progress.disorderId]) {
        stats.disorderProgress[progress.disorderId] = {
          gamesPlayed: 0,
          timeSpent: 0,
          averageScore: 0
        };
      }
      
      stats.disorderProgress[progress.disorderId].gamesPlayed += progress.gamesPlayed;
      stats.disorderProgress[progress.disorderId].timeSpent += progress.totalTimeSpent;
      
      // Add recent activity
      if (progress.results.length > 0) {
        progress.results.slice(0, 5).forEach(result => {
          stats.recentActivity.push({
            disorderId: progress.disorderId,
            gameId: progress.gameId,
            score: result.score,
            date: result.date
          });
        });
      }
    });
    
    // Sort recent activity by date
    stats.recentActivity.sort((a, b) => b.date - a.date);
    
    // Limit to 10 most recent activities
    stats.recentActivity = stats.recentActivity.slice(0, 10);
    
    // Calculate overall average score
    stats.averageScore = totalScore / stats.totalGamesPlayed;
    
    // Calculate average score for each disorder
    Object.keys(stats.disorderProgress).forEach(disorderId => {
      const disorderStats = stats.disorderProgress[disorderId];
      const disorderProgresses = allProgress.filter(p => p.disorderId === disorderId);
      
      let disorderTotalScore = 0;
      disorderProgresses.forEach(p => {
        disorderTotalScore += p.averageScore * p.gamesPlayed;
      });
      
      disorderStats.averageScore = disorderTotalScore / disorderStats.gamesPlayed;
    });
    
    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 