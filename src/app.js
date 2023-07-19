import express from "express";
import morgan from "morgan";
import flightRoutes from "./Routes/flights.routes.js"
import gatesRoutes from "./Routes/gates.routes.js"
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", flightRoutes);
app.use("/api", gatesRoutes);
export default app;
