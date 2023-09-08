import { Login, Register, getUsers } from '../controllers/UserController.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import express from 'express';

const router = express.Router();

router.get('/profile', verifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);

export default router;