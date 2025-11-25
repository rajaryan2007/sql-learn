import express from "express";
const bookController = "../controllers/bookController";

const router = express.Router();

router.post("/add-new-book", bookController.addBook);

module.exports = router;
