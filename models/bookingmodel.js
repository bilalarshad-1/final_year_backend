import mongoose from 'mongoose';

const bookingTemplate = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String, // Changed from Number to String
        required: true
    },
    numberofguests: {
        type: Number,
        required: true
    },
    bookingdate: {
        type: String,
        required: true
    },
    bookingtime: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Use a capitalized name for the model
const Booking = mongoose.model('Booking', bookingTemplate);
export default Booking; // Use export default for ES module