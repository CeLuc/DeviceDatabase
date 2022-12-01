/*
  Warnings:

  - You are about to drop the column `house` on the `PC` table. All the data in the column will be lost.
  - Added the required column `houseId` to the `PC` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_house_fkey";

-- AlterTable
ALTER TABLE "PC" DROP COLUMN "house",
ADD COLUMN     "houseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
