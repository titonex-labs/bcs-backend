import { Router } from "express";
import { seasonsController } from "./seasons.controller.ts";

//* Router
const router = Router();

// POST /
router.post("/", seasonsController.createSeason);

export { router as seasonsRouter };
