export type Expression = 'Excited' | 'Bored' | 'Confused' | 'Focused' | 'Other';

export interface ExpressionData {
  timestamp: number;
  expression: Expression;
}

export interface GameStats {
  score: number;
  duration: number;
  expressionPercentages: Record<Expression, number>;
  insights: string[];
}

export interface GameState {
  isPlaying: boolean;
  score: number;
  startTime: number | null;
  expressions: ExpressionData[];
}