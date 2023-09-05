import { Sequelize } from 'sequelize';
import db from '../config/Database.js'

const DataTypes = Sequelize

const Books = db.define('books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING
    },
    publication_year: {
        type: DataTypes.INTEGER
    },
    genre: {
        type: DataTypes.STRING
    },
    isbn: {
        type: DataTypes.STRING(20)
    },
    description: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    tableName: 'books',
    freezeTableName: true
});

export default Books
