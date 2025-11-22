# 🚀 CollabN-More - Microservices Architecture

A full-stack collaborative platform (Slack clone) built with modern microservices architecture, featuring real-time messaging, workspaces, channels, and more.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Services](#services)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)

---

## 🎯 Overview

This is a production-ready collaborative platform featuring:

- ✅ **Microservices Architecture** - Independent, scalable services
- ✅ **Real-time Communication** - WebSockets for instant messaging
- ✅ **Workspace Management** - Teams, channels, and permissions
- ✅ **Secure Authentication** - JWT-based auth with bcrypt hashing
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **Containerized** - Docker Compose for easy deployment

---

## 🏗️ Architecture

```
┌─────────────┐
│  Frontend   │
│  (React)    │
└──────┬──────┘
       │
┌──────▼──────────┐
│  API Gateway    │  (Port 3000)
└────────┬────────┘
         │
    ┌────┴────┬────────┬──────────┬───────────┐
    │         │        │          │           │
┌───▼───┐ ┌──▼──┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐
│ Auth  │ │Chat │ │Workspace│ │ Media  │ │ Notify │
│:3001  │ │:3002│ │  :3003  │ │ :3004  │ │ :3005  │
└───┬───┘ └──┬──┘ └────┬────┘ └────┬───┘ └────┬───┘
    │        │         │           │          │
    └────────┴─────────┴───────────┴──────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ┌────▼────┐    ┌───▼───┐     ┌───▼────┐
   │PostgreSQL│    │MongoDB│     │ Redis  │
   │  :5433  │    │:27017 │     │ :6379  │
   └─────────┘    └───────┘     └────────┘
```

---

## 🔧 Services

### ✅ Auth Service (Port 3001) - **COMPLETED**

**Status:** 🟢 Production Ready

**Responsibilities:**

- User registration and authentication
- JWT token generation and verification
- Password hashing with bcrypt
- Protected route middleware

**Tech Stack:**

- Node.js + Express + TypeScript
- PostgreSQL + Prisma ORM
- JWT + bcrypt + Zod validation

**Endpoints:**
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | Login user | No |
| GET | `/auth/me` | Get current user | Yes |
| GET | `/health` | Health check | No |

**Database Schema:**

```prisma
model User {
  id              String
  email           String   @unique
  username        String   @unique
  passwordHash    String
  displayName     String
  role            Role     @default(USER)
  // ... more fields
}
```

---

### 🚧 Workspace Service (Port 3003) - **IN PROGRESS**

**Status:** 🟡 Under Development

**Responsibilities:**

- Workspace (team) management
- Channel creation and management
- Membership and permissions
- Workspace/channel settings

**Planned Features:**

- Create/update/delete workspaces
- Public/private channels
- User invitations
- Role-based permissions

---

### 📅 Chat Service (Port 3002) - **PLANNED**

Real-time messaging with WebSockets

---

### 📅 Media Service (Port 3004) - **PLANNED**

File uploads and storage

---

### 📅 Notification Service (Port 3005) - **PLANNED**

Real-time notifications

---

### 📅 API Gateway (Port 3000) - **PLANNED**

Central routing and load balancing

---

## 🛠️ Tech Stack

### **Backend**

| Technology        | Purpose                 |
| ----------------- | ----------------------- |
| Node.js + Express | Web framework           |
| TypeScript        | Type safety             |
| Prisma            | Database ORM            |
| PostgreSQL        | Primary database        |
| MongoDB           | Chat/messages storage   |
| Redis             | Caching & sessions      |
| RabbitMQ          | Message queue           |
| JWT               | Authentication          |
| bcrypt            | Password hashing        |
| Zod               | Input validation        |
| Socket.io         | Real-time communication |

### **Infrastructure**

- Docker + Docker Compose
- Microservices architecture
- RESTful APIs
- WebSocket connections

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- Docker & Docker Compose
- Git

### **Installation**

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd CollabN-More
```

2. **Start all services with Docker Compose**

```bash
docker-compose up
```

3. **Or run individual services locally:**

**Auth Service:**

```bash
cd services/auth
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

**Workspace Service:**

```bash
cd services/workspace
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

### **Environment Variables**

Each service needs a `.env` file. See `.env.example` in each service folder.

---

## 📡 API Documentation

### **Auth Service**

**Register User**

```http
POST http://localhost:3001/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "johndoe",
  "displayName": "John Doe",
  "password": "Password123!",
  "timezone": "UTC"
}
```

**Login**

```http
POST http://localhost:3001/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123!"
}
```

**Get Current User**

```http
GET http://localhost:3001/auth/me
Authorization: Bearer <your-jwt-token>
```

---

## 📂 Project Structure

```
CollabN-More/
├── services/
│   ├── auth/           ✅ Complete
│   ├── workspace/      🚧 In Progress
│   ├── chat/           📅 Planned
│   ├── media/          📅 Planned
│   └── notification/   📅 Planned
├── api-gateway/        📅 Planned
├── frontend/           📅 Planned
├── docker-compose.yml
└── README.md
```

---

## 🎯 Roadmap

- [x] Project setup
- [x] Auth Service (registration, login, JWT)
- [ ] Workspace Service (teams, channels, permissions)
- [ ] Chat Service (real-time messaging)
- [ ] Media Service (file uploads)
- [ ] Notification Service
- [ ] API Gateway
- [ ] Frontend (React)
- [ ] Deployment

---

## 👨‍💻 Author

Built as a portfolio project to demonstrate full-stack microservices architecture.

---

## 📝 License

This project is for educational purposes.
