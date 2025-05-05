import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { GameStats } from '../types';
import { Brain, Timer, Trophy } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  stats: GameStats;
}

export const GameAnalytics: React.FC<Props> = ({ stats }) => {
  const chartData = {
    labels: Object.keys(stats.expressionPercentages),
    datasets: [
      {
        label: 'Expression Distribution',
        data: Object.values(stats.expressionPercentages),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Game Performance Analysis</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
          <Trophy className="text-blue-500" />
          <div>
            <p className="text-sm text-black">Score</p>
            <p className="text-xl font-bold text-black">{stats.score}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
          <Timer className="text-green-500" />
          <div>
            <p className="text-sm text-black">Duration</p>
            <p className="text-xl font-bold text-black">{Math.round(stats.duration / 1000)}s</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
          <Brain className="text-purple-500" />
          <div>
            <p className="text-sm text-black">Focus Rate</p>
            <p className="text-xl font-bold text-black">
              {Math.round(stats.expressionPercentages.Focused * 100)}%
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Expression Distribution</h3>
        <Bar data={chartData} />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-black">Performance Insights</h3>
        <ul className="space-y-2">
          {stats.insights.map((insight, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-black">•</span>
              <span className="text-black">{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};