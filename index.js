import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import BookRoute from './routes/BookRoute.js'

// initialize
dotenv.config()
const app = express();
const PORT = process.env.SERVER_PORT

// Contection Database
try {
    await Sequelize.authenticate;
    console.log('Contection Database Successfully')
} catch (error) {
    console.log('Failed conection Database:', error)
}

// Endpoint || Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(BookRoute)

app.get('/', (req, res) => {
    res.end('Selamat datang di halaman utama!')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})