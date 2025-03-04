import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true },
  picture: { type: String, required: true } // Store only filename
});

const Chef = mongoose.model('Chef', chefSchema);
export default Chef;
