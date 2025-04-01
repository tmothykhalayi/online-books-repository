// pages/Home.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import { Book } from '../types';  // Assuming you have a Book type defined

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch books from the API
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleAddToCart = (bookId: string) => {
    // Add the book to the cart
    console.log('Adding book to cart:', bookId);
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Online Bookstore</h1>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
