/*
  Warnings:

  - You are about to drop the column `domain` on the `PC` table. All the data in the column will be lost.
  - Added the required column `network` to the `PC` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_domain_fkey";

-- AlterTable
ALTER TABLE "PC" DROP COLUMN "domain",
ADD COLUMN     "network" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_network_fkey" FOREIGN KEY ("network") REFERENCES "Network"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
