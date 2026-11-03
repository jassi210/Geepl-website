'use client';

import React, { useState } from 'react';
import { Calendar, Plus, MapPin, Edit, Trash2 } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormToast from '@/components/admin/forms/FormToast';

const events = [
  { id: 'ev-1', title: 'Renewable Energy India Expo (REI)', date: 'September 2026', location: 'India Expo Mart, Greater Noida', type: 'Keynote & Booth' },
  { id: 'ev-2', title: 'India Energy Storage Week (IESW)', date: 'July 2026', location: 'New Delhi, India', type: 'Panel Discussion & Exhibition' },
  { id: 'ev-3', title: 'CII National Energy Efficiency Summit', date: 'May 2026', location: 'Mumbai, Maharashtra', type: 'Technical Workshop' },
];

export default function AdminEventsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Events & Exhibitions</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage industry expos, summit participations, and client consultation slots.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Event Name</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Venue</th>
                <th className="py-4 px-6">Engagement Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {events.map((e) => (
                <tr key={e.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-bold text-slate-900 text-sm">{e.title}</td>
                  <td className="py-4 px-6 font-semibold text-emerald-800">{e.date}</td>
                  <td className="py-4 px-6 text-slate-600">{e.location}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-ghost font-medium">{e.type}</span>
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

