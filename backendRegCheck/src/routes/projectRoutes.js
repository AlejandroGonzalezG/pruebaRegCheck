import { Router } from "express"
import { projectCreate, projectDelete, projectGet, projectList, projectUpdate } from '../controllers/projectController.js'

const router = Router();

router.get('/projects', projectList)

router.get('/project', projectGet)

router.post('/project', projectCreate)

router.delete('/project', projectDelete)

router.put('/project', projectUpdate)

export default router
