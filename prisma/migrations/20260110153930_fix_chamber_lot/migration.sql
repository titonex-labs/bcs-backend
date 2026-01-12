/*
  Warnings:

  - You are about to drop the column `capacitySacks` on the `chamber_lot` table. All the data in the column will be lost.
  - You are about to drop the column `capacityWeight` on the `chamber_lot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "chamber_lot" DROP COLUMN "capacitySacks",
DROP COLUMN "capacityWeight";
