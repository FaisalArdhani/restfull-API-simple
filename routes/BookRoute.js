import express from 'express';
import { getBooks, getBookBooksById, createBooks, updateBooks, deleteBooks } from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', getBooks)
router.get('/books/:id', getBookBooksById)
router.post('/books', createBooks)
router.put('/books/:id', updateBooks)
router.delete('/books/:id', deleteBooks)

export default router