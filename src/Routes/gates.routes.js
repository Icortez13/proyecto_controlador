/*Creando enrutado de los metodos para gates.js*/
import { Router } from "express";
import { 
    getGates,
    getGate,
    createGate,
    deleteGate,
    updateGate
} from "../controllers/gates.controller.js";

const router = Router();

router.get("/gates", getGates);

router.get("/gates/:id", getGate);

router.post("/gates", createGate);

router.delete("/gates/:id", deleteGate);

router.put("/gates/:id", updateGate);

export default router;