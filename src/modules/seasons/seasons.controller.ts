import { Request, Response } from "express";
import { Season } from "../../../generated/prisma/client.ts";
import { seasonsService } from "./seasons.service.ts";

//* Create a Season
const createSeason = async (req: Request, res: Response) => {
	try {
		// Nuts and Bolts
		const data: Season = await seasonsService.createSeason(req.body);
		// 201 success response
		return res.status(201).json({
			success: true,
			message: "Season created successfully",
			data,
		});
	} catch (err: any) {
		// 500 error response
		return res.status(500).json({
			success: false,
			message: "Unable to create season",
			error: {
				code: err.code || undefined,
				message: err.message || undefined,
				details: err,
			},
		});
	}
};

const seasonsController = { createSeason };

export { seasonsController };
