-- DropIndex
DROP INDEX "PC_ip_key";

-- AlterTable
ALTER TABLE "PC" ALTER COLUMN "ip" SET DEFAULT E'dhcp';
