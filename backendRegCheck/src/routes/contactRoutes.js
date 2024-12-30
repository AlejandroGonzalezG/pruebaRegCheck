import { Router } from "express"
import { contactCreate, contactDelete, contactGet, contactList, contactUpdate } from '../controllers/contactController.js'

const router = Router();

router.get('/contacts', contactList)

router.get('/contact', contactGet)

router.post('/contact', contactCreate)

router.delete('/contact', contactDelete)

router.put('/contact', contactUpdate)

export default router
