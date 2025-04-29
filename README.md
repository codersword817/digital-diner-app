# 🍽️ Digital Diner

A full-stack food ordering web application designed to streamline the user experience of browsing menus, placing orders, and viewing order history.

## 🚀 Live Demo

Frontend: https://digital-diner-app-frontend.onrender.com/

---

## 🛠️ Local Development Setup

Follow these steps to run the project locally:

### 1. Update Frontend API URLs

Replace all instances of:

https://digital-diner-app-backend.onrender.com

with:

http://localhost:4000

in the frontend source code (or choose another open port if needed).

### 2. Install & Start Frontend

cd frontend
npm install
npm run start

### 3. Install & Start Backend

cd ..
cd backend
npm install
node .\init\init.js - setup the local Menu data
nodemon index.js

## 🧠 Database Choice: PostgreSQL vs MongoDB

**User Model**  
PostgreSQL is preferred due to the static schema and relational nature.

**Order Model**  
MongoDB is a better fit here due to its flexible schema requirements for storing order history from multiple users.

**Menu Items**  
PostgreSQL is suitable due to the relatively static and structured data.

> ⚠️ For simplicity and due to time constraints, a single database (MongoDB) was used for the entire project.

---

## 📡 API Endpoints

### 🔐 Authentication

- POST /api/v1/register – Register a new user
- POST /api/v1/login – Authenticate user and return token

### 🍔 Menu & Orders

- GET /api/v2/items – Retrieve all available menu items
- GET /api/v2/history/:id – Get order history for a specific user
- POST /api/v2/order/:id – Place a new order for the specified user

---

## 📂 Tech Stack

- Frontend: React.js, TailwindCSS
- Backend: Node.js, Express
- Database: MongoDB
- Deployment: Render

---

Feel free to fork, clone, and contribute!
