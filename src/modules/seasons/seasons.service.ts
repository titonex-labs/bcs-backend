import { Season } from "../../../generated/prisma/client.ts";
import { prisma } from "../../lib/prisma.ts";

//* Insert Season
const createSeason = async (data: Omit<Season, "id" | "createdAt">) => {
	// Insert into DB
	const result = await prisma.season.create({ data });
	// Return result
	return result;
};

const seasonsService = { createSeason };

export { seasonsService };
