/*
  Warnings:

  - You are about to drop the column `house` on the `PC` table. All the data in the column will be lost.
  - You are about to drop the column `room` on the `PC` table. All the data in the column will be lost.
  - You are about to drop the column `houses` on the `Room` table. All the data in the column will be lost.
  - Added the required column `houseId` to the `PC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomId` to the `PC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_house_fkey";

-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_room_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_houses_fkey";

-- AlterTable
ALTER TABLE "PC" DROP COLUMN "house",
DROP COLUMN "room",
ADD COLUMN     "houseId" TEXT NOT NULL,
ADD COLUMN     "roomId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "houses",
ADD COLUMN     "houseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
