'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Briefcase, MapPin, DollarSign, CheckCircle2 } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormSelect from '@/components/admin/forms/FormSelect';
import FormToggle from '@/components/admin/forms/FormToggle';
import FormTagsInput from '@/components/admin/forms/FormTagsInput';
import FormSection from '@/components/admin/forms/FormSection';
import FormActions from '@/components/admin/forms/FormActions';
import FormToast from '@/components/admin/forms/FormToast';

export default function NewCareerPage() {
  const router = useRouter();
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    department: 'Engineering & R&D',
    location: 'Greater Noida Gigafactory',
    employmentType: 'Full-Time (On-Site)',
    experience: '3–6 Years',
    salaryRange: '₹14–22 LPA + ESOPs',
    applicationEmail: 'careers@goodenough.energy',
    overview: '',
    responsibilities: [
      'Lead design of high-density battery modules',
      'Perform thermal potting and laser weld inspection',
      'Optimize cell-level interconnect resistance',
    ],
    qualifications: [
      'B.Tech / M.Tech in Electrical, Mechanical or Aerospace Engineering',
      'Demonstrated experience with Lithium-ion battery architectures',
      'Familiarity with IEC 62619 / UL 9540A testing procedures',
    ],
    isActive: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      setToast({ type: 'error', message: 'Please provide a Job Role Title.' });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      await new Promise((res) => setTimeout(res, 750));
      setToast({ type: 'success', message: 'Job opening posted successfully!' });
      setTimeout(() => {
        router.push('/admin/careers');
      }, 1000);
    } catch {
      setToast({ type: 'error', message: 'Failed to save job opening.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-16 max-w-5xl mx-auto">
      <div>
        <Link
          href="/admin/careers"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Openings
        </Link>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Post Job Opening
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Publish engineering and operational roles at Greater Noida Gigafactory.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* ── Section 1: Role Overview ── */}
      <FormSection
        title="1. Role Designation & Department"
        description="Job title, department category, and workplace location."
        badge="Required"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Job Position Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g. Battery Systems Integration Engineer"
            required
          />

          <FormSelect
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            options={[
              { value: 'Engineering & R&D', label: 'Engineering & R&D' },
              { value: 'Software & Embedded', label: 'Software & Embedded (BMS)' },
              { value: 'Thermal Engineering', label: 'Thermal Engineering (CFD)' },
              { value: 'Manufacturing Operations', label: 'Manufacturing & Robotics' },
              { value: 'Commercial & Pre-Sales', label: 'Commercial & Pre-Sales Solutions' },
              { value: 'Quality & Testing', label: 'Quality & Regulatory Testing' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormInput
            label="Workplace Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Greater Noida Gigafactory"
          />

          <FormSelect
            label="Employment Model"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleInputChange}
            options={[
              { value: 'Full-Time (On-Site)', label: 'Full-Time (On-Site)' },
              { value: 'Hybrid (Noida / Remote)', label: 'Hybrid (Noida / Remote)' },
              { value: 'Contract / Technical Advisor', label: 'Contract / Technical Advisor' },
            ]}
          />

          <FormInput
            label="Experience Level"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="3–6 Years"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Budgeted Compensation / CTC"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleInputChange}
            placeholder="₹14–22 LPA + Equity"
            helperText="Internal recruitment bracket."
          />

          <FormInput
            label="Application Routing Inbox"
            name="applicationEmail"
            value={formData.applicationEmail}
            onChange={handleInputChange}
            placeholder="careers@goodenough.energy"
          />
        </div>
      </FormSection>

      {/* ── Section 2: Requirements & Responsibilities ── */}
      <FormSection
        title="2. Job Description & Competencies"
        description="Responsibilities list and minimum candidate qualifications."
      >
        <FormTextarea
          label="Job Role Executive Summary"
          name="overview"
          value={formData.overview}
          onChange={handleInputChange}
          rows={3}
          placeholder="Brief 3-sentence summary of the mission and impact of this role..."
        />

        <FormTagsInput
          label="Key Responsibilities (Bullet Items)"
          name="responsibilities"
          tags={formData.responsibilities}
          onChange={(newTags) => setFormData((prev) => ({ ...prev, responsibilities: newTags }))}
          placeholder="Type responsibility and press Enter..."
        />

        <FormTagsInput
          label="Qualifications & Technical Skills Required"
          name="qualifications"
          tags={formData.qualifications}
          onChange={(newTags) => setFormData((prev) => ({ ...prev, qualifications: newTags }))}
          placeholder="Type requirement and press Enter..."
        />
      </FormSection>

      {/* ── Section 3: Visibility ── */}
      <FormSection
        title="3. Publication Status"
        description="Toggle whether candidates can view this opening on /career."
      >
        <FormToggle
          label="Actively Accept Applications"
          name="isActive"
          checked={formData.isActive}
          onChange={(checked) => setFormData((prev) => ({ ...prev, isActive: checked }))}
          description="When enabled, this opening appears publicly on the website careers portal."
          badge={formData.isActive ? 'Active' : 'Paused'}
        />
      </FormSection>

      <FormActions
        isSubmitting={isSubmitting}
        submitLabel="Post Job Opening"
        cancelHref="/admin/careers"
      />
    </form>
  );
}

