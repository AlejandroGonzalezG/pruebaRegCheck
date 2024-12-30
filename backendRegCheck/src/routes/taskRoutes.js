import { Router } from "express"
import { taskCreate, taskDelete, taskGet, taskList, taskUpdate } from '../controllers/taskController.js'

const router = Router();

router.get('/tasks', taskList)

router.get('/task', taskGet)

router.post('/task', taskCreate)

router.delete('/task', taskDelete)

router.put('/task', taskUpdate)

export default router
