// models/bookModel.ts
import client from '../database/db';

// Book type for TypeScript
export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  stock: number;
}

// Get all books
export const getAllBooks = async (): Promise<Book[]> => {
  const query = 'SELECT * FROM books';
  const result = await client.query(query);
  return result.rows;
};

// Get a book by ID
export const getBookById = async (id: number): Promise<Book | null> => {
  const query = 'SELECT * FROM books WHERE id = $1';
  const result = await client.query(query, [id]);
  return result.rows.length > 0 ? result.rows[0] : null;
};

// Create a new book
export const createBook = async (title: string, author: string, price: number, description: string, stock: number): Promise<Book> => {
  const query = 'INSERT INTO books (title, author, price, description, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [title, author, price, description, stock];
  const result = await client.query(query, values);
  return result.rows[0];
};

// Update an existing book
export const updateBook = async (id: number, title: string, author: string, price: number, description: string, stock: number): Promise<Book | null> => {
  const query = 'UPDATE books SET title = $1, author = $2, price = $3, description = $4, stock = $5 WHERE id = $6 RETURNING *';
  const values = [title, author, price, description, stock, id];
  const result = await client.query(query, values);
  return result.rows.length > 0 ? result.rows[0] : null;
};

// Delete a book
export const deleteBook = async (id: number): Promise<void> => {
  const query = 'DELETE FROM books WHERE id = $1';
  await client.query(query, [id]);
};
