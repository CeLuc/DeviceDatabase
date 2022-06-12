/*
  Warnings:

  - You are about to drop the column `staticip` on the `PC` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ip]` on the table `PC` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PC" DROP COLUMN "staticip",
ADD COLUMN     "ip" TEXT,
ADD COLUMN     "modelId" TEXT;

-- CreateTable
CREATE TABLE "Model" (
    "id" TEXT NOT NULL,
    "modelnumber" TEXT NOT NULL,
    "dualscreem" BOOLEAN NOT NULL DEFAULT false,
    "manufactorId" TEXT NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manufactor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Manufactor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "modell" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "buydate" TEXT NOT NULL,
    "waranty" INTEGER NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VM" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "os" TEXT NOT NULL,

    CONSTRAINT "VM_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manufactor_name_key" ON "Manufactor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Server_hostname_key" ON "Server"("hostname");

-- CreateIndex
CREATE UNIQUE INDEX "Server_ip_key" ON "Server"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "VM_hostname_key" ON "VM"("hostname");

-- CreateIndex
CREATE UNIQUE INDEX "VM_ip_key" ON "VM"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "PC_ip_key" ON "PC"("ip");

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_manufactorId_fkey" FOREIGN KEY ("manufactorId") REFERENCES "Manufactor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
