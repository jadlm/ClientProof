import { Router } from 'express';
import { getProjects, getProjectBySlug, createProject } from '../controllers/projects.controller';

const router = Router();

router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);
router.post('/', createProject);

export default router;
