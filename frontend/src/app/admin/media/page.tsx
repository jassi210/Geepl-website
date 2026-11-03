'use client';

import React, { useState } from 'react';
import { Newspaper, Plus, ExternalLink, Edit } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';

const mediaList = [
  { id: 'm-1', title: 'GoodEnough Energy commences operations at its mega BESS Gigafactory in Greater Noida', source: 'Economic Times', date: 'Feb 2026' },
  { id: 'm-2', title: 'GoodEnough Energy unveils StorEDGE 5.0 containerised BESS for utility-scale solar farms', source: 'PV Magazine India', date: 'Jan 2026' },
  { id: 'm-3', title: 'How GoodEnough Energy is solving the thermal challenge in Indian extreme climates', source: 'Energetica India', date: 'Dec 2025' },
];

export default function AdminMediaPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Media & Press Features</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage press clippings, national coverage, and downloadable media kits.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Headline</th>
                <th className="py-4 px-6">Media Outlet</th>
                <th className="py-4 px-6">Published Month</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {mediaList.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-bold text-slate-900 text-sm max-w-md">{m.title}</td>
                  <td className="py-4 px-6 font-semibold text-emerald-800">{m.source}</td>
                  <td className="py-4 px-6 text-slate-500">{m.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

