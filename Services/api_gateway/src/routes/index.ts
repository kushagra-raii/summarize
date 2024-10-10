import { Router } from 'express';
import summarizeRoutes from './summarizeRoute';
import tasksRoutes from './tasksRoutes';
import notesRoutes from './notesRoutes';

const router = Router();

// Mount routes for each service
// router.use('/api', summarizeRoutes);
// router.use('/api', tasksRoutes);
// router.use('/api', notesRoutes);

export default router;

