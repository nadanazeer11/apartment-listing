# 🏠 Apartment Listing App

A full-stack web application to manage and browse apartments.  
Built with **NestJS**, **MongoDB**, **Next.js**, **React Query**, **TailwindCSS**, and **Docker**.

---

## Features

- View all apartments
- View apartment details
- Add a new apartment
- Search for apartment by name , unit number or project
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
- Build the **backend** and **frontend**
- Start a **MongoDB container**
- BE will run at: `http://localhost:3000`
- FE will run at: `http://localhost:3001`

> The backend connects to MongoDB via `MONGODB_URI=mongodb://mongo:27017/apartments`



---

##  API Documentation



### 📄 Endpoints

#### `GET /apartments`

Returns a list of all apartments.

**Query Parameters:**

| Name   | Type   | Description                                      |
|--------|--------|--------------------------------------------------|
| search | string | (Optional) Filters apartments by name, unitNumber, or project |

**Example:**
```http
GET /apartments?search=Marassi
```

**Response:**
```json
[
  {
    "_id": "123",
    "name": "Sea View Apartment",
    "unitNumber": "B203",
    "project": "Marassi",
    "price": 1200000,
    "description": "Luxury beach view",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
]
```

---

#### `GET /apartments/:id`

Fetches a specific apartment by ID.

**Example:**
```http
GET /apartments/664c70ff5c0f8d034fa17654
```

**Response:**
```json
{
  "_id": "664c70ff5c0f8d034fa17654",
  "name": "Villa 18",
  "unitNumber": "21",
  "project": "Shorouk",
  "price": 1211111,
  "description": "Corner unit with garden",
  "createdAt": "2024-01-05T15:22:00.000Z",
  "updatedAt": "2024-01-05T15:22:00.000Z"
}
```

---

#### `POST /apartments`

Adds a new apartment.

**Request Body:**

```json
{
  "name": "New Apartment",
  "unitNumber": "77B",
  "project": "Palm Hills",
  "price": 1300000,
  "description": "Ground floor unit"
}
```

**Response:**

```json
{
  "_id": "6651bc4a69b0322e886ad005",
  "name": "New Apartment",
  "unitNumber": "77B",
  "project": "Palm Hills",
  "price": 1300000,
  "description": "Ground floor unit",
  "createdAt": "2024-05-01T13:00:00.000Z",
  "updatedAt": "2024-05-01T13:00:00.000Z"
}
```




---

## 📂 Folder Structure

```
appartment-app/
│
├── backend/                         # NestJS Backend API
│   ├── src/
│   │   ├── apartment/               # Apartment module
│   │   │   ├── dto/                 # Data Transfer Objects (DTOs)
│   │   │   ├── schemas/            # Mongoose schema definitions
│   │   │   ├── apartment.controller.ts
│   │   │   ├── apartment.service.ts
│   │   │   └── apartments.module.ts
│   │   ├── app.controller.ts        # Root controller 
│   │   ├── app.module.ts            # Root Nest module
│   │   ├── app.service.ts           # Root app logic
│   │   └── main.ts                  # Entry point
│   ├── .env                         # Environment config for MongoDB URI
│   └── Dockerfile                   # Docker setup for backend
│
├── frontend/                        # Next.js Frontend App
│   ├── src/
│   │   ├── app/                     # App router structure
│   │   │   ├── apartments/[id]/     # Apartment detail page
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx             # Listing page
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ApartmentCard.tsx
│   │   │   ├── AddApartmentModal.tsx
│   │   │   ├── FormInput.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useAddApartment.ts
│   │   │   ├── useApartmentById.ts
│   │   │   ├── useApartments.ts
│   │   │   └── useDebounce.ts
│   │   ├── lib/                     # API clients and React Query setup
│   │   │   ├── axios.ts
│   │   │   ├── react-query.ts
│   │   │   └── ReactQueryProvider.tsx
│   │   ├── theme/                   # Styling and design 
│   │   │   ├── fonts.ts
│   │   │   └── globals.css
│   │   └── types/                   # Shared TypeScript interfaces
│   │       └── apartment.ts
│   └── .env.local                   # Frontend environment config
│
├── docker-compose.yml              # Docker config to run backend + DB
└── README.md                       # Project documentation

```

## 👨‍💻 Author

Nada Nazeer
Fullstack Developer  


