import { NewsletterModel } from '../models/newsletterModel.js';

export const NewsletterService = {
  async subscribe(email) {
    return await NewsletterModel.subscribe(email);
  },
};

