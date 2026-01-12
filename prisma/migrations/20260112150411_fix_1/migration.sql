/*
  Warnings:

  - You are about to drop the `chamber` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "chamber";

-- CreateTable
CREATE TABLE "chamber_lot" (
    "id" UUID NOT NULL,
    "floorNo" SMALLINT NOT NULL,
    "chamberNo" SMALLINT NOT NULL,
    "lotNo" SMALLINT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "chamber_lot_pkey" PRIMARY KEY ("id")
);
