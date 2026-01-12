/*
  Warnings:

  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Booking";

-- CreateTable
CREATE TABLE "booking" (
    "id" UUID NOT NULL,
    "bookingNo" BIGSERIAL NOT NULL,
    "seasonId" UUID NOT NULL,
    "agentId" UUID NOT NULL,
    "farmerId" UUID NOT NULL,
    "bookedSacks" INTEGER NOT NULL,
    "advanceAmount" INTEGER NOT NULL,
    "note" VARCHAR(150),
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "bookedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);
