import express from 'express';
import { getBooks, addBook, updateBook, deleteBook } from '../controllers/bookController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// GET /api/books - Get all books
router.get('/', getBooks);

// POST /api/books - Add a new book (admin only)
router.post('/', authMiddleware, addBook);

// PUT /api/books/:id - Update a book (admin only)
router.put('/:id', authMiddleware, updateBook);

// DELETE /api/books/:id - Delete a book (admin only)
router.delete('/:id', authMiddleware, deleteBook);

export default router;
