import { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include userId
declare global {
  namespace Express {
    interface Request {
      userId?:  string;
    }
  }
}
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};
export default authMiddleware;
