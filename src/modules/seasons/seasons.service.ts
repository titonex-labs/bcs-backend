import { Season } from "../../../generated/prisma/client.ts";
import { prisma } from "../../lib/prisma.ts";

//* Insert Season
const createSeason = async (data: Omit<Season, "id" | "createdAt">) => {
	// Insert into DB
	const result = await prisma.season.create({ data });
	// Return result
	return result;
};

//* Get Seasons
const getSeasons = async () => {
	// Retrieve all seasons from DB
	const result = await prisma.season.findMany();
	// Return result
	return result;
};

const seasonsService = { createSeason, getSeasons };

export { seasonsService };
