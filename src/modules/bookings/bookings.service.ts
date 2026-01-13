import { Booking } from "../../../generated/prisma/client.ts";
import { prisma } from "../../lib/prisma.ts";

//* Insert Booking
const createBooking = async (
	data: Omit<Booking, "id" | "bookingNo" | "bookedAt" | "updatedAt">,
) => {
	// Insert into DB
	const result = await prisma.booking.create({
		data,
	});
	// Return result
	return result;
};

const bookingsService = { createBooking };

export { bookingsService };
