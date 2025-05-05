"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Play, Square, Brain, AlertCircle } from 'lucide-react';
import { Expression, GameState, GameStats } from '../types';
import { GameAnalytics } from './GameAnalytics';
import { WordGame } from './WordGame';

// Import webcam dynamically to avoid SSR issues
const DynamicWebcam = dynamic(() => import('react-webcam'), { ssr: false });

const DETECTION_INTERVAL = 200; // More frequent updates
const WEBCAM_CONFIG = {
  width: 320,
  height: 240,
  facingMode: "user"
};

interface DetectionResult {
  expression: Expression;
  probability: number;
}

// Simulated facial expression detection until face-api.js models are properly loaded
const detectRandomExpression = (): DetectionResult[] => {
  const expressions: Expression[] = ['Excited', 'Bored', 'Confused', 'Focused', 'Other'];
  
  // Generate random expression probabilities (with Focused having higher chance)
  const probabilities = expressions.map(exp => ({
    expression: exp,
    probability: Math.random() * (exp === 'Focused' ? 1.5 : 1)
  }));
  
  // Normalize to ensure probabilities sum to 1
  const sum = probabilities.reduce((sum, p) => sum + p.probability, 0);
  return probabilities.map(p => ({
    expression: p.expression,
    probability: p.probability / sum
  }));
};

export const Game: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    score: 0,
    startTime: null,
    expressions: []
  });
  const [currentExpression, setCurrentExpression] = useState<Expression | null>(null);
  const [detectionResults, setDetectionResults] = useState<DetectionResult[]>([]);
  const [gameStats, setGameStats] = useState<GameStats | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(true); // Set to true for simulated detection
  
  const detectionInterval = useRef<number>();

  const getTopExpression = (detections: DetectionResult[]): Expression => {
    if (!detections.length) return 'Focused';
    
    const topResult = detections.reduce((prev, current) => 
      prev.probability > current.probability ? prev : current
    );
    
    return topResult.expression;
  };

  const startGame = useCallback(() => {
    setGameState({
      isPlaying: true,
      score: 0,
      startTime: Date.now(),
      expressions: []
    });
    
    detectionInterval.current = window.setInterval(() => {
      // Generate simulated expression detection
      const detections = detectRandomExpression();
      const topExpression = getTopExpression(detections);
      
      setDetectionResults(detections);
      setCurrentExpression(topExpression);
      
      // Update game state with new expression
      setGameState(prev => ({
        ...prev,
        expressions: [...prev.expressions, { timestamp: Date.now(), expression: topExpression }],
        score: prev.score + (topExpression === 'Focused' ? 2 : 1)
      }));
    }, DETECTION_INTERVAL);
  }, []);

  const endGame = useCallback(() => {
    if (detectionInterval.current) {
      clearInterval(detectionInterval.current);
    }

    const duration = Date.now() - (gameState.startTime || Date.now());
    
    const expressionCounts: Record<Expression, number> = {
      Excited: 0,
      Bored: 0,
      Confused: 0,
      Focused: 0,
      Other: 0
    };
    
    gameState.expressions.forEach(({ expression }) => {
      expressionCounts[expression]++;
    });

    const total = gameState.expressions.length || 1;
    const expressionPercentages = Object.entries(expressionCounts).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value / total
    }), {} as Record<Expression, number>);

    const insights = [
      `Reading Focus: ${Math.round(expressionPercentages.Focused * 100)}%`,
      `Confusion Rate: ${Math.round(expressionPercentages.Confused * 100)}%`,
      `Your average engagement score was ${(gameState.score / (duration / 1000)).toFixed(2)} points per second`,
      expressionPercentages.Confused > 0.3 ? 
        'Consider using larger text or adjusting the reading speed' : 
        'Your reading comfort level seems good',
      expressionPercentages.Bored > 0.2 ?
        'Try increasing the difficulty level for more challenge' :
        'The current difficulty level seems appropriate'
    ];

    setGameStats({
      score: gameState.score,
      duration,
      expressionPercentages,
      insights
    });

    setGameState(prev => ({ ...prev, isPlaying: false }));
  }, [gameState]);

  useEffect(() => {
    return () => {
      if (detectionInterval.current) {
        clearInterval(detectionInterval.current);
      }
    };
  }, []);

  if (!isModelLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">Loading facial detection model...</p>
          <p className="text-sm text-gray-500">This may take a few seconds</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Game Area */}
          <div className="lg:flex-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  Word Recognition Game
                </h1>
                <div className="flex items-center gap-2">
                  <Brain className="text-purple-500" />
                  <span className="font-bold text-xl text-black">
                    Score: {gameState.score}
                  </span>
                </div>
              </div>
              
              <WordGame 
                isPlaying={gameState.isPlaying}
                onScoreUpdate={(points) => 
                  setGameState(prev => ({
                    ...prev,
                    score: prev.score + points
                  }))
                }
              />

              <div className="flex justify-center mt-6">
                {!gameState.isPlaying ? (
                  <button
                    onClick={startGame}
                    className="flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold"
                  >
                    <Play size={24} />
                    <span>Start Game</span>
                  </button>
                ) : (
                  <button
                    onClick={endGame}
                    className="flex items-center space-x-2 bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors text-lg font-semibold"
                  >
                    <Square size={24} />
                    <span>End Game</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Expression Monitor */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Expression Monitor</h2>
              <div className="relative">
                <DynamicWebcam
                  ref={webcamRef}
                  className="w-full rounded-lg"
                  videoConstraints={WEBCAM_CONFIG}
                  mirrored={true}
                  audio={false}
                />
                <canvas 
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                />
                {currentExpression && (
                  <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${
                    currentExpression === 'Focused' ? 'bg-green-100 text-green-800' :
                    currentExpression === 'Confused' ? 'bg-red-100 text-red-800' :
                    currentExpression === 'Excited' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {currentExpression}
                  </div>
                )}
              </div>
              
              {gameState.isPlaying && detectionResults.length > 0 && (
                <div className="mt-3 bg-gray-50 p-2 rounded-lg">
                  <h3 className="text-sm font-medium mb-2">Current Expressions</h3>
                  <div className="space-y-1">
                    {detectionResults.map((detection, index) => (
                      <div key={index} className="flex justify-between text-xs">
                        <span className="capitalize">{detection.expression}:</span>
                        <span className="font-medium">{(detection.probability * 100).toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {currentExpression === 'Confused' && (
                <div className="mt-3 p-2 bg-red-50 rounded-lg flex items-start gap-2">
                  <AlertCircle className="text-red-500 shrink-0" size={20} />
                  <p className="text-sm text-red-700">
                    Need help? Try using the text-to-speech feature or adjusting the text size.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {gameStats && !gameState.isPlaying && (
          <div className="mt-8">
            <GameAnalytics stats={gameStats} />
          </div>
        )}
      </div>
    </div>
  );
};