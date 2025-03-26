import express from 'express';
import { signup, login, getProfile } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// POST /api/users/signup - Create a new user
router.post('/signup', signup);

// POST /api/users/login - Log in and get a JWT token
router.post('/login', login);

// GET /api/users/profile - Get the authenticated user's profile (protected)
router.get('/profile', authMiddleware, getProfile);

export default router;
