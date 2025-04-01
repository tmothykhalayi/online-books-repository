// components/BookCard.tsx

import React from 'react';
import { Book } from '../types';  // Assuming you have a Book type defined elsewhere

interface BookCardProps {
  book: Book;
  addToCart: (bookId: string) => void; // Function to add a book to the cart
}

const BookCard: React.FC<BookCardProps> = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <img src={book.imageUrl} alt={book.title} />
      <div className="info">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <p className="price">${book.price}</p>
        <button className="btn" onClick={() => addToCart(book.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
