// models/userModel.ts
import client from '../database/db';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

// User type for TypeScript
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

// Create a new user in the database
export const createUser = async (username: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before saving
  const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id';
  const values = [username, email, hashedPassword];
  const result = await client.query(query, values);
  return result.rows[0]; // Return the new user's ID
};

// Find a user by email
export const findUserByEmail = async (email: string): Promise<User | null> => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await client.query(query, [email]);
  return result.rows.length > 0 ? result.rows[0] : null;
};

// Find a user by ID
export const findUserById = async (id: number): Promise<User | null> => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const result = await client.query(query, [id]);
  return result.rows.length > 0 ? result.rows[0] : null;
};

// Verify user's password
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
