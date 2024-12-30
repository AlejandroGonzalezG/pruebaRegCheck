import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();


const validateToken = async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'El usuario no esta autorizado'}) 
      }
      req.user = decoded.user;
      next();
    })
    if (!token) {
      return res.status(401).json({ message: 'El usuario no esta autorizado'});
    }
  }
  return res.status(400).json({ message: 'Ha ocurrido un error'});
};

export { validateToken };