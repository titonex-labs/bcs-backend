import express, { Application } from "express";
import { agentsRouter } from "./modules/agents/agents.router.ts";
import { bookingsRouter } from "./modules/bookings/bookings.router.ts";
import { chamberLotsRouter } from "./modules/chamber-lots/chamber-lots.router.ts";
import { farmersRouter } from "./modules/farmers/farmers.router.ts";
import { seasonsRouter } from "./modules/seasons/seasons.router.ts";

//* Express App
const app: Application = express();

//* Global Middlewares
app.use(express.json());

//* Modules
app.use(`${process.env.API_BASE}/farmers`, farmersRouter);
app.use(`${process.env.API_BASE}/agents`, agentsRouter);
app.use(`${process.env.API_BASE}/bookings`, bookingsRouter);
app.use(`${process.env.API_BASE}/chamber-lots`, chamberLotsRouter);
app.use(`${process.env.API_BASE}/seasons`, seasonsRouter);

// GET /
app.get("/", (_req, res) => {
	// 200 Success response
	res.json({
		success: true,
		message: "Cold Greetings from Bengal CS!",
	});
});

export { app };
