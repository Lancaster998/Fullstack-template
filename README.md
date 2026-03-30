# 🚀 Fullstack Template

A modern fullstack starter template designed to kickstart web applications with a clean architecture, scalable structure, and ready-to-use configurations.

---

## 📦 Tech Stack

### Frontend
- React
- SCSS (Modular structure)
- Vite

### Backend
- Node.js
- Express
- MongoDB + Mongoose

### Other
- REST API structure
- Environment configuration support

---

## 📁 Project Structure

\```
client/
  src/
    components/
    pages/
    layouts/
    styles/
      abstracts/
      reset/
      components/
      layout/

server/
  controllers/
  routes/
  models/
  middleware/
  db/
\```

---

## ⚙️ Getting Started

### 1. Clone the repository
\```
git clone https://github.com/Lancaster998/Fullstack-template.git
\```

### 2. Install dependencies

#### Client
\```
cd client
npm install
\```

#### Server
\```
cd server
npm install
\```

---

## ▶️ Run the project

### Start backend
\```
cd server
npm run dev
\```

### Start frontend
\```
cd client
npm run dev
\```

---

## 🔐 Environment Variables

Create a `.env` file in the `server/` directory:

\```
PORT=3001
MONGO_URI=your_mongodb_connection_string
\```

---

## 🧠 Features

- Scalable folder structure
- Organized SCSS architecture (abstracts, base, components, layout)
- MongoDB + Mongoose integration ready
- API-ready backend setup with controllers, routes, models
- Middleware support
- Easy environment configuration
- Clean separation of client and server

---

## 🛠️ Scripts

### Client
- `npm run dev` – start development server
- `npm run build` – build for production

### Server
- `npm run dev` – start with nodemon
- `npm start` – start production server

---

## 📌 Notes

- Make sure backend runs before frontend if using API calls
- Update API base URLs if needed
- Never commit your `.env` file

---

## ✨ Author

**Lancaster998**
GitHub: https://github.com/Lancaster998