import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().trim().min(2).max(255),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal('')),
  subject: z.string().trim().min(3).max(255),
  message: z.string().trim().min(10).max(5000),
});

