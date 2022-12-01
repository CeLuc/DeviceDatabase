/*
  Warnings:

  - You are about to drop the column `housenumber` on the `PC` table. All the data in the column will be lost.
  - You are about to drop the column `roomname` on the `PC` table. All the data in the column will be lost.
  - You are about to drop the column `houseId` on the `Room` table. All the data in the column will be lost.
  - Added the required column `house` to the `PC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room` to the `PC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `house` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_housenumber_fkey";

-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_roomname_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_houseId_fkey";

-- AlterTable
ALTER TABLE "PC" DROP COLUMN "housenumber",
DROP COLUMN "roomname",
ADD COLUMN     "house" TEXT NOT NULL,
ADD COLUMN     "room" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "houseId",
ADD COLUMN     "house" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_house_fkey" FOREIGN KEY ("house") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_room_fkey" FOREIGN KEY ("room") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_house_fkey" FOREIGN KEY ("house") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
