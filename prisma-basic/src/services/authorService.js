import { PrismaClient } from '../../prisma/generated/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function addAuthor(name) {
    try {
        const newlyCreatedAuthor = await prisma.author.create({
            data: {
                name,
            }
        })
        return newlyCreatedAuthor;
    } catch (error) {
        console.error(error);
        throw error

    }
}
