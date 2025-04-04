import axios from 'axios';

// Replace with your backend API URL
const API_URL = 'http://localhost:5000/api';

// Function to get all books from the backend
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data; // Return the list of books
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Function to add a book to the cart
export const addToCart = async (bookId: string, userId: string) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, { bookId, userId });
    return response.data; // Return the updated cart
  } catch (error) {
    console.error('Error adding book to cart:', error);
    throw error;
  }
};
