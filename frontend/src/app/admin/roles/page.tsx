'use client';

import React from 'react';
import { KeyRound, Shield, Check } from 'lucide-react';

const roles = [
  {
    role: 'Superadmin',
    desc: 'Unrestricted full access across all modules, products, system settings, and user management.',
    permissions: ['Manage Admin Users', 'Publish Products', 'Manage Leads', 'Edit System & SEO Settings', 'Delete Records'],
  },
  {
    role: 'Admin',
    desc: 'Operational management of catalog, applications, blogs, and customer inquiry processing.',
    permissions: ['Publish Products', 'Manage Leads', 'Edit Articles & FAQs', 'View Applicants'],
  },
  {
    role: 'Editor',
    desc: 'Content creation and editing access for blogs, white papers, and events.',
    permissions: ['Draft & Edit Articles', 'Upload Technical PDFs', 'Update FAQs'],
  },
];

export default function AdminRolesPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Roles & Permissions (RBAC)</h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Role-Based Access Control policies governing administrative operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((r) => (
          <div key={r.role} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold mb-3">
                {r.role}
              </span>
              <h3 className="font-bold text-slate-900 text-base mb-2">{r.role} Access</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">{r.desc}</p>

              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Granted Capabilities
              </h4>
              <ul className="space-y-2">
                {r.permissions.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

