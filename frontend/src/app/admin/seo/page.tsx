'use client';

import React, { useState } from 'react';
import { Search, Save, Globe } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormSection from '@/components/admin/forms/FormSection';
import FormActions from '@/components/admin/forms/FormActions';
import FormToast from '@/components/admin/forms/FormToast';

export default function AdminSeoPage() {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [seo, setSeo] = useState({
    defaultTitle: 'GoodEnough Energy | Leading BESS Gigafactory — Greater Noida, India',
    titleSuffix: ' | GoodEnough Energy',
    defaultDescription: 'GoodEnough Energy manufactures advanced Battery Energy Storage Systems (BESS) at its 7 GWh gigafactory in Greater Noida. Powering commercial, industrial, and utility-scale energy storage with liquid cooling & AI fire safety.',
    ogImageUrl: 'https://goodenough.energy/og-image.jpg',
    canonicalBase: 'https://goodenough.energy',
    keywords: 'BESS India, Battery Energy Storage, StorEDGE, Greater Noida Gigafactory, Commercial BESS, Utility Energy Storage, DG Replacement',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 500));
    setIsSubmitting(false);
    setToast({ type: 'success', message: 'Global SEO parameters and OpenGraph tags updated!' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-16 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          SEO & Meta Tags Manager
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Fine-tune search engine ranking signals, title templates, and OpenGraph social previews.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <FormSection
        title="1. Global Meta Defaults"
        description="Applied to pages when specific custom overrides are not present."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Default Title Tag"
            name="defaultTitle"
            value={seo.defaultTitle}
            onChange={(e) => setSeo({ ...seo, defaultTitle: e.target.value })}
            required
          />

          <FormInput
            label="Title Suffix Template"
            name="titleSuffix"
            value={seo.titleSuffix}
            onChange={(e) => setSeo({ ...seo, titleSuffix: e.target.value })}
            placeholder=" | GoodEnough Energy"
          />
        </div>

        <FormTextarea
          label="Default Meta Description"
          name="defaultDescription"
          value={seo.defaultDescription}
          onChange={(e) => setSeo({ ...seo, defaultDescription: e.target.value })}
          rows={3}
          maxLength={320}
        />

        <FormInput
          label="Global Meta Keywords"
          name="keywords"
          value={seo.keywords}
          onChange={(e) => setSeo({ ...seo, keywords: e.target.value })}
          helperText="Comma separated search keywords."
        />
      </FormSection>

      <FormSection
        title="2. Social Media & OpenGraph (OG) Preview"
        description="Controls how links preview on LinkedIn, Twitter, and WhatsApp."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Canonical Base URL"
            name="canonicalBase"
            value={seo.canonicalBase}
            onChange={(e) => setSeo({ ...seo, canonicalBase: e.target.value })}
            placeholder="https://goodenough.energy"
          />

          <FormInput
            label="OpenGraph Social Image URL"
            name="ogImageUrl"
            value={seo.ogImageUrl}
            onChange={(e) => setSeo({ ...seo, ogImageUrl: e.target.value })}
            placeholder="https://goodenough.energy/og-image.jpg"
          />
        </div>
      </FormSection>

      <FormActions isSubmitting={isSubmitting} submitLabel="Save SEO Configurations" />
    </form>
  );
}

