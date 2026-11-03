'use client';

import React, { useState } from 'react';
import { FileSpreadsheet, Plus, Download, Edit, Trash2 } from 'lucide-react';
import FormFileUpload from '@/components/admin/forms/FormFileUpload';
import FormInput from '@/components/admin/forms/FormInput';
import FormToast from '@/components/admin/forms/FormToast';

const resources = [
  { id: 'res-1', title: 'Thermal Dissipation Dynamics: Liquid vs Air Cooling', format: 'PDF (28 Pages)', downloads: 342, date: 'Feb 2026' },
  { id: 'res-2', title: 'Prognostic AI Safety Architecture in BESS', format: 'PDF (34 Pages)', downloads: 215, date: 'Jan 2026' },
  { id: 'res-3', title: 'LCOE & Payback Modeling for Indian C&I', format: 'PDF (22 Pages)', downloads: 580, date: 'Nov 2025' },
];

export default function AdminResourcesPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Technical Resources & PDFs</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Upload and track whitepapers, CAD drawings, and compliance certificates.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Document Title</th>
                <th className="py-4 px-6">Format / Size</th>
                <th className="py-4 px-6">Total Inquiries</th>
                <th className="py-4 px-6">Uploaded</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {resources.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-bold text-slate-900 text-sm">{r.title}</td>
                  <td className="py-4 px-6 text-slate-500">{r.format}</td>
                  <td className="py-4 px-6 font-mono font-bold text-emerald-700">{r.downloads} downloads</td>
                  <td className="py-4 px-6 text-slate-400">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

