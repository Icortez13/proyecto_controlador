import Gates from "../models/gates.js";

export const getGates = async (req, res) => {
    try {
        const gates = await Gates.find();
    res.json(flights);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getGate = async (req, res) => {
    try {
        const gate = await Gates.findById(req.params.id);
        if(!gate) return res.status(404).json({message :'Vuelo no encontrado'});
        res.json(flight);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const createGate = async (req, res) => {
    const {gateNumber, gateFlights, gateStatus} = req.body;
    try {
        
    } catch (error) {
        
    }

}
export const deleteGate = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}
export const updateGate = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}

