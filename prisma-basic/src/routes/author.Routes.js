import express from 'express';
import * as authorController from '../controllers/authorController.js';

const router = express.Router();

router.post("/add-author",authorController.addAuthor)

export default router;