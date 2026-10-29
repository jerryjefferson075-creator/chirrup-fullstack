# Chirrup Full-Stack Application

Chirrup is a full-stack social media web application built with a Node.js and Express backend, a SQLite database, and a Vue.js frontend.

The project provides a browser-based interface for interacting with the Chirrup REST API and demonstrates full-stack development across the frontend, backend, database, routing, and API layers.

## Walkthrough
https://www.youtube.com/watch?v=e2Op1XRsc7Q&t=6s

## Features

Chirrup provides social media functionality including:

- User accounts and authentication
- Creating and viewing posts
- Liking posts
- Following other users
- User and post data stored using SQLite
- Vue-based frontend interface
- REST API powered by Node.js and Express

## Technologies Used

### Backend

- Node.js
- Express
- SQLite
- Joi
- CORS

### Frontend

- Vue 3
- Vue Router
- Vite
- JavaScript
- HTML/CSS

## Project Structure

```text
fsd_chirrup_server/
├── app/
│   ├── controllers/
│   ├── lib/
│   ├── models/
│   └── routes/
├── frontend/
│   └── vue-project/
├── database.js
├── db.sqlite
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Getting Started

### Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js
- npm
- Git

The application uses SQLite through the Node.js `sqlite3` package, so a separate database server does not need to be installed or started.

### 1. Clone the repository

```bash
git clone https://github.com/jerryjefferson075-creator/chirrup-fullstack.git
cd chirrup-fullstack
```

### 2. Install the backend dependencies

From the project root directory, run:

```bash
npm install
```

### 3. Install the frontend dependencies

The Vue frontend has its own dependencies. From the project root, run:

```bash
npm --prefix frontend/vue-project install
```

### 4. Start the application

From the project root, run:

```bash
npm run dev
```

This starts both:

- the Node.js/Express backend using Nodemon
- the Vue frontend using Vite

The frontend and backend do not need to be started separately.

Once Vite has started, the terminal will display the local frontend URL. Open this URL in a web browser to use Chirrup.

To stop the development servers, press:

```text
Ctrl + C
```

## Database

Chirrup uses SQLite for persistent application data.

The repository includes a `db.sqlite` database file, and no separate database server needs to be started.

The database contains the application's core data tables:

- `users`
- `posts`
- `likes`
- `followers`

The backend connects directly to `db.sqlite` when the application starts. The database setup code also attempts to create the required tables if they do not already exist.

> Run the application from the project root directory so that the backend can locate `db.sqlite` correctly.

## Running the Backend Only

If required, the Express backend can be started independently using:

```bash
npm start
```

This runs the backend with Node.js without starting the Vue development server.

For normal development and use of the complete application, run:

```bash
npm run dev
```

## Repository

The source code for this project is available on GitHub:

https://github.com/jerryjefferson075-creator/chirrup-fullstack
