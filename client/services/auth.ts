import axios from 'axios';

// Replace with your backend API URL
const API_URL = 'http://localhost:5000/api';

// Function to sign up a new user
export const signUp = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, { username, password });
    return response.data; // Return user data or success message
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Function to log in a user
export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    if (response.data.token) {
      // Store JWT token in localStorage or cookies
      localStorage.setItem('token', response.data.token);
    }
    return response.data; // Return the logged-in user's data or token
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Function to log out a user
export const logout = () => {
  // Remove JWT token from localStorage or cookies
  localStorage.removeItem('token');
};

// Function to check if the user is authenticated by checking the token
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if the token exists, false otherwise
};
