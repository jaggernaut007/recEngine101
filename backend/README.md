# Backend (FastAPI)

This folder contains the FastAPI backend for the Recommendation Engine project.

## Setup & Running

1. Install dependencies (from project root):
   ```bash
   cd backend
   uv pip install --system .
   ```
2. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
   - The server will be available at http://127.0.0.1:8000
   - API docs: http://127.0.0.1:8000/docs

## Endpoints

- `GET /` — Welcome endpoint
- `POST /api/chat` — Chatbot endpoint, accepts `{ "message": string }`, returns `{ "reply": string }`

---

For more details, see the main project README.
