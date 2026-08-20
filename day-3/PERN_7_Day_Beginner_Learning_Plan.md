# PERN Stack — 7-Day Beginner Learning Plan

> **Goal:** Learn the fundamentals of the PERN stack in 7 days by studying and coding for 8 hours every day.

## 📚 What is PERN?

PERN is a full-stack JavaScript development stack using PostgreSQL as the database.

```text
PostgreSQL
    ↓
Express.js
    ↓
React.js
    ↓
Node.js
```

### Technologies

- **PostgreSQL** — Relational database
- **Express.js** — Backend framework
- **React.js** — Frontend library
- **Node.js** — JavaScript runtime
- **Axios / Fetch** — API communication
- **JWT** — Authentication
- **Git & GitHub** — Version control

---

# 🎯 Learning Goal

By the end of the 7 days, you should be able to:

- Build a React frontend
- Create reusable React components
- Understand React state and props
- Create a Node.js server
- Build REST APIs with Express
- Work with PostgreSQL
- Write basic SQL queries
- Connect Express with PostgreSQL
- Perform CRUD operations
- Implement authentication with JWT
- Create protected routes
- Connect React to your backend
- Build a complete PERN application

> **Important:** 7 days will not make you a PERN expert. The goal is to build a strong beginner foundation and become capable of creating a basic full-stack application independently.

---

# ⏰ Daily Study Structure

You will study for **8 hours per day**.

Recommended structure:

```text
1 hour  → Revision
2 hours → Learn new concepts
4 hours → Hands-on coding
1 hour  → Practice + notes
```

### Recommended Learning Ratio

```text
30% Learning
70% Coding
```

Do not spend the entire day watching tutorials.

---

# 📅 Day 1 — JavaScript + Web Fundamentals

## 🎯 Goal

Build the JavaScript foundation required for React, Node.js, and Express.

## Topics

### JavaScript Basics

- [ ] Variables — `let`, `const`
- [ ] Data types
- [ ] Operators
- [ ] `if / else`
- [ ] Loops
- [ ] Functions
- [ ] Arrow functions
- [ ] Arrays
- [ ] Objects

### Modern JavaScript

- [ ] `map()`
- [ ] `filter()`
- [ ] `find()`
- [ ] `reduce()`
- [ ] Destructuring
- [ ] Spread operator
- [ ] Rest operator
- [ ] Template literals
- [ ] Modules
- [ ] JSON

### Asynchronous JavaScript

- [ ] Promises
- [ ] `async/await`
- [ ] `try/catch`
- [ ] Fetch API

### Web Fundamentals

- [ ] What is HTTP?
- [ ] HTTP request
- [ ] HTTP response
- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] Status codes
- [ ] REST API concept
- [ ] JSON data

---

## 🛠️ Day 1 Project — JavaScript Todo App

Build a simple Todo application using vanilla JavaScript.

### Features

- [ ] Add Todo
- [ ] Delete Todo
- [ ] Edit Todo
- [ ] Mark Todo as completed
- [ ] Filter todos
- [ ] Store data in localStorage

### Day 1 Completion Goal

You should understand basic JavaScript well enough to read and write simple programs without constantly following a tutorial.

---

# 📅 Day 2 — React Fundamentals

## 🎯 Goal

Understand how React works and build your first React application.

## Topics

### React Basics

- [ ] What is React?
- [ ] Why use React?
- [ ] React vs traditional JavaScript
- [ ] Vite
- [ ] React project structure
- [ ] JSX
- [ ] Components
- [ ] Props
- [ ] State

### Rendering

- [ ] Conditional rendering
- [ ] Rendering lists
- [ ] `key` prop
- [ ] Event handling
- [ ] Forms
- [ ] Controlled inputs

### React Hooks

- [ ] `useState`
- [ ] `useEffect`

---

## 🛠️ Day 2 Project — React Todo App

Rebuild your Day 1 Todo application using React.

### Features

- [ ] Add Todo
- [ ] Delete Todo
- [ ] Edit Todo
- [ ] Complete Todo
- [ ] Filter Todo
- [ ] localStorage
- [ ] Reusable components

Example structure:

```text
src/
│
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
│
├── App.jsx
└── main.jsx
```

### Day 2 Completion Goal

You should understand:

```text
Component
   ↓
Props
   ↓
State
   ↓
Event
   ↓
UI Update
```

---

# 📅 Day 3 — React + API Concepts

## 🎯 Goal

Learn how to build a proper multi-page React frontend and communicate with APIs.

