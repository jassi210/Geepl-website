import { z } from 'zod';

export const careerApplicationSchema = z.object({
  careerId: z.string().trim().min(1).max(100),
  jobTitle: z.string().trim().min(2).max(255),
  fullName: z.string().trim().min(2).max(255),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(50),
  portfolioUrl: z.string().url().max(500).optional().or(z.literal('')),
  resumeUrl: z.string().url().max(500).optional().or(z.literal('')),
  coverLetter: z.string().max(5000).optional().or(z.literal('')),
});

