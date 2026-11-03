import { NewsletterService } from '../services/newsletterService.js';

export const NewsletterController = {
  async subscribe(req, res, next) {
    try {
      const subscriber = await NewsletterService.subscribe(req.validatedBody.email);
      res.status(201).json({
        success: true,
        message: 'Successfully subscribed to GoodEnough Energy updates.',
        data: { email: subscriber.email },
      });
    } catch (error) {
      next(error);
    }
  },
};

