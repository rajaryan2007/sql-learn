const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({});

async function addBook(title, publishedDate, authorId) {
    try {
        const newlyCreatedBook = await prisma.book.create({
            data: {
                title,
                publishedDate,
                author: {
                    connect: { id: authorId }
                }
            },
            include: { author: true }
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
            include:{author:true}
        })
    } catch (error) {
        throw error
    }
}

async function getBookBuyId(id) {
    try {
        const book = await prisma.book.findUnique({
            where:{id},
            include:{author:true}
        })
        if(!book){
          throw new Error("BOOK with this id don't found")
            
        }

    } catch (error) {
        throw new Error(errro);
                
    }
}

module.exports = { addBook,getAllBook ,getBookBuyId};
