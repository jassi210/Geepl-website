'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Plus, Edit, Eye, CheckCircle2 } from 'lucide-react';

const solutionsList = [
  {
    id: 'sol-1',
    title: 'Island Mode (Off-Grid Resilience)',
    slug: 'island-mode',
    category: 'Grid-Forming',
    summary: 'Sub-20ms switchover, black start, 100% DG replacement.',
    status: 'Active',
  },
  {
    id: 'sol-2',
    title: 'Hybrid Mode (Peak Shaving & TOD Arbitrage)',
    slug: 'hybrid-mode',
    category: 'Grid-Interactive',
    summary: 'Demand penalty reduction up to 40%, automated night charging.',
    status: 'Active',
  },
  {
    id: 'sol-3',
    title: 'Microgrid Solutions (Turnkey EPC)',
    slug: 'microgrid',
    category: 'Autonomous Network',
    summary: 'Industrial parks, SEZs, and campus multi-source dispatch.',
    status: 'Active',
  },
];

export default function AdminSolutionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Operating Topologies & Solutions</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage public solution descriptions, application architectures, and case studies.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Solution Title</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Summary</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {solutionsList.map((sol) => (
                <tr key={sol.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900 text-sm">{sol.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">/{sol.slug}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-ghost font-semibold text-slate-600">
                      {sol.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 max-w-sm">{sol.summary}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                      {sol.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={`/${sol.slug}`}
                      target="_blank"
                      className="btn btn-xs btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white rounded-lg gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      View
                    </Link>
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

