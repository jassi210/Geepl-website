import { CareerService } from '../services/careerService.js';

export const CareerController = {
  async apply(req, res, next) {
    try {
      const application = await CareerService.applyForJob(req.validatedBody);
      res.status(201).json({
        success: true,
        message: 'Your application has been received. Our HR team will be in touch.',
        data: application,
      });
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const applications = await CareerService.getAllApplications();
      res.status(200).json({ success: true, data: applications });
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const application = await CareerService.getApplicationById(req.params.id);
      res.status(200).json({ success: true, data: application });
    } catch (error) {
      next(error);
    }
  },

  async updateStatus(req, res, next) {
    try {
      const result = await CareerService.updateStatus(req.params.id, req.body.status);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  },
};

