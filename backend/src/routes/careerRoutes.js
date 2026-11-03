import { Router } from 'express';
import { CareerController } from '../controllers/careerController.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { careerApplicationSchema } from '../validators/careerValidator.js';

const router = Router();

router.post('/apply', validateRequest(careerApplicationSchema), CareerController.apply);
router.get('/applications', CareerController.list);
router.get('/applications/:id', CareerController.getById);
router.patch('/applications/:id/status', CareerController.updateStatus);

export default router;

