'use client';

import React, { useState } from 'react';
import { HelpCircle, Plus, Edit, Trash2, Save, X } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormSelect from '@/components/admin/forms/FormSelect';
import FormToast from '@/components/admin/forms/FormToast';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const initialFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does GoodEnough BESS replace conventional Diesel Generators (DG sets)?',
    answer: 'GoodEnough StorEDGE systems provide instantaneous power backup with sub-20ms switchover, eliminating fuel supply hassle, high maintenance costs, noise pollution, and toxic emissions.',
    category: 'General BESS',
  },
  {
    id: 'faq-2',
    question: 'Where is GoodEnough Energy’s manufacturing facility located?',
    answer: 'Our state-of-the-art automated Gigafactory is situated in Ecotech VII, Greater Noida, Uttar Pradesh, India, scaling to 7 GWh annual capacity.',
    category: 'Manufacturing',
  },
  {
    id: 'faq-3',
    question: 'What battery chemistry and safety mechanisms are utilized?',
    answer: 'All StorEDGE systems utilize Tier-1 Lithium Iron Phosphate (LiFePO4) chemistry with proprietary liquid cooling, multi-tier BMS, and aerosol fire suppression.',
    category: 'Safety & Tech',
  },
];

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);
  const [editingFaq, setEditingFaq] = useState<FaqItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq?.question || !editingFaq?.answer) return;

    if (isNew) {
      setFaqs((prev) => [...prev, { ...editingFaq, id: `faq-${Date.now()}` }]);
      setToast({ type: 'success', message: 'New FAQ created successfully!' });
    } else {
      setFaqs((prev) => prev.map((f) => (f.id === editingFaq.id ? editingFaq : f)));
      setToast({ type: 'success', message: 'FAQ updated successfully!' });
    }
    setEditingFaq(null);
    setIsNew(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      setFaqs((prev) => prev.filter((f) => f.id !== id));
      setToast({ type: 'success', message: 'FAQ deleted.' });
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">FAQ Management</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage questions and answers displayed across the homepage and product pages.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingFaq({ id: '', question: '', answer: '', category: 'General BESS' });
            setIsNew(true);
          }}
          className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New FAQ
        </button>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Editor Modal / Card */}
      {editingFaq && (
        <form onSubmit={handleSave} className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-300 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">
              {isNew ? 'Create New FAQ' : 'Edit FAQ Item'}
            </h3>
            <button
              type="button"
              onClick={() => {
                setEditingFaq(null);
                setIsNew(false);
              }}
              className="btn btn-xs btn-ghost text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <FormInput
                label="Question"
                name="question"
                value={editingFaq.question}
                onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                required
              />
            </div>
            <div>
              <FormSelect
                label="Category"
                name="category"
                value={editingFaq.category}
                onChange={(e) => setEditingFaq({ ...editingFaq, category: e.target.value })}
                options={[
                  { value: 'General BESS', label: 'General BESS' },
                  { value: 'Manufacturing', label: 'Manufacturing' },
                  { value: 'Safety & Tech', label: 'Safety & Tech' },
                  { value: 'Financial & ROI', label: 'Financial & ROI' },
                ]}
              />
            </div>
          </div>

          <FormTextarea
            label="Answer Content"
            name="answer"
            value={editingFaq.answer}
            onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
            rows={4}
            required
          />

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setEditingFaq(null);
                setIsNew(false);
              }}
              className="btn btn-sm btn-ghost rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-1.5"
            >
              <Save className="w-4 h-4" />
              Save FAQ
            </button>
          </div>
        </form>
      )}

      {/* FAQs List */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
        {faqs.map((faq) => (
          <div key={faq.id} className="p-6 hover:bg-slate-50/50 transition-colors flex items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <span className="badge badge-sm badge-ghost text-xs font-semibold text-slate-500">
                {faq.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => {
                  setEditingFaq(faq);
                  setIsNew(false);
                }}
                className="btn btn-xs btn-ghost text-slate-600 hover:text-emerald-700"
              >
                <Edit className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(faq.id)}
                className="btn btn-xs btn-ghost text-slate-400 hover:text-rose-600"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

