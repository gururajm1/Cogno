import { BookOpen, Calculator, Edit3, Move3d, MessageSquare, Ear, Eye, Users } from 'lucide-react';
import { GameConfig, LearningDisorder, WordChoice, GameCategory } from '../types';

export const DISORDER_INFO = {
  dyslexia: {
    title: 'Dyslexia',
    description: 'Reading and word recognition exercises',
    icon: BookOpen,
    color: 'bg-purple-500'
  },
  // ... (rest of the disorder info)
};

export const WORDS_BY_CATEGORY: Record<GameCategory, WordChoice[]> = {
  animals: [
    {
      word: 'Cat',
      imageUrl: '/images/cat.jpg',
      audioUrl: '/audio/cat.mp3',
      category: 'animals',
      difficulty: 'easy'
    },
    // ... (rest of the words data)
  ],
  // ... (rest of the categories)
};

export const GAMES_LIST: GameConfig[] = [
  {
    id: 'word-explorer',
    title: 'Word Explorer',
    description: 'Match spoken words with pictures',
    disorder: 'dyslexia',
    type: 'wordMatching',
    difficulty: 'easy',
    imageUrl: '/images/word-explorer.jpg'
  },
  // ... (rest of the games list)
];

