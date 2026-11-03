'use client';

import React, { useState } from 'react';
import { Settings, Shield, Bell, Globe, Database, Save } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormToggle from '@/components/admin/forms/FormToggle';
import FormSection from '@/components/admin/forms/FormSection';
import FormActions from '@/components/admin/forms/FormActions';
import FormToast from '@/components/admin/forms/FormToast';

export default function AdminSettingsPage() {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    siteName: 'GoodEnough Energy',
    tagline: 'Power That Stores. Energy That Lasts.',
    metaDescription: 'GoodEnough Energy operates India’s leading 7 GWh BESS gigafactory in Greater Noida, manufacturing StorEDGE battery energy storage platforms.',
    googleAnalyticsId: 'G-GEEPL99482',
    leadWebhookUrl: 'https://hooks.slack.com/services/T00/B00/X00',
    notifyOnNewInquiry: true,
    notifyOnJobApplication: true,
    maintenanceMode: false,
    enforceHttps: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      await new Promise((res) => setTimeout(res, 600));
      setToast({ type: 'success', message: 'System configuration settings updated successfully!' });
    } catch {
      setToast({ type: 'error', message: 'Failed to update settings.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-16 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          System & Enterprise Settings
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Configure global metadata, third-party analytics, and automated lead alerts.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* ── Section 1: Global Identity & Metadata ── */}
      <FormSection
        title="1. Global Website Metadata"
        description="Brand title, default tagline, and search engine defaults."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Website Title"
            name="siteName"
            value={formData.siteName}
            onChange={handleInputChange}
            placeholder="GoodEnough Energy"
            required
          />

          <FormInput
            label="Primary Tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleInputChange}
            placeholder="Power That Stores. Energy That Lasts."
          />
        </div>

        <FormTextarea
          label="Default Global Meta Description"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleInputChange}
          rows={3}
          maxLength={300}
        />
      </FormSection>

      {/* ── Section 2: Integrations & Webhooks ── */}
      <FormSection
        title="2. Telemetry, Analytics & Inbound Alerts"
        description="Real-time notifications for incoming customer sizing requests."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Google Analytics / Tag Manager ID"
            name="googleAnalyticsId"
            value={formData.googleAnalyticsId}
            onChange={handleInputChange}
            placeholder="G-XXXXXXXXXX"
          />

          <FormInput
            label="Inbound Lead Webhook (Slack / Discord)"
            name="leadWebhookUrl"
            value={formData.leadWebhookUrl}
            onChange={handleInputChange}
            placeholder="https://hooks.slack.com/..."
            helperText="Notifies engineering channel when an inquiry is received."
          />
        </div>

        <div className="space-y-3 pt-2">
          <FormToggle
            label="Send Immediate Alert for New BESS Inquiries"
            name="notifyOnNewInquiry"
            checked={formData.notifyOnNewInquiry}
            onChange={(checked) => setFormData((prev) => ({ ...prev, notifyOnNewInquiry: checked }))}
            description="Dispatches email & webhook alert within 60 seconds of submission."
          />

          <FormToggle
            label="Send Alert for New Job Applications"
            name="notifyOnJobApplication"
            checked={formData.notifyOnJobApplication}
            onChange={(checked) => setFormData((prev) => ({ ...prev, notifyOnJobApplication: checked }))}
            description="Routes job applications directly to the HR & technical hiring committee."
          />
        </div>
      </FormSection>

      {/* ── Section 3: Security & Maintenance ── */}
      <FormSection
        title="3. Security & Operational State"
        description="Emergency maintenance mode and encryption enforcement."
      >
        <FormToggle
          label="Maintenance Mode"
          name="maintenanceMode"
          checked={formData.maintenanceMode}
          onChange={(checked) => setFormData((prev) => ({ ...prev, maintenanceMode: checked }))}
          description="When enabled, public visitors see a maintenance screen while admin portal remains accessible."
          badge={formData.maintenanceMode ? 'Active Maintenance' : 'Normal Operations'}
        />
      </FormSection>

      <FormActions
        isSubmitting={isSubmitting}
        submitLabel="Save System Settings"
      />
    </form>
  );
}

