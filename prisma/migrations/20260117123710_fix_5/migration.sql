/*
  Warnings:

  - You are about to alter the column `bookingNo` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
CREATE SEQUENCE booking_bookingno_seq;
ALTER TABLE "booking" ALTER COLUMN "bookingNo" SET DEFAULT nextval('booking_bookingno_seq');
ALTER SEQUENCE booking_bookingno_seq OWNED BY "booking"."bookingNo";
