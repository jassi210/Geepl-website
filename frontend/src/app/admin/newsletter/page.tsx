'use client';

import React, { useState } from 'react';
import { Mail, Download, CheckCircle2 } from 'lucide-react';

const subscribers = [
  { id: 'sub-1', email: 'director@cleanpower.in', date: 'Oct 29, 2026', status: 'Active' },
  { id: 'sub-2', email: 'tech@solarfarms.com', date: 'Oct 27, 2026', status: 'Active' },
  { id: 'sub-3', email: 'energy@tatapower.com', date: 'Oct 24, 2026', status: 'Active' },
  { id: 'sub-4', email: 'operations@hospital.org', date: 'Oct 20, 2026', status: 'Active' },
];

export default function AdminNewsletterPage() {
  const [list, setList] = useState(subscribers);

  const handleExportCsv = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Email,Subscribed Date,Status', ...list.map((s) => `${s.email},${s.date},${s.status}`)].join(
        '\n'
      );
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'goodenough_subscribers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Newsletter Subscribers</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            View subscribers to whitepapers, energy bulletins, and gigafactory updates.
          </p>
        </div>
        <button
          onClick={handleExportCsv}
          className="btn btn-sm btn-outline border-slate-300 hover:bg-slate-900 hover:text-white rounded-xl gap-2 text-xs font-bold"
        >
          <Download className="w-3.5 h-3.5" />
          Export CSV ({list.length})
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Subscriber Email</th>
                <th className="py-4 px-6">Subscribed On</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {list.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-semibold text-slate-900">{s.email}</td>
                  <td className="py-4 px-6 text-slate-500">{s.date}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                      {s.status}
                    </span>
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

