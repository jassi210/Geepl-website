import { Router } from 'express';
import { NewsletterController } from '../controllers/newsletterController.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { newsletterSchema } from '../validators/newsletterValidator.js';

const router = Router();

router.post('/subscribe', validateRequest(newsletterSchema), NewsletterController.subscribe);

export default router;

