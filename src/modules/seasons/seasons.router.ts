import { Router } from "express";
import { seasonsController } from "./seasons.controller.ts";

//* Router
const router = Router();

// POST /
router.post("/", seasonsController.createSeason);
// GET /
router.get("/", seasonsController.getSeasons);

export { router as seasonsRouter };
