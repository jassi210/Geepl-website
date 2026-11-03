'use client';

import React from 'react';
import { History, Clock, User, Shield } from 'lucide-react';

const logs = [
  { id: 'log-1', action: 'Created Product Platform', target: 'StorEDGE 0.25 (250 kWh)', user: 'admin', ip: '127.0.0.1', timestamp: 'Today, 2:45 PM' },
  { id: 'log-2', action: 'Inquiry Status Updated', target: 'INQ-2026-081 -> Quoted', user: 'admin', ip: '127.0.0.1', timestamp: 'Today, 1:20 PM' },
  { id: 'log-3', action: 'Published Technical Article', target: 'CAQM DG Bans in Delhi-NCR', user: 'admin', ip: '127.0.0.1', timestamp: 'Yesterday, 5:10 PM' },
  { id: 'log-4', action: 'Updated Contact Information', target: 'Greater Noida Gigafactory Details', user: 'admin', ip: '127.0.0.1', timestamp: 'Yesterday, 3:30 PM' },
];

export default function AdminActivityLogsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Audit & Activity Logs</h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Security audit trail tracking administrative logins, content edits, and system changes.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Event Action</th>
                <th className="py-4 px-6">Target Resource</th>
                <th className="py-4 px-6">Executed By</th>
                <th className="py-4 px-6">IP Address</th>
                <th className="py-4 px-6">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-bold text-slate-900">{log.action}</td>
                  <td className="py-4 px-6 font-semibold text-emerald-800">{log.target}</td>
                  <td className="py-4 px-6 font-mono text-slate-600">{log.user}</td>
                  <td className="py-4 px-6 font-mono text-slate-400">{log.ip}</td>
                  <td className="py-4 px-6 text-slate-500">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

