/*
  Warnings:

  - You are about to alter the column `bookingNo` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "booking" ALTER COLUMN "bookingNo" SET DEFAULT nextval('booking_bookingno_seq'),
ALTER COLUMN "bookingNo" DROP DEFAULT,
ALTER COLUMN "bookingNo" SET DATA TYPE INTEGER;
