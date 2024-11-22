export type LearningDisorder = 
  | 'dyslexia' | 'dyscalculia' | 'dysgraphia' | 'dyspraxia' 
  | 'dysphasia' | 'auditory' | 'visual' | 'nonverbal';

export type GameType = 
  | 'wordMatching' | 'numberSequence' | 'handwriting' | 'motorSkills'
  | 'speechPattern' | 'soundDiscrimination' | 'visualMemory' | 'socialCues';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
  id: string;
  title: string;
  description: string;
  disorder: LearningDisorder;
  type: GameType;
  difficulty: Difficulty;
  imageUrl: string;
}

export interface WordChoice {
  word: string;
  imageUrl: string;
  audioUrl: string;
  category: GameCategory;
  difficulty: Difficulty;
}

export type GameCategory = 'animals' | 'colors' | 'numbers' | 'shapes' | 'food';

