'use client';

import React, { useState } from 'react';
import { User, Lock, Mail, ShieldCheck, KeyRound, Save } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormSection from '@/components/admin/forms/FormSection';
import FormActions from '@/components/admin/forms/FormActions';
import FormToast from '@/components/admin/forms/FormToast';

export default function AdminProfilePage() {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'Jaspal Singh',
    username: 'admin',
    email: 'admin@goodenough.energy',
    role: 'Superadmin',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setToast({ type: 'error', message: 'New password and confirmation do not match.' });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      await new Promise((res) => setTimeout(res, 600));
      setToast({ type: 'success', message: 'Admin profile updated successfully!' });
      setFormData((prev) => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
    } catch {
      setToast({ type: 'error', message: 'Failed to update profile.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-16 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Admin Profile & Security
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Manage your personal credentials, contact email, and system password.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Profile Details */}
      <FormSection
        title="1. Personal Information"
        description="Name and login username associated with this console."
        badge={formData.role}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            icon={User}
            required
          />

          <FormInput
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Notification & Security Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            icon={Mail}
            required
          />

          <FormInput
            label="Assigned Role"
            name="role"
            value={formData.role}
            disabled
            helperText="Role permissions managed under Roles & RBAC."
          />
        </div>
      </FormSection>

      {/* Password Update */}
      <FormSection
        title="2. Change Password"
        description="Leave blank if you do not wish to modify your password."
      >
        <FormInput
          label="Current Password"
          name="currentPassword"
          type="password"
          value={formData.currentPassword}
          onChange={handleInputChange}
          placeholder="••••••••"
          icon={Lock}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="New Password"
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="At least 8 characters"
            icon={KeyRound}
          />

          <FormInput
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="••••••••"
            icon={KeyRound}
          />
        </div>
      </FormSection>

      <FormActions isSubmitting={isSubmitting} submitLabel="Save Profile Changes" />
    </form>
  );
}

