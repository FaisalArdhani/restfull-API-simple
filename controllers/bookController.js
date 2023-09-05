import Books from "../models/BookModel.js";

// method GET All
export const getBooks = async (req, res) => {
    try {
        const response = await Books.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// method GET by id
export const getBookBooksById = async (req, res) => {
    try {
        const book = await Books.findOne({
            where: { id: req.params.id }
        });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' })
        }

        res.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal server error' })
    }
};

// method POST New Book
export const createBooks = async (req, res) => {
    try {
        const newBook = await Books.create(req.body);
        res.status(201).json({ msg: 'successfully add a book', book: newBook })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'failed to add books, Internal server error' })
    }
}

// method PUT update Book by id
export const updateBooks = async (req, res) => {
    try {
        const upBook = await Books.update(req.body, {
            where: { id: req.params.id }
        });

        if (!upBook) {
            return res.status(404).json({ error: 'Book not found' })
        }

        res.status(201).json({ msg: 'successfully updated a book', upBook })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// method DELETE for delete books
export const deleteBooks = async (req, res) => {
    try {
        const book = await Books.findByPk(req.params.id);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' })
        }

        await book.destroy();
        res.status(200).json({ msg: 'Book deleted successfully' })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}