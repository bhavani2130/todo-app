# 📝 Todo App (MERN Stack)

## 📌 Project Description
A simple full-stack To-Do application built using React, Node.js, Express, and MongoDB.  
This app helps users manage daily tasks with reminders and full CRUD operations.

---

## 🚀 Features
- ➕ Add new tasks  
- ✏️ Edit tasks  
- ❌ Delete tasks  
- 📋 View all tasks  
- ⏰ Set reminders (date & time)  
- 🔔 Toast notifications for reminders  
- 💾 MongoDB database storage  
- 🔄 REST API integration  

---

## 🛠 Tech Stack
- Frontend: React (Vite)  
- Backend: Node.js, Express  
- Database: MongoDB  

---

## 📁 Project Structure

- backend → Node + Express API
- frontend → React (Vite) UI

---

🌐 API Endpoints
- GET /todo → Get all tasks
- POST /todo → Add task
- PUT /todo/:id → Edit task
- DELETE /todo/:id → Delete task

------

✨ Extra Highlights
- Real-time reminder system using setInterval
- React hooks: useState, useEffect, useRef
- LocalStorage used for reminder tracking
- Clean and minimal UI with toast notifications

## ▶ How to Run Project

```bash
# Clone repo
git clone https://github.com/bhavani2130/todo-app.git
cd todo-app

# Backend setup
cd backend
npm install
node todo-node.js
# OR (if nodemon installed)
nodemon todo-node.js

# Frontend setup (open new terminal)
cd frontend/todo-react
npm install
npm run dev

