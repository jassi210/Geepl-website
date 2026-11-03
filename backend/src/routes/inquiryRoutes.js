import { Router } from 'express';
import { InquiryController } from '../controllers/inquiryController.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { inquirySchema } from '../validators/inquiryValidator.js';

const router = Router();

router.post('/', validateRequest(inquirySchema), InquiryController.create);
router.get('/', InquiryController.list);
router.get('/:id', InquiryController.getById);

export default router;

