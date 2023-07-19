/*Importando el esquema de nuestro modelo*/
import Flights from "../models/flights.js";

/*Encontrar todos los vuelos*/ 
export const getFlights = async (req, res) => {
    try {
    const flights = await Flights.find();
    res.json(flights);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/*Encontrar vuelo por ID*/ 
export const getFlight = async (req, res) => {
    try {
    const flight = await Flights.findById(req.params.id);
    if(!flight) return res.status(404).json({message :'Vuelo no encontrado'});
    res.json(flight);
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
};

/*Creando nuevo vuelo*/
export const createFlight = async (req, res) => {
    const {flight_number, airline, capacity, state} = req.body;
    try {
        const newFlight = new Flights({
            flight_number,
            airline,
            capacity,
            state
        })
        const flightSaved = await newFlight.save();
        res.json({
            id: flightSaved._id,
            flight_number: flightSaved.flight_number,
            airline: flightSaved.airline,
            capacity: flightSaved.capacity,
            state: flightSaved.state,
            createdAt: flightSaved.createdAt,
            updatedAt: flightSaved.updatedAt,
        });
    } catch (error){
        return res.status(500).json({ message: error.message });
    }
};

/*Borrando un vuelo*/
export const deleteFlight = async (req, res) => {
    try {
    const deletedFlight = await Flights.findByIdAndDelete(req.params.id);
    if(!deletedFlight) 
    return res.status(404).json({message :'Vuelo no encontrado'});
    
    return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
};

/*Actualizando vuelo*/
export const updateFlight = async (req, res) => {
    try {
    const flightUpdated = await Flights.findByIdAndUpdate(
        req.params.id, req.body, 
        {new: true}
    );
    res.json(flightUpdated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
