import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// menginisialisasikan
dotenv.config({ path: 'server.env' })
const app = express();

// Endpoint || Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.end('Selamat datang di halaman utama!')
})

app.listen(process.env.PORT, () => {
    console.log('Server running on port:', process.env.PORT)
})