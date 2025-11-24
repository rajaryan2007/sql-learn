import * as authorService from '../services/authorService.js';

export const addAuthor = async (req, res) => {
    try {
        const { name } = req.body;
        const author = await authorService.addAuthor(name);
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} 


