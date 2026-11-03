import { AuthService } from '../services/authService.js';

export const AuthController = {
  async login(req, res, next) {
    try {
      const result = await AuthService.login(req.validatedBody);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  },

  async forgotPassword(req, res, next) {
    try {
      await AuthService.forgotPassword(req.validatedBody.email);
      // Always return success to avoid email enumeration
      res.status(200).json({
        success: true,
        message: 'If this email is registered, a reset link has been sent.',
      });
    } catch (error) {
      next(error);
    }
  },

  async resetPassword(req, res, next) {
    try {
      await AuthService.resetPassword(req.validatedBody);
      res.status(200).json({ success: true, message: 'Password has been reset successfully.' });
    } catch (error) {
      next(error);
    }
  },
};

