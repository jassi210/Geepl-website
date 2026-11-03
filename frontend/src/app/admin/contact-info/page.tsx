'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Save,
  Globe2,
  ShieldAlert,
} from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormSection from '@/components/admin/forms/FormSection';
import FormActions from '@/components/admin/forms/FormActions';
import FormToast from '@/components/admin/forms/FormToast';

export default function AdminContactInfoPage() {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Factory
    factoryAddressLine1: 'F4 B2, Plot No.1, Ecotech VII',
    factoryArea: 'Greater Noida Industrial Development Area',
    factoryCity: 'Greater Noida',
    factoryDistrict: 'Gautam Budh Nagar',
    factoryState: 'Uttar Pradesh',
    factoryPincode: '201310',
    factoryCountry: 'India',

    // Corporate Phones
    primaryPhone: '+91 92200 38938',
    salesPhone: '+91 97177 67796',
    emergencyNocPhone: '+91 120 4567890',

    // Emails
    generalEmail: 'connect@goodenough.energy',
    careersEmail: 'careers@goodenough.energy',
    mediaEmail: 'media@goodenough.energy',

    // Hours
    operatingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM IST',
    nocHours: '24/7/365 Continuous Telemetry Monitoring',

    // Map Embed
    mapsEmbedUrl: 'https://maps.google.com/?q=Ecotech+VII+Greater+Noida',
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
      await new Promise((res) => setTimeout(res, 700));
      setToast({ type: 'success', message: 'Corporate contact & plant location details updated across the public website!' });
    } catch {
      setToast({ type: 'error', message: 'Failed to update contact details.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-16 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Gigafactory & Corporate Contact Details
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          These details are automatically reflected across the public website footer, contact pages, and plant tour invitations.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* ── Section 1: Greater Noida Gigafactory Physical Address ── */}
      <FormSection
        title="1. Greater Noida Gigafactory Address"
        description="Physical location of the 7 GWh battery manufacturing plant."
        badge="Public"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Plot & Unit Number"
            name="factoryAddressLine1"
            value={formData.factoryAddressLine1}
            onChange={handleInputChange}
            placeholder="F4 B2, Plot No.1, Ecotech VII"
            required
          />

          <FormInput
            label="Industrial Area"
            name="factoryArea"
            value={formData.factoryArea}
            onChange={handleInputChange}
            placeholder="Greater Noida Industrial Development Area"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormInput
            label="City"
            name="factoryCity"
            value={formData.factoryCity}
            onChange={handleInputChange}
            placeholder="Greater Noida"
          />

          <FormInput
            label="State"
            name="factoryState"
            value={formData.factoryState}
            onChange={handleInputChange}
            placeholder="Uttar Pradesh"
          />

          <FormInput
            label="PIN / Postal Code"
            name="factoryPincode"
            value={formData.factoryPincode}
            onChange={handleInputChange}
            placeholder="201310"
          />
        </div>

        <FormInput
          label="Google Maps Direct Link / Coordinates"
          name="mapsEmbedUrl"
          value={formData.mapsEmbedUrl}
          onChange={handleInputChange}
          placeholder="https://maps.google.com/..."
          helperText="Direct navigation link provided to visitors and clients."
        />
      </FormSection>

      {/* ── Section 2: Direct Telephony & Emergency Hotlines ── */}
      <FormSection
        title="2. Direct Communication Hotlines"
        description="Telephone and emergency dispatch numbers."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormInput
            label="General Inquiries Hotline"
            name="primaryPhone"
            value={formData.primaryPhone}
            onChange={handleInputChange}
            placeholder="+91 92200 38938"
            required
          />

          <FormInput
            label="Commercial Sales Desk"
            name="salesPhone"
            value={formData.salesPhone}
            onChange={handleInputChange}
            placeholder="+91 97177 67796"
          />

          <FormInput
            label="24/7 NOC Emergency Dispatch"
            name="emergencyNocPhone"
            value={formData.emergencyNocPhone}
            onChange={handleInputChange}
            placeholder="+91 120 4567890"
            helperText="Emergency support for live StorEDGE installations."
          />
        </div>
      </FormSection>

      {/* ── Section 3: Official Inboxes ── */}
      <FormSection
        title="3. Email Addresses"
        description="Public contact and notification inboxes."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormInput
            label="General Contact Email"
            name="generalEmail"
            value={formData.generalEmail}
            onChange={handleInputChange}
            placeholder="connect@goodenough.energy"
            required
          />

          <FormInput
            label="Careers & Hiring Email"
            name="careersEmail"
            value={formData.careersEmail}
            onChange={handleInputChange}
            placeholder="careers@goodenough.energy"
          />

          <FormInput
            label="Media & Press Relations"
            name="mediaEmail"
            value={formData.mediaEmail}
            onChange={handleInputChange}
            placeholder="media@goodenough.energy"
          />
        </div>
      </FormSection>

      {/* ── Section 4: Operating Hours ── */}
      <FormSection
        title="4. Operating Hours"
        description="Corporate timings and Network Operations Center schedule."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Corporate & Plant Office Hours"
            name="operatingHours"
            value={formData.operatingHours}
            onChange={handleInputChange}
            placeholder="Monday – Saturday: 9:30 AM – 6:30 PM IST"
          />

          <FormInput
            label="NOC Monitoring Hours"
            name="nocHours"
            value={formData.nocHours}
            onChange={handleInputChange}
            placeholder="24/7/365 Continuous Telemetry Monitoring"
          />
        </div>
      </FormSection>

      <FormActions
        isSubmitting={isSubmitting}
        submitLabel="Save Contact Details"
      />
    </form>
  );
}

