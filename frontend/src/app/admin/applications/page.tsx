'use client';

import React, { useState } from 'react';
import { UserCheck, Mail, Phone, ExternalLink, Calendar } from 'lucide-react';
import FormSelect from '@/components/admin/forms/FormSelect';

const applications = [
  {
    id: 'app-1',
    name: 'Siddharth Varma',
    email: 'siddharth.v@gmail.com',
    phone: '+91 99887 66554',
    jobTitle: 'Battery Systems Integration Engineer',
    appliedDate: 'Oct 29, 2026',
    status: 'Reviewing',
    portfolioUrl: 'https://linkedin.com/in/example',
    resumeUrl: '#',
    experience: '4.5 Years',
  },
  {
    id: 'app-2',
    name: 'Divya Iyer',
    email: 'divya.iyer@eng.edu',
    phone: '+91 98111 22334',
    jobTitle: 'Thermal & Fluid CFD Specialist',
    appliedDate: 'Oct 28, 2026',
    status: 'Shortlisted',
    portfolioUrl: 'https://github.com/example',
    resumeUrl: '#',
    experience: '5 Years',
  },
];

export default function AdminApplicationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Job Applications</h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Review candidate submissions for Greater Noida Gigafactory openings.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Candidate</th>
                <th className="py-4 px-6">Position Applied For</th>
                <th className="py-4 px-6">Contact Details</th>
                <th className="py-4 px-6">Experience</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Resume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900 text-sm">{app.name}</div>
                    <div className="text-[11px] text-slate-400">Applied: {app.appliedDate}</div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-emerald-800">{app.jobTitle}</td>
                  <td className="py-4 px-6">
                    <div>{app.email}</div>
                    <div className="text-slate-400 font-mono text-[11px]">{app.phone}</div>
                  </td>
                  <td className="py-4 px-6 font-mono font-medium">{app.experience}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`badge badge-sm font-semibold ${
                        app.status === 'Shortlisted'
                          ? 'badge-success bg-emerald-100 text-emerald-800'
                          : 'badge-warning bg-amber-100 text-amber-800'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href={app.portfolioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white rounded-lg gap-1"
                    >
                      <span>Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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

