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
    const {gateNumber, gateFlightsId, gateStatus} = req.body;
    try {
        const newGate = new Gates({
            gateNumber,
            gateFlights: gateFlightsId,
            gateStatus,
        });
        const gateSaved = await newGate.save();
        res.json({
            id: gateSaved._id,
            gateNumber: gateSaved.gateNumber,
            gateFlight: gateSaved.gateFlights,
            gateStatus: gateSaved.gateStatus,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const deleteGate = async (req, res) => {
    try {
        const deletedFlight = await Flights.findByIdAndDelete(req.params.id);
        if(!deletedFlight) 
        return res.status(404).json({message :'Vuelo no encontrado'});
    
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const updateGate = async (req, res) => {
    try {
        const gatesUpdated = await Gates.findByIdAndUpdate(
            req.params.id, req.body, 
            {new: true}
        );
        res.json(gatesUpdated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

