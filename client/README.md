# Online Bookstore - Client Side

This is the **frontend** of the **Online Bookstore** application. It allows users to browse books, view individual book details, manage a shopping cart, and authenticate with a user profile.

## Features

- **Browse Books**: Users can see a catalog of books available for purchase.
- **Add to Cart**: Users can add books to a shopping cart and proceed with the checkout process.
- **User Authentication**: Users can sign up, log in, and view their profile.
- **Responsive UI**: The website is responsive and works on both desktop and mobile devices.

## Technologies Used

- **React** (optional if you're using React for frontend)
- **TypeScript**: Provides type safety for frontend logic.
- **HTML**: The structure of the website.
- **CSS**: Styling for the application.
- **Axios** (or Fetch API): For making API requests to the backend.
- **JWT**: For handling user authentication and managing sessions.

## Folder Structure

```plaintext
client/
│
├── assets/                        # Images, fonts, and other assets
│   ├── images/
│   └── fonts/
├── components/                    # Reusable components (BookCard, Navbar, Footer)
│   ├── BookCard.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/                         # Pages for different views (Home, Cart, Profile)
│   ├── Home.tsx
│   ├── Cart.tsx
│   └── Profile.tsx
├── services/                      # API and auth services
│   ├── api.ts
│   └── auth.ts
├── styles/                        # CSS styles for different components
│   ├── main.css
│   ├── header.css
│   ├── footer.css
│   ├── bookCard.css
│   └── cart.css
├── app.ts                          # Main frontend logic
├── cart.ts                         # Cart management logic
├── index.html                      # Homepage for listing books
└── tsconfig.json                   # TypeScript configuration for frontend
```

### **Key Files**

1. **`index.html`**:
   - The main HTML file that displays the homepage with a list of available books.

2. **`app.ts`**:
   - The main entry point of the client-side application. This file contains the logic for rendering the different pages (like Home, Cart, Profile) and interacting with the backend via API requests.

3. **`cart.ts`**:
   - Logic for managing the shopping cart, including adding and removing books, and managing the total price.

4. **`components/`**:
   - **`BookCard.tsx`**: Displays a book's details (image, title, author, price).
   - **`Navbar.tsx`**: A reusable navigation bar component.
   - **`Footer.tsx`**: A footer component that appears at the bottom of the pages.

5. **`pages/`**:
   - **`Home.tsx`**: Displays the catalog of books.
   - **`Cart.tsx`**: Displays the shopping cart with the books added to it.
   - **`Profile.tsx`**: Displays the user's profile, where they can see their details and manage their account.

6. **`services/`**:
   - **`api.ts`**: Contains functions for making API calls to the backend to fetch books, add to the cart, etc.
   - **`auth.ts`**: Handles user authentication (sign-up, log-in, and storing JWT tokens).

7. **`styles/`**:
   - Contains different CSS files for styling the various components and pages.

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/online-bookstore.git
cd online-bookstore/client
```

### 2. Install dependencies

Navigate to the **client** directory and install the required dependencies:

```bash
npm install
```

This will install all the necessary packages listed in `package.json`.

### 3. Configure API Endpoint

Make sure the **backend API** is up and running. Update the API endpoint in the `services/api.ts` file to point to your backend server URL (e.g., `http://localhost:5000`).

### 4. Running the Development Server

After the dependencies are installed and the API endpoint is set up, you can start the development server by running:

```bash
npm start
```

This will start the frontend on **http://localhost:3000** by default. The app will automatically reload whenever you make changes to the files.

### 5. Production Build (Optional)

To build the app for production (optimized for performance), run:

```bash
npm run build
```

This will generate the production-ready files in the `build/` folder.

## Usage

Once the app is running:

1. **Browse Books**: On the homepage, you can see a list of available books.
2. **Add to Cart**: Click the "Add to Cart" button on a book card to add it to your cart.
3. **View Cart**: Navigate to the cart page to view your selected books and proceed to checkout.
4. **User Authentication**: You can sign up, log in, and view your profile from the authentication pages.

## API Integration

This frontend communicates with the backend through API calls. Here’s how the frontend interacts with the backend:

1. **Books API**: The frontend fetches books from the backend using an endpoint like `/api/books`.
2. **User Authentication**: The frontend sends user credentials to the backend for signing up and logging in. JWT tokens are then used for maintaining user sessions.
3. **Cart API**: The frontend sends cart data to the backend for saving the cart state and managing checkout.
## Notes
- The frontend is designed to be simple, with a focus on providing the user with an easy and intuitive experience for browsing and purchasing books.
- JWT authentication is handled using cookies or localStorage to store the authentication token.
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

