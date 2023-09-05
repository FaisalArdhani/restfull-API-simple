import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db