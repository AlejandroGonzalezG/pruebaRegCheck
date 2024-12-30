import { Router } from "express"
import { reunionCreate, reunionDelete, reunionGet, reunionList, reunionUpdate } from '../controllers/reunionController.js'

const router = Router();

router.get('/reunions', reunionList)

router.get('/reunion', reunionGet)

router.post('/reunion', reunionCreate)

router.delete('/reunion', reunionDelete)

router.put('/reunion', reunionUpdate)

export default router
