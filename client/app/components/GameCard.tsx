'use client';

import { Star } from 'lucide-react';
import { WordChoice } from '../types';

interface GameCardProps {
  choice: WordChoice;
  isSelected: boolean;
  onSelect: () => void;
  isCorrect: boolean | null;
}

export default function GameCard({ choice, isSelected, onSelect, isCorrect }: GameCardProps) {
  const borderColor = isSelected
    ? isCorrect === null
      ? 'border-blue-400'
      : isCorrect
      ? 'border-green-400'
      : 'border-red-400'
    : 'border-transparent';

  return (
    <button
      onClick={onSelect}
      className={`relative p-4 rounded-xl ${borderColor} border-4 transition-all transform hover:scale-105`}
      disabled={isCorrect !== null}
    >
      <img
        src={choice.imageUrl}
        alt={choice.word}
        className="w-48 h-48 rounded-lg object-cover"
      />
      <p className="mt-2 text-xl font-medium text-center text-gray-700">
        {choice.word}
      </p>
      {isSelected && isCorrect && (
        <Star className="absolute top-2 right-2 w-6 h-6 text-yellow-500 fill-current" />
      )}
    </button>
  );
}

