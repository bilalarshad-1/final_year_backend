import express from "express";
import { getAllMessages, createMessage, deleteMessage } from "../controllers/contactController.js";

const router = express.Router();

router.get("/contact", getAllMessages); // Fetch all messages
router.post("/contact", createMessage); // Store new message
router.delete("/contact/:id", deleteMessage); // Delete a message

export default router;
