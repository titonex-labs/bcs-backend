import { Router } from "express";
import { bookingsController } from "./bookings.controller.ts";

//* Router
const router = Router();

// POST /
router.post("/", bookingsController.createBooking);

export { router as bookingsRouter };
