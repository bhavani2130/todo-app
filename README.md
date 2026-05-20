📝 Todo App (MERN Stack)

📌 Project Description

A simple full-stack To-Do application built using React, Node.js, Express, and MongoDB.
This app helps users manage daily tasks with reminders and CRUD operations.
----

🚀 Features:
➕ Add new tasks
✏️ Edit tasks
❌ Delete tasks
📋 View all tasks
⏰ Set reminders (date & time)
🔔 Toast notifications for reminders
💾 MongoDB database storage
🔄 REST API integration
---

🛠 Tech Stack

Frontend: React (Vite)
Backend: Node.js, Express
Database: MongoDB

------

📁 Project Structure
todo-app/
│
├── backend/
│   ├── todo-node.js
│   ├── models/
│   └── routes/
│
├── frontend/
│   └── todo-react/
│       ├── src/
│       └── package.json

-----

▶ How to Run Project

🔹 1. Clone Repo
git clone https://github.com/bhavani2130/todo-app.git
cd todo-app

🔹 2. Backend Setup
cd backend
npm install
node todo-node.js

🔹 3. Frontend Setup
cd frontend/todo-react
npm install
npm run dev

-----

🌐 API Endpoints
GET /todo → Get all tasks
POST /todo → Add task
PUT /todo/:id → Edit task
DELETE /todo/:id → Delete task

-----

✨ Extra Highlights
Real-time reminder system using setInterval
React hooks (useState, useEffect, useRef)
LocalStorage used for reminder tracking
Clean and simple UI

---------

👩‍💻 Author
Durga Bhavani Marni

🔥 Final Result

A clean and functional MERN Stack Todo App with reminders and full CRUD

---
## Backend
```bash
npm install
node todo-node.js