## React Router

Learn:

- [ ] React Router
- [ ] Routes
- [ ] Route
- [ ] Link
- [ ] `useNavigate`
- [ ] `useParams`
- [ ] Nested routes
- [ ] Basic protected route concept

Example:

```text
/login
/register
/dashboard
/products
/products/:id
```

---

## API Communication

Learn:

- [ ] Fetch API
- [ ] Axios
- [ ] GET request
- [ ] POST request
- [ ] PUT request
- [ ] DELETE request
- [ ] Request body
- [ ] Response data
- [ ] Loading states
- [ ] Error handling

Understand:

```text
React
  ↓
HTTP Request
  ↓
Backend API
  ↓
HTTP Response
  ↓
React State
  ↓
UI
```

---

## 🛠️ Day 3 Project — Product Management Frontend

Create a frontend with:

```text
Dashboard
Products
Add Product
Edit Product
Product Details
```

### Features

- [ ] React Router
- [ ] Product list
- [ ] Product form
- [ ] Reusable components
- [ ] API service structure
- [ ] Loading state
- [ ] Error state

For now, you can use mock data.

### Day 3 Completion Goal

You should be able to build a multi-page React application and understand how frontend applications communicate with APIs.

---

# 📅 Day 4 — Node.js + Express.js

## 🎯 Goal

Learn backend development and create your first REST API.

---

# Node.js — 2 Hours

## Topics

- [ ] What is Node.js?
- [ ] Node.js runtime
- [ ] npm
- [ ] `package.json`
- [ ] Installing packages
- [ ] Modules
- [ ] ES Modules
- [ ] Environment variables
- [ ] `.env`
- [ ] Asynchronous programming

Understand:

```text
Browser
   ↓
HTTP Request
   ↓
Node.js Server
```

---

# Express.js — 3 Hours

## Topics

- [ ] What is Express?
- [ ] Creating an Express server
- [ ] Routes
- [ ] Controllers
- [ ] Middleware
- [ ] Request
- [ ] Response
- [ ] Status codes
- [ ] REST API
- [ ] CORS
- [ ] Error handling

Create:

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

---

# Backend Structure

Learn this basic structure:

```text
backend/
│
├── controllers/
├── routes/
├── middleware/
├── services/
├── config/
├── utils/
│
├── app.js
├── server.js
└── .env
```

Do not worry about making the architecture perfect yet.

Focus on understanding what each part does.

---

# 🛠️ Day 4 Project — Product REST API

Create a Product API.

### Product

```text
name
description
price
category
stock
image
```

Initially store products in an array.

### Implement

- [ ] Create product
- [ ] Get all products
- [ ] Get single product
- [ ] Update product
- [ ] Delete product
- [ ] Error handling
- [ ] Proper HTTP status codes

### Day 4 Completion Goal

You should be able to create a basic REST API using Node.js and Express.

---

# 📅 Day 5 — PostgreSQL

## 🎯 Goal

Learn relational databases and connect PostgreSQL with your Express backend.

This day is extremely important because PostgreSQL is the database used in PERN.

---

# PostgreSQL Fundamentals

## Learn

- [ ] What is a database?
- [ ] What is PostgreSQL?
- [ ] Database
- [ ] Table
- [ ] Row
- [ ] Column
- [ ] Primary key
- [ ] Foreign key
- [ ] Constraints
- [ ] Relationships
- [ ] One-to-one relationship
- [ ] One-to-many relationship
- [ ] Many-to-many relationship

---

# SQL Basics

Learn:

- [ ] `CREATE DATABASE`
- [ ] `CREATE TABLE`
- [ ] `INSERT`
- [ ] `SELECT`
- [ ] `UPDATE`
- [ ] `DELETE`
- [ ] `WHERE`
- [ ] `ORDER BY`
- [ ] `LIMIT`
- [ ] `LIKE`
- [ ] `AND`
- [ ] `OR`
- [ ] `JOIN`
- [ ] `GROUP BY`

Example:

```sql
SELECT * FROM products;
```

Example:

```sql
SELECT *
FROM products
WHERE price > 1000;
```

---

# PostgreSQL + Node.js

Learn how to:

- [ ] Install PostgreSQL
- [ ] Create a database
- [ ] Create tables
- [ ] Connect Node.js to PostgreSQL
- [ ] Run queries from Express
- [ ] Use environment variables
- [ ] Handle database errors

Architecture:

```text
React
  ↓
Express
  ↓
Node.js
  ↓
PostgreSQL
```

