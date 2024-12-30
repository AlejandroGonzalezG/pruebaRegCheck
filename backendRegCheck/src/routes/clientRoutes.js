import { Router } from "express"
import { clientCreate, clientDelete, clientGet, clientList, clientUpdate } from '../controllers/clientController.js'

const router = Router();

router.get('/clients', clientList)

router.get('/client', clientGet)

router.post('/client', clientCreate)

router.delete('/client', clientDelete)

router.put('/client', clientUpdate)

export default router
