Setup for Backend Local and run

1. Replace all the render Links in the frontend
   https://digital-diner-app-backend.onrender.com with http://localhost:4000 or any open port of your choice
2. Run the commands
   cd frontend
   - npm i
   - npm run start => start frontend
     cd ..
     cd backend
   - npm i
   - nodemon index.js => start the backend

with these steps you can run it locally

---

Database Choice MongoDB vs Postgres

since the User Model consists of static schema requirements it is more likely to use postgres
Order Model consists of all the users who have ordered so its better to make it flexible schema so better choice is mongodb
Menu order depends on the volume of the data but most suitable is postgres

I chose to take up a single database due to time constraint and data size

=--------------------

API Endpoints Created

POST /api/v1/register
POST /api/v1/login
GET /api/v2/items
GET /api/v2/history/:id
POST /api/v2/order/:id
