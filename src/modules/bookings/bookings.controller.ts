import { Request, Response } from "express";
import { Booking } from "../../../generated/prisma/client.ts";
import { bookingsService } from "./bookings.service.ts";

//* Create a Booking
const createBooking = async (req: Request, res: Response) => {
	try {
		// Nuts and Bolts
		const data: Booking = await bookingsService.createBooking(req.body);
		// 201 success response
		return res.status(201).json({
			success: true,
			message: "Booking created successfully",
			data,
		});
	} catch (err: any) {
		// 500 error response
		return res.status(500).json({
			success: false,
			message: "Unable to create booking",
			error: {
				code: err.code || undefined,
				message: err.message || undefined,
				details: err,
			},
		});
	}
};

const bookingsController = { createBooking };

export { bookingsController };
