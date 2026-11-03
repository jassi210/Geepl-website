import { InquiryModel } from '../models/inquiryModel.js';

export const InquiryService = {
  async submitInquiry(data) {
    return await InquiryModel.create(data);
  },

  async getAllInquiries() {
    return await InquiryModel.findAll();
  },

  async getInquiryById(id) {
    const inquiry = await InquiryModel.findById(id);
    if (!inquiry) {
      const error = new Error('Inquiry not found');
      error.statusCode = 404;
      throw error;
    }
    return inquiry;
  },
};