---

# 🛠️ Day 5 Project

Move your Product API from:

```text
In-memory Array
```

to:

```text
PostgreSQL Database
```

Implement:

- [ ] Create Product
- [ ] Get Products
- [ ] Get Product by ID
- [ ] Update Product
- [ ] Delete Product
- [ ] Database validation
- [ ] Error handling

### Day 5 Completion Goal

You should understand:

```text
Express API
    ↓
SQL Query
    ↓
PostgreSQL
    ↓
Database Result
    ↓
Express Response
```

---

# 📅 Day 6 — Full PERN + Authentication

## 🎯 Goal

Connect React, Express, Node.js, and PostgreSQL into one application and add authentication.

---

# Full PERN Architecture

```text
React
   ↓
Axios / Fetch
   ↓
Express
   ↓
Controller
   ↓
PostgreSQL
```

---

# CRUD Integration

Connect your Day 3 React frontend with your Day 5 backend.

Implement:

- [ ] Get products
- [ ] Add product
- [ ] Edit product
- [ ] Delete product
- [ ] Product details
- [ ] Search
- [ ] Loading states
- [ ] Error handling

---

# Authentication

Learn:

- [ ] What is authentication?
- [ ] What is authorization?
- [ ] Password hashing
- [ ] bcrypt
- [ ] JWT
- [ ] Login
- [ ] Register
- [ ] Logout
- [ ] Authentication middleware
- [ ] Protected routes

---

# Authentication Flow

```text
User
 ↓
Register
 ↓
Password Hash
 ↓
PostgreSQL
```

Login:

```text
User
 ↓
Login
 ↓
Express
 ↓
Check Credentials
 ↓
Generate JWT
 ↓
Client
 ↓
Protected API
```

---

# API Endpoints

Create:

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

Protected routes:

```text
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

---

# Authorization

Understand:

### Authentication

```text
Who are you?
```

### Authorization

```text
What are you allowed to do?
```

Implement basic roles:

```text
Admin
User
```

Example:

```text
Admin
 ├── Create Product
 ├── Update Product
 └── Delete Product

User
 └── View Products
```

---

# Day 6 Completion Goal

Your application should now support:

```text
Register
    ↓
Login
    ↓
JWT
    ↓
Dashboard
    ↓
Protected API
    ↓
PostgreSQL
```

---

# 📅 Day 7 — Complete PERN Project

## 🎯 Goal

Stop following tutorials and build a complete PERN application.

# 🛒 Final Project — E-Commerce Management System

Build a basic e-commerce system using everything you learned.

---

# 🔐 Authentication

- [ ] Register
- [ ] Login
- [ ] Logout
- [ ] JWT authentication
- [ ] Protected routes
- [ ] User roles

---

# 📦 Products

- [ ] Create product
- [ ] View products
- [ ] View product details
- [ ] Update product
- [ ] Delete product
- [ ] Search products
- [ ] Filter products
- [ ] Sort products

---

# 🗂️ Categories

- [ ] Create category
- [ ] List categories
- [ ] Update category
- [ ] Delete category
- [ ] Assign product to category

---

# 🛒 Cart

- [ ] Add product
- [ ] Remove product
- [ ] Update quantity
- [ ] Calculate subtotal
- [ ] Calculate total

---

# 📋 Orders

- [ ] Create order
- [ ] View orders
- [ ] View order details
- [ ] Update order status

Order status:

```text
Pending
Processing
Shipped
Delivered
Cancelled
```

---

# 👨‍💼 Admin

Admin should be able to:

- [ ] View dashboard
- [ ] Manage products
- [ ] Manage categories
- [ ] Manage users
- [ ] Manage orders
- [ ] Update order status

---

# ⏰ Day 7 Schedule

| Time | Task |
|---|---|
| 8:00–10:00 | Authentication |
| 10:00–12:00 | Products |
| 12:00–1:00 | Break |
| 1:00–3:00 | Categories + Cart |
| 3:00–5:00 | Orders + Admin |
| 5:00–6:00 | UI Cleanup |
| 6:00–7:00 | Testing |
| 7:00–8:00 | Review + Deployment |

---

# 🏗️ Recommended PERN Project Structure

```text
pern-ecommerce/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   │
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── config/
│   ├── utils/
│   ├── db/
│   │
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── .gitignore
└── README.md
```

---

# 🔄 PERN Request Flow

Understand this flow properly:

```text
                         USER
                           │
                           ↓
                    React Frontend
                           │
                           │ Axios / HTTP
                           ↓
                     Express Route
                           │
                           ↓
                      Middleware
                           │
                           ↓
                       Controller
                           │
                           ↓
                       SQL Query
                           │
                           ↓
                      PostgreSQL
                           │
                           ↓
                     Query Result
                           │
                           ↓
                       Controller
                           │
                           ↓
                      JSON Response
                           │
                           ↓
                    React Frontend
                           │
                           ↓
                          UI
