import { Router } from "express"
import { registerUser, loginUser, logout } from '../controllers/userController.js'
import { validateToken } from '../middleware/validateToken.js'

const router = Router();

router.post('/register', registerUser)

router.post('/login', loginUser)

router.post('/logout', validateToken, logout)

export default router
