import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/Database.js';
import BookRoute from './routes/BookRoute.js'
import UserRoute from './routes/UserRoute.js';

// initialize
dotenv.config()
const app = express();
const PORT = process.env.SERVER_PORT

// Contection Database
try {
    await db.authenticate();
    console.log('Contection Database Successfully...')
} catch (error) {
    console.log('Failed conection Database:', error)
}

// Endpoint || Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(BookRoute);
app.use('/users', UserRoute);

// middleware that sends error messages
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
});

app.get('/', (req, res) => {
    res.end('Selamat datang di Books Store')
});

// Server running
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});