import { Request, Response } from "express";
import { Farmer } from "../../../generated/prisma/client.ts";
import { farmersService } from "./farmers.service.ts";

//* Create a Farmer
const createFarmer = async (req: Request, res: Response) => {
	try {
		// Nuts and Bolts
		const data: Farmer = await farmersService.createFarmer(req.body);
		// 201 success response
		return res.status(201).json({
			success: true,
			message: "Farmer profile created successfully",
			data,
		});
	} catch (err: any) {
		// 500 error response
		return res.status(500).json({
			success: false,
			message: "Unable to create farmer profile",
			error: {
				code: err.code || undefined,
				message: err.message || undefined,
				details: err,
			},
		});
	}
};

const farmersController = { createFarmer };

export { farmersController };
