const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Disorder = require('../models/Disorder');
const connectDB = require('../config/db');

// Load env variables
dotenv.config();

// Connect to database
connectDB();

// Initial disorders data converted from the disorders.ts file
const disorders = [
  {
    id: "dyslexia",
    title: "Dyslexia",
    description: "Reading and word recognition exercises",
    icon: "BookOpen",
    color: "bg-purple-500",
    games: [
      {
        id: "word-explorer",
        title: "Word Explorer",
        description: "Match spoken words with pictures",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "easy"
      },
      {
        id: "rhyme-time",
        title: "Rhyme Time",
        description: "Find words that rhyme together",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "dyscalculia",
    title: "Dyscalculia",
    description: "Number sense and math skills",
    icon: "Calculator",
    color: "bg-blue-500",
    games: [
      {
        id: "number-patterns",
        title: "Number Patterns",
        description: "Identify and complete number sequences",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "easy"
      },
      {
        id: "shape-counter",
        title: "Shape Counter",
        description: "Count shapes and match with numbers",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "medium"
      }
    ]
  },
  {
    id: "dysgraphia",
    title: "Dysgraphia",
    description: "Writing and fine motor skills",
    icon: "Edit3",
    color: "bg-green-500",
    games: []
  },
  {
    id: "dyspraxia",
    title: "Dyspraxia",
    description: "Motor planning and coordination",
    icon: "Move3d",
    color: "bg-yellow-500",
    games: []
  },
  {
    id: "dysphasia",
    title: "Dysphasia/Aphasia",
    description: "Language and communication skills",
    icon: "MessageSquare",
    color: "bg-red-500",
    games: []
  },
  {
    id: "auditory",
    title: "Auditory Processing",
    description: "Sound recognition and processing",
    icon: "Ear",
    color: "bg-pink-500",
    games: []
  },
  {
    id: "visual",
    title: "Visual Processing",
    description: "Visual perception and memory",
    icon: "Eye",
    color: "bg-indigo-500",
    games: []
  },
  {
    id: "nonverbal",
    title: "Nonverbal Learning",
    description: "Social cues and spatial awareness",
    icon: "Users",
    color: "bg-orange-500",
    games: []
  }
];

// Seed function
const seedDisorders = async () => {
  try {
    // Clear existing disorders
    await Disorder.deleteMany({});
    console.log('Disorders cleared from database');

    // Insert new disorders
    await Disorder.insertMany(disorders);
    console.log('Disorders seeded successfully');

    // Disconnect
    mongoose.disconnect();
    console.log('Database connection closed');
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeding function
seedDisorders(); 