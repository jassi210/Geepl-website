'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Clock, Tag, Image as ImageIcon } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormSelect from '@/components/admin/forms/FormSelect';
import FormToggle from '@/components/admin/forms/FormToggle';
import FormTagsInput from '@/components/admin/forms/FormTagsInput';
import FormFileUpload from '@/components/admin/forms/FormFileUpload';
import FormSection from '@/components/admin/forms/FormSection';
import FormActions from '@/components/admin/forms/FormActions';
import FormToast from '@/components/admin/forms/FormToast';

export default function NewBlogPage() {
  const router = useRouter();
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Engineering & Tech',
    author: 'GoodEnough R&D Lab',
    readTime: '6 min read',
    excerpt: '',
    content: '',
    coverImageUrl: null as string | null,
    tags: ['BESS', 'Liquid Cooling', 'Energy Storage'],
    isPublished: true,
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
      ...(name === 'title' && !prev.slug
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
    if (!formData.title || !formData.content) {
      setToast({ type: 'error', message: 'Please provide both an Article Title and Content.' });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      await new Promise((res) => setTimeout(res, 800));
      setToast({ type: 'success', message: 'Article published successfully!' });
      setTimeout(() => {
        router.push('/admin/blogs');
      }, 1000);
    } catch {
      setToast({ type: 'error', message: 'Failed to publish article.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-16 max-w-5xl mx-auto">
      <div>
        <Link
          href="/admin/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Articles
        </Link>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Publish Technical Article
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Share engineering breakthroughs, regulatory compliance updates, and white papers.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* ── Section 1: Article Identity ── */}
      <FormSection
        title="1. Article Identity"
        description="Headline, slug, author, and reading time estimation."
        badge="Required"
      >
        <FormInput
          label="Article Headline"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="e.g. Thermodynamics of Liquid Cooling in Extreme Climates"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FormInput
            label="URL Slug"
            name="slug"
            value={formData.slug}
            onChange={handleInputChange}
            placeholder="thermodynamics-liquid-cooling"
            prefixText="/blogs/"
            required
          />

          <FormSelect
            label="Topic Category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            options={[
              { value: 'Engineering & Tech', label: 'Engineering & Tech' },
              { value: 'Regulatory & Policy', label: 'Regulatory & Policy' },
              { value: 'Financial Economics', label: 'Financial Economics' },
              { value: 'Power Electronics', label: 'Power Electronics' },
              { value: 'Gigafactory News', label: 'Gigafactory News' },
            ]}
          />

          <FormSelect
            label="Author Byline"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            options={[
              { value: 'GoodEnough R&D Lab', label: 'GoodEnough R&D Lab' },
              { value: 'Akash Kaushik (Founder)', label: 'Akash Kaushik (Founder)' },
              { value: 'BMS Engineering Division', label: 'BMS Engineering Division' },
              { value: 'Advisory Desk', label: 'Advisory Desk' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Estimated Reading Duration"
            name="readTime"
            value={formData.readTime}
            onChange={handleInputChange}
            placeholder="6 min read"
          />

          <FormTagsInput
            label="Article Topic Tags"
            name="tags"
            tags={formData.tags}
            onChange={(newTags) => setFormData((prev) => ({ ...prev, tags: newTags }))}
            placeholder="Type tag and press Enter..."
          />
        </div>
      </FormSection>

      {/* ── Section 2: Media & Content ── */}
      <FormSection
        title="2. Cover Image & Body Content"
        description="Featured image banner, summary excerpt, and formatted article markdown."
      >
        <FormFileUpload
          label="Featured Header Image"
          name="coverImage"
          value={formData.coverImageUrl}
          onChange={(url) => setFormData((prev) => ({ ...prev, coverImageUrl: url }))}
          accept="image/*"
          helperText="Upload 16:9 banner image (PNG or JPG under 10MB)"
        />

        <FormTextarea
          label="Short Excerpt / Teaser"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleInputChange}
          rows={3}
          maxLength={280}
          placeholder="Brief 2-line teaser displayed on listing cards..."
          helperText="Displayed in blog index previews and search snippets."
        />

        <FormTextarea
          label="Full Article Content (Markdown or HTML supported)"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          rows={12}
          required
          placeholder="Write or paste your article content here..."
        />
      </FormSection>

      {/* ── Section 3: SEO & Publishing ── */}
      <FormSection
        title="3. Search Optimization & Status"
        description="Meta description and public publication status."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Meta Title"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleInputChange}
            placeholder="Article Title | GoodEnough Energy"
          />

          <FormInput
            label="Meta Description"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleInputChange}
            placeholder="Key takeaways for Google search engine indexing..."
          />
        </div>

        <FormToggle
          label="Publish to Live Website"
          name="isPublished"
          checked={formData.isPublished}
          onChange={(checked) => setFormData((prev) => ({ ...prev, isPublished: checked }))}
          description="When checked, article is immediately readable by the public on /blogs."
          badge={formData.isPublished ? 'Live' : 'Draft'}
        />
      </FormSection>

      <FormActions
        isSubmitting={isSubmitting}
        submitLabel="Publish Article"
        cancelHref="/admin/blogs"
      />
    </form>
  );
}

