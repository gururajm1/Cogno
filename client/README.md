# Cogno Client

Frontend for the Cogno cognitive learning platform.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. Make sure the Cogno server is running (see server README for instructions).

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- User authentication and profile management
- Cognitive disorder learning resources
- Interactive learning games
- Progress tracking and analytics
- EEG data analysis

## Data Architecture

Most data is now fetched from the MongoDB database through the API, except for the games page which remains hardcoded as specified. The API services are located in `lib/api.js` and provide the following functionalities:

- User authentication (register, login)
- Profile management (get, update)
- Fetching disorders and games data
- Tracking and submitting user progress

## Tech Stack

- Next.js
- React
- TailwindCSS
- MongoDB (via API)
- JWT Authentication

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
