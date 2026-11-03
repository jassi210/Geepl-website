'use client';

import React, { useState } from 'react';
import { ShieldAlert, Plus, User, Edit, CheckCircle2 } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormSelect from '@/components/admin/forms/FormSelect';

const adminUsers = [
  { id: 'usr-1', name: 'Jaspal Singh', email: 'admin@goodenough.energy', username: 'admin', role: 'Superadmin', status: 'Active' },
  { id: 'usr-2', name: 'Akash Kaushik', email: 'akash@goodenough.energy', username: 'akash.k', role: 'Superadmin', status: 'Active' },
  { id: 'usr-3', name: 'Engineering Operations', email: 'ops@goodenough.energy', username: 'ops.lead', role: 'Admin', status: 'Active' },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Admin Console Users</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage authenticated administrators and assign access roles.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">User Name</th>
                <th className="py-4 px-6">Email Address</th>
                <th className="py-4 px-6">Username</th>
                <th className="py-4 px-6">Access Role</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {adminUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-bold text-slate-900 text-sm">{u.name}</td>
                  <td className="py-4 px-6">{u.email}</td>
                  <td className="py-4 px-6 font-mono text-slate-500">{u.username}</td>
                  <td className="py-4 px-6 font-semibold text-emerald-800">{u.role}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                      {u.status}
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

