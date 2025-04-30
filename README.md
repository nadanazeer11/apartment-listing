# 🏠 Apartment Listing App

A full-stack web application to manage and browse apartments.  
Built with **NestJS**, **MongoDB**, **Next.js**, **React Query**, **TailwindCSS**, and **Docker**.

---

## Features

- View all apartments
- View apartment details
- Add a new apartment
- Responsive design for mobile and desktop
---

## Tech Stack

- **Frontend**: Next.js, React Query, TailwindCSS
- **Backend**: NestJS (Node.js, TypeScript)
- **Database**: MongoDB
- **Deployment**: Docker + Docker Compose

---

##  Live Demo



---

## 🛠️ Getting Started

### 📁 Clone the repo

```bash
git clone https://github.com/nadanazeer11/apartment-listing.git
cd apartment-app
```

### 🐳 Run with Docker (Recommended)

```bash
docker compose up --build
```

This will:
- Build the **backend**
- Start a **MongoDB container**
- App will run at: `http://localhost:3000`

> The backend connects to MongoDB via `MONGODB_URI=mongodb://mongo:27017/apartments`

---

### ⚙️ Running the Frontend (Optional if not in Docker)

If you are running frontend separately:

```bash
cd frontend
npm install
npm run dev
```

> Frontend: `http://localhost:3001`  
> Backend API: `http://localhost:3000`

Make sure to set the correct API base URL in `.env.local`:

```env
API_BASE_URL=http://localhost:3000
```

---

## 📂 Folder Structure

```
appartment-app/
│
├── backend/               # NestJS backend
│   ├── src/
│   ├── .env
│   └── Dockerfile
│
├── frontend/              # Next.js frontend
│   ├── src/
│   └── .env.local
│
├── docker-compose.yml     # Combined backend + DB config
```



---

## 📮 API Endpoints

| Method | Endpoint          | Description           |
|--------|-------------------|-----------------------|
| GET    | `/apartments`     | Get all apartments    |
| GET    | `/apartments/:id` | Get apartment by ID   |
| POST   | `/apartments`     | Add a new apartment   |

---

## 👨‍💻 Author

Nada Nazeer
Fullstack Developer  


