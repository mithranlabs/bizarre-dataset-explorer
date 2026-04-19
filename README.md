# Bizarre Dataset Explorer

A roulette-style MERN stack web app that serves up weird, real-world public datasets and challenges you to build something with them. Spin the wheel, get a random dataset, and receive both a web dev challenge and a machine learning challenge.

Built as a portfolio project bridging web development and data science fundamentals.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js (Vite) |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Styling | Custom CSS (Fira Code, terminal aesthetic) |
| HTTP Client | Axios |

---

## Project Structure

```
bizarre-dataset-explorer/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   └── Dataset.js         # Mongoose schema
│   ├── routes/
│   │   └── datasets.js        # API route handlers
│   ├── seed/
│   │   └── seed.js            # Manual DB seed script
│   ├── .env                   # Environment variables (not committed)
│   ├── .gitignore
│   ├── package.json
│   └── server.js              # Express entry point
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Header.css
    │   │   ├── RouletteScreen.jsx
    │   │   ├── RouletteScreen.css
    │   │   ├── DatasetCard.jsx
    │   │   └── DatasetCard.css
    │   ├── App.jsx
    │   ├── App.css
    │   └── index.css
    ├── index.html
    └── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) or a [MongoDB Atlas](https://www.mongodb.com/atlas) URI

### 1. Clone the repository

```bash
git clone https://github.com/mithranlabs/bizarre-dataset-explorer.git
cd bizarre-dataset-explorer
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=mongodb://localhost:27017/bizarre-datasets
PORT=5000
```

### 3. Seed the Database

Make sure MongoDB is running, then:

```bash
npm run seed
```

You should see:

```
Existing datasets cleared.
5 datasets seeded successfully.
MongoDB connection closed.
```

### 4. Start the Backend Server

```bash
npm run dev
```

Server runs on `http://localhost:5000`

### 5. Set up the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/datasets/random` | Returns one random dataset document |
| `GET` | `/api/datasets` | Returns all dataset documents |

### Sample Response — `GET /api/datasets/random`

```json
{
  "_id": "664f1a2b3c4d5e6f7a8b9c0d",
  "title": "Historical UFO Sightings",
  "description": "Over 80,000 reports of UFO sightings over the last century...",
  "sourceUrl": "https://www.kaggle.com/datasets/camnugent/ufo-sightings-around-the-world",
  "mernChallenge": "Build an interactive world map that plots sightings by location...",
  "mlChallenge": "Can you predict the reported shape of a UFO based on time of year...",
  "tags": ["Geospatial", "Weird", "Historical", "Government"],
  "createdAt": "2026-04-19T13:00:00.000Z"
}
```

---

## Database Schema

**Collection:** `datasets`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | Yes | Name of the dataset |
| `description` | String | Yes | Brief summary of the data |
| `sourceUrl` | String | Yes | Link to Kaggle/GitHub source |
| `mernChallenge` | String | Yes | Suggested web dev task |
| `mlChallenge` | String | Yes | Suggested ML/data science task |
| `tags` | [String] | No | Categorization tags |
| `createdAt` | Date | auto | Mongoose timestamp |

---

## Adding More Datasets

Open `backend/seed/seed.js` and add a new object to the `datasets` array following the schema above. Then re-run:

```bash
npm run seed
```

This wipes the collection and re-inserts everything cleanly. It is safe to run multiple times.

---

## Running in Development

You need three terminals running simultaneously:

```bash
# Terminal 1 — MongoDB (if running locally)
mongod

# Terminal 2 — Backend
cd backend && npm run dev

# Terminal 3 — Frontend
cd frontend && npm run dev
```

---

## Key Concepts Demonstrated

- **MERN Stack architecture** — full separation of frontend, backend, and database layers
- **MongoDB `$sample` aggregation** — true database-level random document retrieval
- **Mongoose schema validation** — enforced document structure with descriptive error messages
- **REST API design** — clean, stateless endpoints following HTTP conventions
- **React component architecture** — state lifted to `App.jsx`, passed down via props
- **Idempotent seed scripts** — safe to re-run without data duplication
- **Environment variable management** — secrets isolated in `.env`, never committed

---

## License

MIT — free to use, fork, and build on.
