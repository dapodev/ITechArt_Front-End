import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date },
});

export default mongoose.model('Note', noteSchema);
