/*
  Warnings:

  - You are about to drop the `chamber_lot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "chamber_lot";

-- CreateTable
CREATE TABLE "chamber" (
    "id" UUID NOT NULL,
    "floorNo" SMALLINT NOT NULL,
    "chamberNo" SMALLINT NOT NULL,
    "totalLots" SMALLINT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "chamber_pkey" PRIMARY KEY ("id")
);
