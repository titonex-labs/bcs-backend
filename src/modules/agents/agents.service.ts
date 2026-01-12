import { Agent } from "../../../generated/prisma/client.ts";
import { prisma } from "../../lib/prisma.ts";

//* Insert Agent
const createAgent = async (
	data: Omit<Agent, "id" | "isActive" | "createdAt" | "updatedAt">,
) => {
	// Insert into DB
	const result = await prisma.agent.create({
		data,
	});
	// Return result
	return result;
};

//* Get Agents
const getAgents = async () => {
	// Retrieve all agents from DB
	const result = await prisma.agent.findMany();
	// Return result
	return result;
};

const agentsService = { createAgent, getAgents };

export { agentsService };
