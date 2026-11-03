import { JobApplicationModel } from '../models/jobApplicationModel.js';

export const CareerService = {
  async applyForJob(data) {
    return await JobApplicationModel.create(data);
  },

  async getAllApplications() {
    return await JobApplicationModel.findAll();
  },

  async getApplicationById(id) {
    const app = await JobApplicationModel.findById(id);
    if (!app) {
      const err = new Error('Application not found');
      err.statusCode = 404;
      throw err;
    }
    return app;
  },

  async updateStatus(id, status) {
    const result = await JobApplicationModel.updateStatus(id, status);
    if (!result) {
      const err = new Error('Application not found');
      err.statusCode = 404;
      throw err;
    }
    return result;
  },
};