```

---

# 🧠 Concepts You Must Understand

## JavaScript

- [ ] Variables
- [ ] Data types
- [ ] Functions
- [ ] Arrays
- [ ] Objects
- [ ] Array methods
- [ ] Destructuring
- [ ] Spread operator
- [ ] Modules
- [ ] Promises
- [ ] Async/await
- [ ] Error handling
- [ ] JSON
- [ ] Fetch API

## React

- [ ] JSX
- [ ] Components
- [ ] Props
- [ ] State
- [ ] Events
- [ ] Forms
- [ ] `useState`
- [ ] `useEffect`
- [ ] React Router
- [ ] API calls
- [ ] Loading states
- [ ] Error handling
- [ ] Protected routes

## Node.js

- [ ] Runtime
- [ ] npm
- [ ] Modules
- [ ] package.json
- [ ] Environment variables
- [ ] Async programming

## Express

- [ ] Server
- [ ] Routes
- [ ] Controllers
- [ ] Middleware
- [ ] REST APIs
- [ ] Request/response
- [ ] Status codes
- [ ] CORS
- [ ] Error handling

## PostgreSQL

- [ ] Database
- [ ] Tables
- [ ] Rows
- [ ] Columns
- [ ] Primary keys
- [ ] Foreign keys
- [ ] Relationships
- [ ] SQL queries
- [ ] CRUD
- [ ] JOIN
- [ ] Constraints

## Authentication

- [ ] Password hashing
- [ ] bcrypt
- [ ] JWT
- [ ] Login
- [ ] Register
- [ ] Authentication
- [ ] Authorization
- [ ] Protected routes
- [ ] User roles

---

# 🧪 Testing Checklist

## Frontend

- [ ] Application loads correctly
- [ ] Navigation works
- [ ] Forms work
- [ ] Validation works
- [ ] Loading states work
- [ ] Errors are displayed
- [ ] API calls work
- [ ] Protected pages work

## Backend

- [ ] Server starts correctly
- [ ] API endpoints work
- [ ] Validation works
- [ ] Correct status codes are returned
- [ ] Errors are handled
- [ ] Authentication works
- [ ] Authorization works
- [ ] CORS works

## PostgreSQL

- [ ] Database connection works
- [ ] Tables are created correctly
- [ ] Data can be inserted
- [ ] Data can be retrieved
- [ ] Data can be updated
- [ ] Data can be deleted
- [ ] Foreign keys work
- [ ] JOIN queries work

---

# 🚀 Deployment

A typical production architecture:

```text
                  Internet
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
    React Frontend          Express API
       Vercel                Render / VM
                                │
                                ↓
                         PostgreSQL
                       Supabase / Neon
                       / Managed DB
```

## Deployment Checklist

- [ ] Create production environment variables
- [ ] Set up production PostgreSQL
- [ ] Configure CORS
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Update frontend API URL
- [ ] Test production API
- [ ] Test authentication
- [ ] Test CRUD
- [ ] Test database connection
- [ ] Test mobile responsiveness

---

# 📊 7-Day Progress Tracker

| Day | Topic | Project | Status |
|---|---|---|---|
| Day 1 | JavaScript + Web Fundamentals | JS Todo App | ⬜ |
| Day 2 | React Fundamentals | React Todo App | ⬜ |
| Day 3 | React + APIs | Product Frontend | ⬜ |
| Day 4 | Node + Express | REST API | ⬜ |
| Day 5 | PostgreSQL | Database API | ⬜ |
| Day 6 | Full PERN + Auth | Full CRUD + Auth | ⬜ |
| Day 7 | Complete PERN | E-Commerce System | ⬜ |

---

# 📁 Projects You Will Build

```text
01-js-todo-app
       ↓
02-react-todo-app
       ↓
03-product-management-ui
       ↓
04-product-rest-api
       ↓
05-product-postgresql-api
       ↓
06-pern-crud-auth-app
       ↓
