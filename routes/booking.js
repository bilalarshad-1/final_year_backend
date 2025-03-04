import express from 'express';
import Booking from '../models/bookingmodel.js'; // Ensure this path is correct

const router = express.Router();

// POST route for creating a new booking
router.post('/', async (request, response) => {
    const newBooking = new Booking({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        phone: request.body.phone,
        numberofguests: request.body.numberofguests,
        bookingdate: request.body.bookingdate,
        bookingtime: request.body.bookingtime,
    });

    try {
        const savedBooking = await newBooking.save();
        console.log("Successfully added to database");
        response.status(201).json(savedBooking);
    } catch (error) {
        console.error("Error saving booking:", error);
        response.status(500).json({ message: "Error saving booking", error });
    }
});

// GET route for fetching all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find(); // Fetch all bookings from the database
        res.status(200).json(bookings); // Send the bookings as a JSON response
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Error fetching bookings", error });
    }
});

export default router;