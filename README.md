
# Online Bookstore

This project is an **Online Bookstore** application where users can browse available books, manage their cart, and perform user authentication. The project is split into two main parts:
- **Frontend**: Built with **HTML**, **CSS**, **TypeScript**, and **JavaScript**.
- **Backend**: Built with **Express.js**, **PostgreSQL**and **TypeScript**.

## Features

### **Frontend**

- **Browse Books**: Users can view a list of books available for purchase.
- **User Authentication**: Users can sign up, log in, and view their profile.
- **Cart Management**: Users can add books to their cart, view their cart, and proceed to checkout.

### **Backend**

- **User Authentication**: Users can sign up, log in, and manage their profile.
- **Book Management**: Admins can add, update, delete, and manage books in the store.
- **Cart Management**: Users can manage their cart items.

## Technologies Used

### **Frontend**
- **HTML**: Structure of the website.
- **CSS**: Styling the website.
- **TypeScript**: For client-side logic and interactivity.
- **JavaScript**: For dynamic behavior on the frontend.

### **Backend**
- **Express.js**: Web framework for Node.js to handle HTTP requests.
- **PostgreSQL**: Database for storing books, users, and cart data.
- **TypeScript**: For type safety on the server-side code.
- **JWT**: For handling user authentication and authorization.
- **bcrypt.js**: For password hashing.
- **dotenv**: For managing environment variables.
- **cors**: To handle cross-origin requests from the frontend.

## Project Structure

\`\`\`plaintext
online-bookstore/
│
├── client/                      # Frontend files (HTML, CSS, JS, TS)
│   ├── index.html               # Homepage for listing books
│   ├── style.css                # General styling
│   ├── app.ts                   # Frontend logic for displaying books
│   └── cart.ts                  # Cart management and checkout logic
│
├── server/                      # Backend files (Express, TypeScript)
│   ├── controllers/             # Controllers to handle business logic
│   │   ├── bookController.ts
│   │   └── userController.ts
│   ├── routes/                  # API routes
│   │   ├── bookRoutes.ts
│   │   └── userRoutes.ts
│   ├── models/                  # Database models (PostgreSQL)
│   │   ├── bookModel.ts
│   │   └── userModel.ts
│   ├── middleware/              # Middleware for authentication
│   │   └── authMiddleware.ts
│   ├── utils/                   # Utility functions
│   │   └── authUtils.ts
│   ├── database/                # Database configuration
│   │   └── db.ts
│   ├── server.ts                # Main server entry point
│   ├── .env                     # Environment variables (DB credentials, JWT secret)
│   ├── .gitignore               # Files to ignore in Git
│   ├── package.json             # Backend dependencies
│   ├── tsconfig.json            # TypeScript configuration
│   └── README.md                # Backend README
│
├── .gitignore                   # Ignore node_modules and other unwanted files
├── package.json                 # Frontend dependencies and scripts
├── README.md                    # Main project README (this file)
├── database.sql                 # SQL schema for database setup
└── LICENSE                      # License information
\`\`\`

## Setup and Installation

### Prerequisites

Before you start, ensure you have the following installed:


- **npm** (Node package manager)
- **PostgreSQL** installed and running

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/yourusername/online-bookstore.git
cd online-bookstore
\`\`\`

### 2. Set up the Backend

Navigate to the backend folder and install the dependencies:

\`\`\`bash
cd server
npm install
\`\`\`

Create the \`.env\` file in the **server** folder and configure your PostgreSQL connection. Example of environment variables:

\`\`\`
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=online_bookstore
JWT_SECRET=your_jwt_secret
\`\`\`

Next, create the database and tables by running the provided \`database.sql\` file in PostgreSQL:

\`\`\`bash
psql -U your_db_user -d your_db_name -f database.sql
\`\`\`

### 3. Set up the Frontend

Navigate to the frontend folder and install the dependencies:

\`\`\`bash
cd client
npm install
\`\`\`

### 4. Run the Application

#### Running the Backend

After installing dependencies and setting up the database, run the backend server:

\`\`\`bash
cd server
npm start
\`\`\`

This will start the backend server on **http://localhost:5000** by default.

#### Running the Frontend

To start the frontend server, navigate to the **client** folder and run:

\`\`\`bash
cd client
npm start
\`\`\`

This will start the frontend on **http://localhost:3000** by default

### 5. Test the Application

After starting both the frontend and backend, you can test the application by visiting **http://localhost:3000**. The frontend will make API calls to the backend at **http://localhost:5000** to handle book listings, user authentication, and cart management.

### 6. Database Migration (Optional)

If you're using migrations (e.g., \`Knex.js\`, \`Sequelize\`), run the migration commands as necessary to update the database schema.

### 7. API Documentation

#### **User Routes**

- **POST \`/api/users/signup\`**: Creates a new user.
- **POST \`/api/users/login\`**: Logs in the user and returns a JWT token.
- **GET \`/api/users/profile\`**: Returns the authenticated user's profile (protected route).

#### **Book Routes**

- **GET \`/api/books\`**: Returns a list of all available books.
- **POST \`/api/books\`**: Adds a new book to the store (admin only).
- **PUT \`/api/books/:id\`**: Updates an existing book (admin only).
- **DELETE \`/api/books/:id\`**: Deletes a book (admin only).

