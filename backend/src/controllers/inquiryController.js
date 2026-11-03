import { InquiryService } from '../services/inquiryService.js';

export const InquiryController = {
  async create(req, res, next) {
    try {
      const inquiry = await InquiryService.submitInquiry(req.validatedBody);
      res.status(201).json({
        success: true,
        data: inquiry,
      });
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const inquiries = await InquiryService.getAllInquiries();
      res.status(200).json({
        success: true,
        data: inquiries,
      });
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const inquiry = await InquiryService.getInquiryById(req.params.id);
      res.status(200).json({
        success: true,
        data: inquiry,
      });
    } catch (error) {
      next(error);
    }
  },
};

