'use client';

import React, { useState } from 'react';
import { Tags, Plus, Edit, Trash2, Save } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormToast from '@/components/admin/forms/FormToast';

interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

const initialCategories: Category[] = [
  { id: 'cat-1', name: 'Engineering & Tech', slug: 'engineering-tech', count: 6 },
  { id: 'cat-2', name: 'Regulatory & Policy', slug: 'regulatory-policy', count: 3 },
  { id: 'cat-3', name: 'Financial Economics', slug: 'financial-economics', count: 4 },
  { id: 'cat-4', name: 'Power Electronics', slug: 'power-electronics', count: 2 },
  { id: 'cat-5', name: 'Gigafactory News', slug: 'gigafactory-news', count: 5 },
];

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [newCatName, setNewCatName] = useState('');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    const slug = newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    setCategories([...categories, { id: `cat-${Date.now()}`, name: newCatName.trim(), slug, count: 0 }]);
    setNewCatName('');
    setToast({ type: 'success', message: `Category "${newCatName}" added!` });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Content Categories</h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Organize technical whitepapers, news articles, and product segments.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Add New Category Inline Form */}
      <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <FormInput
            label="New Category Title"
            name="newCatName"
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            placeholder="e.g. Battery Safety Standards"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2 h-11 px-6 shrink-0 w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </form>

      {/* Categories Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Category Name</th>
                <th className="py-4 px-6">Slug Path</th>
                <th className="py-4 px-6">Associated Posts</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {categories.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-bold text-slate-900 text-sm">{c.name}</td>
                  <td className="py-4 px-6 font-mono text-emerald-800">{c.slug}</td>
                  <td className="py-4 px-6 font-semibold">{c.count} items</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => setCategories(categories.filter((x) => x.id !== c.id))}
                      className="btn btn-xs btn-ghost text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

