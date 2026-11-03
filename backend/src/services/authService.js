import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { AdminUserModel } from '../models/adminUserModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'geepl_jwt_secret_2026_change_in_production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

export const AuthService = {
  async login({ email, password }) {
    const user = await AdminUserModel.findByEmail(email);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 401;
      throw err;
    }

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      const err = new Error('Invalid credentials');
      err.statusCode = 401;
      throw err;
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
        isActive: user.is_active,
      },
    };
  },

  async forgotPassword(email) {
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    const found = await AdminUserModel.setResetToken(email, token, expiresAt);
    // In production, send reset email here
    return found;
  },

  async resetPassword({ token, password }) {
    const user = await AdminUserModel.findByResetToken(token);
    if (!user) {
      const err = new Error('Invalid or expired reset token');
      err.statusCode = 400;
      throw err;
    }
    const hash = await bcrypt.hash(password, 12);
    await AdminUserModel.updatePassword(user.id, hash);
    return true;
  },
};

