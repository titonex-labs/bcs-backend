import { Router } from "express";
import { agentsController } from "./agents.controller.ts";

//* Router
const router = Router();

// POST /
router.post("/", agentsController.createAgent);
// GET /
router.get("/", agentsController.getAgents);

export { router as agentsRouter };
