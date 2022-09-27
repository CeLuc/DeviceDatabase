-- CreateTable
CREATE TABLE "Vm" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL DEFAULT E'dhcp',

    CONSTRAINT "Vm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "date" TEXT[],
    "companytasks" TEXT NOT NULL,
    "processtitle" TEXT NOT NULL,
    "processbody" TEXT NOT NULL,
    "lessons" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vm_hostname_key" ON "Vm"("hostname");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
