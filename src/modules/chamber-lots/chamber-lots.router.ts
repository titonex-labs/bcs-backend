import { Router } from "express";
import { chamberLotsController } from "./chamber-lots.controller.ts";

//* Router
const router = Router();

// POST /
router.post("/", chamberLotsController.createChamberLot);

export { router as chamberLotsRouter };
