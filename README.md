## Appointment Management API

A simple RESTful API to create and manage patient appointments. Built with Node.js, Express, TypeScript, MongoDB, and Mongoose. Includes interactive Swagger docs.

### Features
- Create patients and appointments
- List patients and appointments
- Input validation and basic error responses
- Swagger documentation
- MVC-style structure with separated app/server

### Tech Stack
- Runtime: Node.js + TypeScript (ts-node)
- Web: Express
- DB: MongoDB + Mongoose
- Docs: swagger-jsdoc + swagger-ui-express

### Project Structure
```
src/
  app.ts           # Express app (routes, middleware, Swagger)
  server.ts        # Server bootstrap class
  index.ts         # Entry point (loads env, starts server)
  config/db.ts     # Mongo connection
  controllers/     # Route handlers
  routes/          # Route definitions (+ Swagger annotations)
  models/          # Mongoose models
```

### Prerequisites
- Node.js 18+ (22 recommended)
- MongoDB (local or Atlas)

### Setup
1) Clone the repository
```bash
git clone https://github.com/<your-username>/appointment-management-api.git
cd appointment-management-api
```

2) Install dependencies
```bash
npm install
```

3) Environment variables
Create a `.env` file in the project root:
```bash
PORT=3000
# Local MongoDB
# MONGODB_URI=mongodb://127.0.0.1:27017/appointment_api

# OR MongoDB Atlas (replace with your credentials)
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/appointment_api?retryWrites=true&w=majority
```

### Run
- Development
```bash
npm run dev
```
You should see logs with the server URL and Swagger link.

### API Docs (Swagger)
Open in your browser:
```
http://localhost:3000/api-docs
```

### Quick Start (Sample Requests)
1) Create a patient
```http
POST /api/patients
Content-Type: application/json

{
  "name": "John Doe",
  "contactInfo": "john@example.com"
}
```

2) List patients (copy an id for the next step)
```http
GET /api/patients
```

3) Create an appointment
```http
POST /api/appointments
Content-Type: application/json

{
  "PatientId": "<paste-patient-id>",
  "AppointmentDate": "2025-01-31",
  "AppointmentTime": "14:30",
  "Reason": "Routine check-up"
}
```

### Scripts
- `npm run dev`  Start in development (ts-node)
- `npm start`    Start in production-like mode (ts-node)



