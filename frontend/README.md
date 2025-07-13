# Recommendation Engine Chatbot Frontend

This is a simple React + TypeScript chatbot interface for the Recommendation Engine backend.

## Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

## Usage
- Type a message in the input box and press Send.
- The chatbot will send your message to the backend and display the response.

## Backend Connection
- The frontend is configured to proxy `/api` requests to `http://localhost:8000` (the FastAPI backend).
- Make sure the backend server is running (see the main project README for instructions).
- The backend should expose a POST endpoint at `/api/chat` that accepts `{ message: string }` and returns `{ reply: string }`.

## Project Structure
- `src/App.tsx`: Main chatbot interface
- `src/main.tsx`: Entry point
- `vite.config.ts`: Vite configuration with proxy

## Build for Production
```bash
npm run build
# or
yarn build
```

## License
MIT
