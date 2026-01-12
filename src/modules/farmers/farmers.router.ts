import { Router } from "express";
import { farmersController } from "./farmers.controller.ts";

//* Router
const router = Router();

// POST /
router.post("/", farmersController.createFarmer);

export { router as farmersRouter };
