

# Online Bookstore

An online bookstore application where users can browse available books, manage their cart, and perform user authentication. Built with **Express**, **PostgreSQL**, **TypeScript**, **HTML**, **CSS**, and **JavaScript**.

## Features

- **User Authentication**: Users can sign up, log in, and view their profile.
- **Book Management**: Admins can add, update, and manage books in the store.
- **Browse Books**: Users can browse a catalog of books available for purchase.
- **Cart Management**: Users can simulate a shopping cart experience by adding books.

## Technologies Used

- **Frontend**: 
  - HTML
  - CSS
  - TypeScript (for client-side logic)
  
- **Backend**: 
  - Express.js (Node.js framework)
  - PostgreSQL (for database)
  - TypeScript (for type safety)
  
- **Database**: PostgreSQL
  - Tables for storing users and books.

## Project Setup

### Prerequisites

1. **Node.js** (version 14 or higher) installed.
2. **PostgreSQL** installed and running.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/online-bookstore.git
cd online-bookstore

online-bookstore/
│
├── client/                          # Frontend (HTML, CSS, JS, TS)
│   ├── index.html                   # Homepage for listing books
│   ├── style.css                    # General styling
│   ├── app.ts                       # Frontend logic for displaying books
│   └── cart.ts                      # Cart management and checkout logic
│
├── server/                          # Backend (Express, TypeScript)
│   ├── server.ts                    # Main server file
│   ├── routes/
│   │   ├── bookRoutes.ts            # API routes for book operations
│   │   └── userRoutes.ts            # User-related routes (signup, login)
│   ├── database/
│   │   └── db.ts                    # PostgreSQL database configuration
│   └── models/
│       ├── bookModel.ts             # Book data model
│       └── userModel.ts             # User data model
│
├── .gitignore                       # Ignore unnecessary files
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
├── README.md                        # Project description
└── database.sql                     # SQL schema for books and users tables
