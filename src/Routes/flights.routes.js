/*Creando enrutado de los metodos para flights.js*/
import { Router } from "express";
import { 
    getFlights,
    getFlight,
    createFlight,
    deleteFlight,
    updateFlight
} from "../controllers/flight.controller.js";

const router = Router();

router.get("/flights", getFlights);

router.get("/flights/:id", getFlight);

router.post("/flights", createFlight);

router.delete("/flights/:id", deleteFlight);

router.put("/flights/:id", updateFlight);

export default router;