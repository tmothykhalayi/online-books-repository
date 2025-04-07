

This is the **backend** for the **Online Bookstore** application. The backend is responsible for handling requests related to books, user authentication, and cart management. It uses **Express.js**, **PostgreSQL**, and **TypeScript**.

## Features

- **User Authentication**: Users can sign up, log in, and view their profile.
- **Book Management**: Admins can add, update, delete, and manage books in the store.
- **Cart Management**: Users can add books to their cart and manage their checkout process.

## Technologies Used

- **Express.js**: Web framework for Node.js to handle HTTP requests.
- **TypeScript**: For type safety in backend code.
- **PostgreSQL**: Relational database to store user and book data.
- **JWT**: For handling user authentication and authorization.
- **bcrypt.js**: For password hashing and authentication.
- **dotenv**: For managing environment variables.
- **cors**: To allow cross-origin requests from the frontend.

## Folder Structure

\`\`\`plaintext
server/
│
├── controllers/                 # Logic for handling requests (book and user)
│   ├── bookController.ts
│   └── userController.ts
├── routes/                      # API routes (book and user routes)
│   ├── bookRoutes.ts
│   └── userRoutes.ts
├── models/                      # Database models (PostgreSQL tables)
│   ├── bookModel.ts
│   └── userModel.ts
├── middleware/                  # Middleware (authentication)
│   └── authMiddleware.ts
├── utils/                       # Utility functions (auth utils, password hashing)
│   └── authUtils.ts
├── database/                    # Database configuration (PostgreSQL)
│   └── db.ts
├── server.ts                    # Main server file to start the app
├── .env                         # Environment variables (DB creds, JWT secret)
├── .gitignore                   # Git ignore rules (e.g., node_modules, .env)
├── package.json                 # Dependencies and scripts for backend
├── tsconfig.json                # TypeScript configuration for backend
└── README.md                    # Project description for the backend
\`\`\`

### **Key Files**

1. **\`server.ts\`**:
   - The entry point for the backend. This file sets up the Express server and connects to the database. It also handles the routing and middleware setup.

2. **\`controllers/\`**:
   - **\`bookController.ts\`**: Contains logic for handling CRUD operations on books.
   - **\`userController.ts\`**: Contains logic for handling user authentication (sign up, log in, profile).

3. **\`routes/\`**:
   - **\`bookRoutes.ts\`**: Contains API routes related to books (e.g., listing, adding, updating, deleting books).
   - **\`userRoutes.ts\`**: Contains API routes for user authentication (e.g., login, signup).

4. **\`models/\`**:
   - **\`bookModel.ts\`**: Defines the book model (fields, validations) and interacts with the database to perform book-related operations.
   - **\`userModel.ts\`**: Defines the user model (fields, validations) and handles user data storage.

5. **\`middleware/\`**:
   - **\`authMiddleware.ts\`**: Middleware to protect routes and check if a user is authenticated by verifying the JWT token.

6. **\`utils/\`**:
   - **\`authUtils.ts\`**: Helper functions for generating JWT tokens and validating passwords.

7. **\`database/\`**:
   - **\`db.ts\`**: Contains the configuration for connecting to the PostgreSQL database.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)
- **PostgreSQL** installed and running locally or remotely.

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/yourusername/online-bookstore.git
cd online-bookstore/server
\`\`\`

### 2. Install dependencies

Navigate to the **server** directory and install the required dependencies:

\`\`\`bash
npm install
\`\`\`

This will install the necessary packages listed in \`package.json\`.

### 3. Configure Database

Make sure PostgreSQL is installed and running. Create a database and tables using the SQL schema provided in \`database.sql\`.

1. Log in to PostgreSQL:

\`\`\`bash
psql -U yourusername -d yourdatabase
\`\`\`

2. Create the required tables by running the following:

\`\`\`bash
\i database.sql
\`\`\`

Make sure to update the PostgreSQL credentials in the \`.env\` file (e.g., database name, user, password, and host).

### 4. Configure Environment Variables

Create a \`.env\` file in the **server** directory and add the following environment variables:

\`\`\`
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=online_bookstore
JWT_SECRET=your_jwt_secret
\`\`\`

### 5. Running the Development Server

After the dependencies are installed and the environment variables are set, you can start the backend server by running:

\`\`\`bash
npm start
\`\`\`

The server will start running on **http://localhost:5000** (by default).

### 6. Database Migration (Optional)

If you're using migrations (like \`Knex.js\` or \`Sequelize\`), run the database migration commands as necessary to update your database schema.

### 7. Testing the API

You can use **Postman** or **Insomnia** to test the API endpoints.

- **POST \`/api/users/signup\`**: To create a new user.
- **POST \`/api/users/login\`**: To log in and get a JWT token.
- **GET \`/api/books\`**: To list all books.
- **POST \`/api/books\`**: To add a new book (requires admin).
- **PUT \`/api/books/:id\`**: To update an existing book (requires admin).
- **DELETE \`/api/books/:id\`**: To delete a book (requires admin).

## API Routes

### **User Routes**

- **POST \`/api/users/signup\`**: Creates a new user.
- **POST \`/api/users/login\`**: Logs in the user and returns a JWT token.
- **GET \`/api/users/profile\`**: Returns the authenticated user's profile (protected route).

### **Book Routes**

- **GET \`/api/books\`**: Returns a list of all available books.
- **POST \`/api/books\`**: Adds a new book to the store (admin only).
- **PUT \`/api/books/:id\`**: Updates an existing book (admin only).
- **DELETE \`/api/books/:id\`**: Deletes a book (admin only).

## Notes

- The backend is designed with security and scalability in mind, using JWT tokens for authentication and password hashing via \`bcrypt\`.
- **CORS** is enabled, allowing the frontend to make requests to the backend from a different origin.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
