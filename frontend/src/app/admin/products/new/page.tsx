'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Box,
  Zap,
  Shield,
  Thermometer,
  Layers,
  FileText,
  DollarSign,
  Search,
} from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormSelect from '@/components/admin/forms/FormSelect';
import FormToggle from '@/components/admin/forms/FormToggle';
import FormTagsInput from '@/components/admin/forms/FormTagsInput';
import FormFileUpload from '@/components/admin/forms/FormFileUpload';
import FormSection from '@/components/admin/forms/FormSection';
import FormActions from '@/components/admin/forms/FormActions';
import FormToast from '@/components/admin/forms/FormToast';

export default function NewProductPage() {
  const router = useRouter();
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    segment: 'Commercial & Industrial',
    badge: 'New Release',
    usableCapacity: '',
    continuousPower: '',
    chemistry: 'Prismatic Lithium Iron Phosphate (LiFePO4)',
    dcVoltageMin: '614.4',
    dcVoltageMax: '780.8',
    roundTripEfficiency: '88.5',
    switchoverTime: '< 20 ms',
    thermalCooling: 'Active Liquid Glycol Circulation',
    cellThermalDelta: '±2°C',
    ingressProtection: 'IP55 Outdoor Weatherproof',
    fireSafety: 'Aerosol Extinguishant + Early Multi-Gas Detection',
    operatingTempMin: '-10',
    operatingTempMax: '55',
    shortDescription: '',
    fullOverview: '',
    highlights: [
      'Liquid thermal cooling keeping cells within ±2°C',
      'Sub-20ms seamless backup transition (< 1 cycle)',
      'Modular parallel scaling',
    ],
    targetApplications: ['Hospitals & Healthcare', 'Data Centres', 'Manufacturing Facilities'],
    datasheetUrl: null as string | null,
    isActive: true,
    metaTitle: '',
    metaDescription: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'name' && !prev.slug
        ? {
            slug: value
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, ''),
          }
        : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.usableCapacity) {
      setToast({ type: 'error', message: 'Please fill in all required fields (Product Name and Usable Capacity).' });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      // Simulate API saving
      await new Promise((resolve) => setTimeout(resolve, 900));
      setToast({ type: 'success', message: `Product "${formData.name}" successfully created and saved!` });
      setTimeout(() => {
        router.push('/admin/products');
      }, 1200);
    } catch {
      setToast({ type: 'error', message: 'Failed to save product. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Top Header & Breadcrumb */}
      <div>
        <Link
          href="/admin/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Products Catalog
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Create New BESS Platform
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Define electrical ratings, thermal cooling architecture, safety systems, and public datasheets.
            </p>
          </div>
          <span className="badge badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold px-3 py-2 text-xs">
            Make in India Standard
          </span>
        </div>
      </div>

      {/* Toast Feedback */}
      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* ── Section 1: Basic Product Identity ── */}
      <FormSection
        title="1. Platform Identity & Segment"
        description="Core name, customer segment, and public URL slug."
        badge="Required"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. StorEDGE 0.25"
            required
            helperText="The consumer-facing brand designation."
          />

          <FormInput
            label="URL Slug"
            name="slug"
            value={formData.slug}
            onChange={handleInputChange}
            placeholder="storedge-0-25"
            prefixText="/products/"
            required
            helperText="Public route path."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormSelect
            label="Market Segment"
            name="segment"
            value={formData.segment}
            onChange={handleInputChange}
            options={[
              { value: 'Commercial & Industrial', label: 'Commercial & Industrial (C&I)' },
              { value: 'Utility & Grid Scale', label: 'Utility & Grid Scale (High Voltage)' },
              { value: 'Microgrid & Hybrid', label: 'Microgrid & Telecom' },
              { value: 'EV Fast-Charging', label: 'EV Ultra-Fast Hubs' },
            ]}
          />

          <FormInput
            label="Product Card Badge"
            name="badge"
            value={formData.badge}
            onChange={handleInputChange}
            placeholder="e.g. C&I Flagship"
            helperText="Visual chip displayed on the public card."
          />
        </div>
      </FormSection>

      {/* ── Section 2: Electrical & Capacity Ratings ── */}
      <FormSection
        title="2. Electrical & Electrochemical Parameters"
        description="Usable kWh, voltage limits, efficiency, and cell chemistry."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormInput
            label="Usable Energy Capacity"
            name="usableCapacity"
            value={formData.usableCapacity}
            onChange={handleInputChange}
            placeholder="e.g. 250 kWh or 5 MWh"
            required
            suffixText="Usable"
          />

          <FormInput
            label="Continuous Power Rating"
            name="continuousPower"
            value={formData.continuousPower}
            onChange={handleInputChange}
            placeholder="e.g. 125 kW (0.5C)"
            suffixText="kW / MW"
          />

          <FormInput
            label="Round-Trip AC-AC Efficiency"
            name="roundTripEfficiency"
            value={formData.roundTripEfficiency}
            onChange={handleInputChange}
            placeholder="88.5"
            suffixText="%"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormInput
            label="Min DC Voltage"
            name="dcVoltageMin"
            value={formData.dcVoltageMin}
            onChange={handleInputChange}
            placeholder="614.4"
            suffixText="V DC"
          />

          <FormInput
            label="Max DC Voltage"
            name="dcVoltageMax"
            value={formData.dcVoltageMax}
            onChange={handleInputChange}
            placeholder="780.8"
            suffixText="V DC"
          />

          <FormInput
            label="Switchover Transfer Speed"
            name="switchoverTime"
            value={formData.switchoverTime}
            onChange={handleInputChange}
            placeholder="< 20 ms"
            helperText="Islanding transition latency."
          />
        </div>

        <FormSelect
          label="Battery Cell Chemistry"
          name="chemistry"
          value={formData.chemistry}
          onChange={handleInputChange}
          options={[
            {
              value: 'Prismatic Lithium Iron Phosphate (LiFePO4)',
              label: 'Prismatic Lithium Iron Phosphate (LiFePO4) - Tier 1 Cells',
            },
            {
              value: 'LFP Ultra-High-Cycle Prismatic (314Ah)',
              label: 'LFP Ultra-High-Cycle Prismatic (314Ah Grid Cells)',
            },
            {
              value: 'Sodium-Ion Next-Gen (Prototype)',
              label: 'Sodium-Ion Next-Gen (Prototype Testing)',
            },
          ]}
        />
      </FormSection>

      {/* ── Section 3: Thermal & Safety Architecture ── */}
      <FormSection
        title="3. Thermal Management & Fire Protection"
        description="Liquid cooling mechanics and multi-stage safety containment."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Thermal Cooling Architecture"
            name="thermalCooling"
            value={formData.thermalCooling}
            onChange={handleInputChange}
            placeholder="Active Liquid Glycol Circulation"
          />

          <FormInput
            label="Max Cell Temperature Delta"
            name="cellThermalDelta"
            value={formData.cellThermalDelta}
            onChange={handleInputChange}
            placeholder="±2°C"
            helperText="Maximum allowed gradient across all modules."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Enclosure Ingress Rating"
            name="ingressProtection"
            value={formData.ingressProtection}
            onChange={handleInputChange}
            placeholder="IP55 Outdoor Weatherproof"
          />

          <FormInput
            label="Fire Detection & Extinguishment"
            name="fireSafety"
            value={formData.fireSafety}
            onChange={handleInputChange}
            placeholder="Aerosol Extinguishant + Early Gas Matrix"
          />
        </div>
      </FormSection>

      {/* ── Section 4: Key Highlights & Applications ── */}
      <FormSection
        title="4. Key Highlights & Applications"
        description="Bullet points rendered on product cards and target industry tags."
      >
        <FormTagsInput
          label="Key Engineering Highlights (Card Bullets)"
          name="highlights"
          tags={formData.highlights}
          onChange={(newTags) => setFormData((prev) => ({ ...prev, highlights: newTags }))}
          placeholder="Add engineering highlight and press Enter..."
          helperText="Press Enter or comma to create bullet points for marketing cards."
        />

        <FormTagsInput
          label="Target Deployment Sectors"
          name="targetApplications"
          tags={formData.targetApplications}
          onChange={(newTags) => setFormData((prev) => ({ ...prev, targetApplications: newTags }))}
          placeholder="e.g. Data Centres, Hospitals..."
        />
      </FormSection>

      {/* ── Section 5: Marketing Descriptions & Datasheet ── */}
      <FormSection
        title="5. Descriptions & Technical Datasheet PDF"
        description="Product copy and downloadable asset attachment."
      >
        <FormTextarea
          label="Short Elevator Summary"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleInputChange}
          rows={2}
          maxLength={250}
          placeholder="Brief 2-line summary displayed on catalog listings..."
        />

        <FormTextarea
          label="Full Engineering Overview"
          name="fullOverview"
          value={formData.fullOverview}
          onChange={handleInputChange}
          rows={4}
          placeholder="Detailed narrative describing architecture, scalability, and BMS capabilities..."
        />

        <FormFileUpload
          label="Technical Datasheet (PDF)"
          name="datasheet"
          value={formData.datasheetUrl}
          onChange={(url) => setFormData((prev) => ({ ...prev, datasheetUrl: url }))}
          accept="application/pdf"
          helperText="Upload official PDF datasheet for clients to download."
        />
      </FormSection>

      {/* ── Section 6: SEO & Visibility ── */}
      <FormSection
        title="6. Search Engine Optimization & Publishing Status"
        description="Meta tags and live visibility on public website."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="SEO Meta Title"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleInputChange}
            placeholder="StorEDGE 0.25 | GoodEnough Energy"
          />

          <FormInput
            label="SEO Meta Description"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleInputChange}
            placeholder="Commercial 250 kWh liquid-cooled BESS..."
          />
        </div>

        <FormToggle
          label="Publish to Live Website Immediately"
          name="isActive"
          checked={formData.isActive}
          onChange={(checked) => setFormData((prev) => ({ ...prev, isActive: checked }))}
          description="When enabled, this product platform appears in the public navigation and catalog."
          badge={formData.isActive ? 'Live' : 'Draft'}
        />
      </FormSection>

      {/* Form Action Buttons */}
      <FormActions
        isSubmitting={isSubmitting}
        submitLabel="Publish BESS Platform"
        cancelHref="/admin/products"
      />
    </form>
  );
}

