'use client';

import { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import GameCard from './GameCard';
import { WORDS_BY_CATEGORY } from '../app/lib/data';
import { WordChoice, Difficulty } from '../app/types';

interface WordExplorerProps {
  difficulty: Difficulty;
  onComplete: (score: number) => void;
}

export default function WordExplorer({ difficulty, onComplete }: WordExplorerProps) {
  const [currentWord, setCurrentWord] = useState<WordChoice>(WORDS_BY_CATEGORY.animals[0]);
  const [choices, setChoices] = useState<WordChoice[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    // Initialize game with random words
    const randomWords = getRandomWords(difficulty);
    setChoices(randomWords);
    setCurrentWord(randomWords[Math.floor(Math.random() * randomWords.length)]);
  }, [difficulty]);

  const handleWordPlay = () => {
    const audio = new Audio(currentWord.audioUrl);
    audio.play();
  };

  const handleChoiceSelect = (word: string) => {
    setSelectedChoice(word);
    const correct = word === currentWord.word;
    setIsCorrect(correct);
    
    setTimeout(() => {
      if (correct) {
        onComplete(1);
        // Set up next round
        const randomWords = getRandomWords(difficulty);
        setChoices(randomWords);
        setCurrentWord(randomWords[Math.floor(Math.random() * randomWords.length)]);
        setSelectedChoice(null);
        setIsCorrect(null);
      }
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <button
          onClick={handleWordPlay}
          className="bg-purple-500 text-white rounded-full p-4 hover:bg-purple-600"
        >
          <Volume2 className="w-8 h-8" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {choices.map((choice) => (
          <GameCard
            key={choice.word}
            choice={choice}
            isSelected={selectedChoice === choice.word}
            onSelect={() => handleChoiceSelect(choice.word)}
            isCorrect={selectedChoice === choice.word ? isCorrect : null}
          />
        ))}
      </div>
    </div>
  );
}

// Helper function (you might want to move this to a separate utils file)
function getRandomWords(difficulty: Difficulty): WordChoice[] {
  // Implement logic to get random words based on difficulty
  // This is a placeholder implementation
  return WORDS_BY_CATEGORY.animals.slice(0, 3);
}

