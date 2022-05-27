/*
  Warnings:

  - You are about to drop the column `house` on the `Room` table. All the data in the column will be lost.
  - Added the required column `houses` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_house_fkey";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "house",
ADD COLUMN     "houses" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_houses_fkey" FOREIGN KEY ("houses") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
