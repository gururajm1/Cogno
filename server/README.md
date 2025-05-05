# Cogno Server

Backend server for the Cogno cognitive learning platform.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/cognodb
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

3. Make sure MongoDB is installed and running on your system.

4. Seed the database with initial disorders data:
   ```
   node utils/seedData.js
   ```

5. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

### Disorders
- `GET /api/disorders` - Get all disorders
- `GET /api/disorders/:id` - Get disorder by ID
- `POST /api/disorders` - Create a disorder (Admin only)
- `PUT /api/disorders/:id` - Update a disorder (Admin only)
- `DELETE /api/disorders/:id` - Delete a disorder (Admin only)

### Users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Authenticate user & get token
- `GET /api/users/me` - Get current user information

### Profile
- `GET /api/profile/me` - Get current user's profile
- `POST /api/profile` - Create or update user profile
- `GET /api/profile` - Get all profiles (Admin only)
- `GET /api/profile/user/:user_id` - Get profile by user ID
- `DELETE /api/profile` - Delete profile & user

### Progress
- `GET /api/progress/user` - Get all progress for a user
- `GET /api/progress/disorder/:disorderId` - Get user progress for a specific disorder
- `GET /api/progress/game/:gameId` - Get user progress for a specific game
- `POST /api/progress` - Create or update user game progress
- `GET /api/progress/stats` - Get aggregated stats for user

## Tech Stack
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing 