# English Learning Center - Listening & Reading Platform

This project is an integrated learning platform for English language centers, focusing on listening and reading skills. It integrates with Moodle for user management and course tracking.

## Features

- Interactive listening exercises with audio content
- Reading comprehension exercises
- Progress tracking and assessment
- Moodle integration for user authentication and course management
- Responsive design for both desktop and mobile use

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: Moodle OAuth2
- Audio Processing: Web Audio API

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see .env.example)
4. Start the development server:
   ```bash
   npm run dev
   ```

## Moodle Integration

The platform integrates with Moodle using:
- OAuth2 authentication
- LTI (Learning Tools Interoperability) for course content
- Gradebook synchronization

## Project Structure

```
english-learning-center/
├── frontend/           # React frontend application
├── backend/           # Node.js backend API
├── shared/            # Shared types and utilities
└── docs/             # Documentation
``` 