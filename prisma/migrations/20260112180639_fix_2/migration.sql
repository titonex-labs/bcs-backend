/*
  Warnings:

  - Added the required column `currentLoad` to the `chamber_lot` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LotStatus" AS ENUM ('EMPTY', 'PARTIAL', 'FULL');

-- AlterTable
ALTER TABLE "chamber_lot" ADD COLUMN     "currentLoad" SMALLINT NOT NULL,
ADD COLUMN     "status" "LotStatus" NOT NULL DEFAULT 'EMPTY';
