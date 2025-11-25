const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({});

async function addBook(title, publishedDate, authorId) {
  try {
    const newlyCreatedBook = await prisma.book.create({
      data: {
        title,
        publishedDate,
        author: {
          connect: { id: authorId },
        },
      },
      include: { author: true },
    });

    return newlyCreatedBook;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllBook() {
  try {
    const books = await prisma.book.findMany({
      include: { author: true },
    });
    return books;
  } catch (error) {
    throw error;
  }
}

async function getBookBuyId(id) {
  try {
    const book = await prisma.book.findUnique({
      where: { id },
      include: { author: true },
    });
    if (!book) {
      throw new Error("BOOK with this id don't found");
    }
    return book;
  } catch (error) {
    throw new Error(errro);
  }
}

async function updateBook(id, newTitle) {
  try {
    const Book = await prisma.book.findUnique({
      where: { id },
      include: { author: true },
    });
    if (!Book) {
      throw new Error(`Book with id ${id} no found`);
    }
    const updatedBook = await prisma.book.update({
      where: { id },
      data: {
        title: newTitle,
      },
      include: {
        author: true,
      },
    });
    return updatedBook;
  } catch (error) {
    throw error;
  }
}

async function deleteBook(id) {
  try {
    const deletedBook = await prisma.book.delete({
      where: { id },
      include: { author: true },
    });
    return deleteBook;
  } catch (error) {
    throw error;
  }
}

module.exports = { addBook, getAllBook, getBookBuyId, updateBook, deleteBook };
