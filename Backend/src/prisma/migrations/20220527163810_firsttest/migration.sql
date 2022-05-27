-- CreateTable
CREATE TABLE "PC" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "staticip" BOOLEAN NOT NULL DEFAULT false,
    "housenumber" INTEGER NOT NULL,
    "roomname" TEXT NOT NULL,

    CONSTRAINT "PC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "House" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "houseId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PC_hostname_key" ON "PC"("hostname");

-- CreateIndex
CREATE UNIQUE INDEX "House_number_key" ON "House"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Room_name_key" ON "Room"("name");

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_housenumber_fkey" FOREIGN KEY ("housenumber") REFERENCES "House"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_roomname_fkey" FOREIGN KEY ("roomname") REFERENCES "Room"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
