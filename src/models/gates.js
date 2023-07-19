import mongoose from 'mongoose';

const gatesSchema = new mongoose.Schema({
    gateNumber:{
        type: Number,
        required: true,
        trill: true,
        unique: true,
    },
    gateFlights:{
        type: mongoose.Types.ObjectId,
        ref: "Flights",
    },
    gateStatus:{
        type: String,
        required: true,
    }

},{
    timestamps: true
});

export default mongoose.model("Gates", gatesSchema);


