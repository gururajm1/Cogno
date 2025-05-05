import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

interface Props {
  isPlaying: boolean;
  onScoreUpdate: (points: number) => void;
}

const WORDS = [
  { word: 'cat', alternatives: ['cat', 'hat', 'rat', 'bat'] },
  { word: 'dog', alternatives: ['dog', 'fog', 'log', 'bog'] },
  { word: 'house', alternatives: ['house', 'mouse', 'horse', 'hose'] },
  { word: 'tree', alternatives: ['tree', 'free', 'three', 'tray'] },
  { word: 'book', alternatives: ['book', 'look', 'took', 'hook'] },
  { word: 'chair', alternatives: ['chair', 'chain', 'charm', 'chart'] },
  { word: 'table', alternatives: ['table', 'cable', 'fable', 'stable'] },
  { word: 'light', alternatives: ['light', 'night', 'fight', 'sight'] },
  { word: 'phone', alternatives: ['phone', 'stone', 'bone', 'cone'] },
  { word: 'water', alternatives: ['water', 'waiter', 'wader', 'waster'] }
];

export const WordGame: React.FC<Props> = ({ isPlaying, onScoreUpdate }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledAlternatives, setShuffledAlternatives] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      setCurrentWordIndex(Math.floor(Math.random() * WORDS.length));
    }
  }, [isPlaying]);

  useEffect(() => {
    setShuffledAlternatives(
      [...WORDS[currentWordIndex].alternatives].sort(() => Math.random() - 0.5)
    );
  }, [currentWordIndex]);

  const handleWordClick = (selected: string) => {
    const correct = selected === WORDS[currentWordIndex].word;
    setIsCorrect(correct);
    setShowFeedback(true);
    onScoreUpdate(correct ? 10 : -5);

    setTimeout(() => {
      setShowFeedback(false);
      setCurrentWordIndex(prev => (prev + 1) % WORDS.length);
    }, 1500);
  };

  const speakWord = () => {
    const utterance = new SpeechSynthesisUtterance(WORDS[currentWordIndex].word);
    utterance.rate = 0.8; // Slower speech rate for clarity
    window.speechSynthesis.speak(utterance);
  };

  if (!isPlaying) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl text-gray-600">
          Press Start to begin the word recognition game
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex justify-center items-center gap-4">
          <p className="text-4xl font-bold text-center font-mono tracking-wider text-black">
            {WORDS[currentWordIndex].word}
          </p>
          <button
            onClick={speakWord}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Listen to word"
          >
            <Volume2 className="text-blue-500" size={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {shuffledAlternatives.map((alternative, index) => (
            <button
              key={index}
              onClick={() => handleWordClick(alternative)}
              className="p-4 text-xl font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-black transition-all duration-200"
            >
              {alternative}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`text-center p-4 rounded-lg ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <p className="text-lg font-semibold">
              {isCorrect ? 'Correct! +10 points' : 'Try again! -5 points'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};