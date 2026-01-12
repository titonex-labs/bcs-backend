import { Farmer } from "../../../generated/prisma/client.ts";
import { prisma } from "../../lib/prisma.ts";

//* Insert Farmer
const createFarmer = async (data: Omit<Farmer, "id" | "createdAt" | "updatedAt">) => {
	// Insert into DB
	const result = await prisma.farmer.create({
		data,
	});
	// Return result
	return result;
};

//* Get Farmers
const getFarmers = async () => {
	// Retrieve all farmers from DB
	const result = await prisma.farmer.findMany();
	// Return result
	return result;
};

const farmersService = { createFarmer, getFarmers };

export { farmersService };
