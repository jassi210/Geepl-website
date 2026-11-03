import { Router } from 'express';
import healthRoutes from './healthRoutes.js';
import inquiryRoutes from './inquiryRoutes.js';
import authRoutes from './authRoutes.js';
import newsletterRoutes from './newsletterRoutes.js';
import careerRoutes from './careerRoutes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/inquiries', inquiryRoutes);
router.use('/auth', authRoutes);
router.use('/newsletter', newsletterRoutes);
router.use('/careers', careerRoutes);

export default router;

