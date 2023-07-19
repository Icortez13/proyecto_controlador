import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
flight_number: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
},
airline: {
    type: String,
    required: true,
    trim: true,
},
capacity: {
    type: Number,
    required: true,
    trim: true,
},
state: {
    type: String,
    required: true,
    trim: true,
},
},{
    timestamps:true
});

export default mongoose.model("Flights", flightSchema);
