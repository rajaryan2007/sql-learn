/*
  Warnings:

  - You are about to drop the column `publishedDate` on the `Book` table. All the data in the column will be lost.
  - Added the required column `publisedDate` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "publishedDate",
ADD COLUMN     "publisedDate" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;
