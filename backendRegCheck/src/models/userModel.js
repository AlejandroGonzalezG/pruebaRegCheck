// models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Se debe ingresar un correo válido'],
    unique: [true, 'El correo ya existe']
  },
  password: {
    type: String,
    required: [true, 'Se debe ingresar una contraseña válida']
  },
  role: {
    type: String,
    enum: ['operator', 'admin'],
    default: 'operator'
  }
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);
