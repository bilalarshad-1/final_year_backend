import express from 'express';
import multer from 'multer';
import Chef from '../models/Chef.js';

const router = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Create a new chef
router.post('/', upload.single('picture'), async (req, res) => {
  try {
    const newChef = new Chef({
      name: req.body.name,
      rank: req.body.rank,
      picture: req.file.filename // Store only filename
    });
    await newChef.save();
    res.status(201).json({ message: 'Chef added successfully', chef: newChef });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add chef' });
  }
});

// Get all chefs
router.get('/', async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json(chefs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get a specific chef
router.get('/:id', async (req, res) => {
  try {
    const chef = await Chef.findById(req.params.id);
    if (!chef) return res.status(404).json({ message: 'Chef not found' });
    res.status(200).json(chef);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a chef
router.put('/:id', upload.single('picture'), async (req, res) => {
  try {
    const { name, rank } = req.body;
    const updateData = { name, rank };

    if (req.file) {
      updateData.picture = req.file.filename; // Update picture if provided
    }

    const updatedChef = await Chef.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedChef) return res.status(404).json({ message: 'Chef not found' });

    res.status(200).json(updatedChef);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a chef
router.delete('/:id', async (req, res) => {
  try {
    const deletedChef = await Chef.findByIdAndDelete(req.params.id);
    if (!deletedChef) return res.status(404).json({ message: 'Chef not found' });
    res.status(200).json({ message: 'Chef deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
