/*
  Warnings:

  - You are about to drop the column `houseId` on the `PC` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `PC` table. All the data in the column will be lost.
  - You are about to drop the column `houseId` on the `Room` table. All the data in the column will be lost.
  - Added the required column `domain` to the `PC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `house` to the `PC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room` to the `PC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `house` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_houseId_fkey";

-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_houseId_fkey";

-- AlterTable
ALTER TABLE "PC" DROP COLUMN "houseId",
DROP COLUMN "roomId",
ADD COLUMN     "domain" TEXT NOT NULL,
ADD COLUMN     "house" TEXT NOT NULL,
ADD COLUMN     "room" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "houseId",
ADD COLUMN     "house" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Network" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Network_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Network_name_key" ON "Network"("name");

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_house_fkey" FOREIGN KEY ("house") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_room_fkey" FOREIGN KEY ("room") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_domain_fkey" FOREIGN KEY ("domain") REFERENCES "Network"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_house_fkey" FOREIGN KEY ("house") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
