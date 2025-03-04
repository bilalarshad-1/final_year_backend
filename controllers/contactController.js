import Contact from "../models/Contact.js";

// Get all messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
};

// Post a new message
export const createMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;
    const newMessage = new Contact({ firstName, lastName, email, subject, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving message", error });
  }
};

// Delete a message by ID
export const deleteMessage = async (req, res) => {
  try {
    console.log("Delete request received for ID:", req.params.id);

    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid message ID format" });
    }

    const deletedMessage = await Contact.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully!" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ message: "Error deleting message", error });
  }
};
