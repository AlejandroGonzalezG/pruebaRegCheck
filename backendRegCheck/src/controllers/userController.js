import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Todos los campos son necesarios'})
  }
  const user = await User.findOne({ email })
  if (user) {
    return res.status(400).json({ message: 'El usuario ya existe'})
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    password: hashedPassword
  });

  if (newUser) {
    console.log(newUser);
    return res.status(201).json({ message: 'El usuario se ha creado correctamente'})
  }
  return res.status(400).json({ message: 'Ha ocurrido un error al crear el usuario'})
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Todos los campos son necesarios'})
  }

  const user = await User.findOne({ email })
  if (user && (await bcrypt.compare(password, user.password))) {
    const userData = {
      email: user.email,
      role: user.role
    }
    const accessToken = jwt.sign({
      user: {
        email: user.email,
        role: user.role
      }
    }, process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1440m"}
  );
    return res.status(200).json({ accessToken, user: userData })
  }
  return res.status(401).json({ message: 'Email y/o password incorrectos'})
}

const logout = async (req, res) => {
  return res.json({ message: 'Logout post ok'})
}


export { registerUser, loginUser, logout };
