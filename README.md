# recEngine101

A simple FastAPI-based recommendation engine server with a React + TypeScript chatbot frontend.

---

## Prerequisites

- Python 3.8+
- [pip](https://pip.pypa.io/en/stable/)
- [Node.js](https://nodejs.org/) (v18+ recommended for frontend)

---

## Backend Setup & Running

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repo-url>
   cd recEngine
   ```

2. **Install Python dependencies using [uv](https://github.com/astral-sh/uv):**
   ```bash
   uv pip install --system .
   ```

3. **Run the FastAPI server:**
   ```bash
   uvicorn main:app --reload
   ```
   - The server will be available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)
   - Interactive API docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## Frontend Setup & Running

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```
2. **Install frontend dependencies:**
   ```bash
   npm install
   ```
3. **Run the React development server:**
   ```bash
   npm run dev
   ```
   - The app will be available at: [http://localhost:5173](http://localhost:5173)
   - The frontend proxies API requests to the backend at `/api`.

---

## API Endpoints

### `GET /`
- Returns a welcome message. Example:
  ```json
  { "message": "Hello, FastAPI with uv!" }
  ```

### `POST /api/chat`
- Accepts: `{ "message": string }`
- Returns: `{ "reply": string }`
- Example:
  ```json
  // Request
  { "message": "Hi there!" }
  // Response
  { "reply": "You said: Hi there!" }
  ```

---

## Project Structure
- `main.py`: FastAPI app entry point
- `pyproject.toml`: Project metadata and dependencies
- `frontend/`: React + TypeScript chatbot interface
- `README.md`: This file

---

## License
MIT