07-pern-ecommerce
```

Each project builds on the previous one.

---

# ⚡ Beginner Learning Rules

## Rule 1 — Don't Just Watch Tutorials

Use:

```text
30% Learning
70% Coding
```

If you watch a 30-minute tutorial, spend at least 60–90 minutes trying to build the concept yourself.

---

## Rule 2 — Type the Code Yourself

Do not copy/paste complete projects.

Use this process:

```text
Watch
 ↓
Understand
 ↓
Close Tutorial
 ↓
Code Yourself
 ↓
Get Error
 ↓
Debug
 ↓
Understand
```

---

## Rule 3 — Don't Memorize Everything

You don't need to memorize every method or syntax.

Focus on understanding:

```text
What?
Why?
When?
How?
```

For example:

> What is middleware?

> Why do we use middleware?

> When should we use middleware?

> How does middleware work?

---

## Rule 4 — Debug Before Asking

When you get an error:

```text
Read Error
   ↓
Understand Error
   ↓
Check Your Code
   ↓
Search Documentation
   ↓
Try a Solution
   ↓
Debug Again
```

This is one of the most important skills for becoming a developer.

---

## Rule 5 — Build Every Day

Never finish a day without writing code.

Even if you don't understand everything, build something.

---

## Rule 6 — Explain What You Build

At the end of every day, explain your project in your own words.

For example:

> "My React frontend sends a POST request to the Express API. Express receives the request and runs a SQL query against PostgreSQL. PostgreSQL returns the result, Express sends JSON back to React, and React updates the UI."

If you can explain the flow without looking at your notes, you are learning properly.

---

# 🧠 Final PERN Architecture

```text
                         PERN STACK
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
       Frontend             Backend            Database
          │                   │                   │
        React               Node.js          PostgreSQL
          │                   │                   │
       Router              Express              SQL
          │                   │                   │
       Context            Controllers             │
          │                   │                   │
       Axios ─────────────── API ────────────────┘
          │
          ↓
       User Interface
```

---

# 🎯 Final Goal

After completing the 7-day plan, you should be able to say:

> **"I can build a basic PERN application from scratch. I understand how React communicates with Express, how Express handles requests, how Node.js runs the backend, and how PostgreSQL stores and retrieves the data."**

You should be able to:

- [ ] Build a React frontend
- [ ] Create an Express backend
- [ ] Create REST APIs
- [ ] Design PostgreSQL tables
- [ ] Write SQL queries
- [ ] Connect Express to PostgreSQL
- [ ] Perform CRUD operations
- [ ] Implement JWT authentication
- [ ] Create protected routes
- [ ] Connect frontend and backend
- [ ] Deploy a basic PERN application
- [ ] Explain the complete request/response flow

---

# 🚫 Don't Learn These Yet

As a beginner, do **not** try to learn everything at once.

Leave these for after you are comfortable with basic PERN:

- [ ] Redux Toolkit
- [ ] TypeScript
- [ ] Docker
- [ ] Redis
- [ ] WebSockets
- [ ] Microservices
- [ ] CI/CD
- [ ] Advanced React optimization
- [ ] System Design
- [ ] Kubernetes
- [ ] Advanced cloud architecture

First master:

```text
JavaScript
    ↓
React
    ↓
Node.js
    ↓
Express
    ↓
PostgreSQL
    ↓
REST API
    ↓
Authentication
    ↓
Full PERN Application
```

Then move to advanced topics.

---

# 🏁 Completion Criteria

You can consider this 7-day plan successfully completed when you can:

- [ ] Build a React application without following a tutorial
- [ ] Create reusable React components
- [ ] Manage React state
- [ ] Create React routes
- [ ] Build an Express REST API
- [ ] Create PostgreSQL tables
- [ ] Write basic SQL queries
- [ ] Connect Express to PostgreSQL
- [ ] Perform complete CRUD operations
- [ ] Implement JWT authentication
- [ ] Implement protected routes
- [ ] Connect React to your backend
- [ ] Handle loading and error states
- [ ] Structure a full-stack project
- [ ] Deploy your application
- [ ] Explain the complete PERN request/response flow

---

# 📝 Final Reminder

**Do not aim for perfection in 7 days.**

The purpose of this sprint is to build your foundation.

```text
Learn
  ↓
Practice
  ↓
Build
  ↓
Break
  ↓
Debug
  ↓
Understand
  ↓
Build Again
```

After the 7-day sprint, continue building projects. That is where real PERN development skills will come from.

**56 hours can give you the foundation. Consistent practice will make you a developer.**
