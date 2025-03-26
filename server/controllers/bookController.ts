import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

// Get all books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Add a new book (admin only)
export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, price, description } = req.body;

    const newBook = await Book.create({
      title,
      author,
      price,
      description,
    });

    return res.status(201).json({ message: 'Book added successfully', newBook });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Update an existing book (admin only)
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, price, description } = req.body;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.title = title;
    book.author = author;
    book.price = price;
    book.description = description;

    await book.save();
    return res.status(200).json({ message: 'Book updated successfully', book });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a book (admin only)
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await book.destroy();
    return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};
