import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  genero: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
  }
});

export default mongoose.model('user', userSchema);