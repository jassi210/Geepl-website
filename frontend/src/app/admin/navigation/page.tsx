'use client';

import React, { useState } from 'react';
import { Compass, Plus, MoveVertical, Save } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormToast from '@/components/admin/forms/FormToast';

interface NavItem {
  id: string;
  label: string;
  path: string;
  placement: 'Main Navbar' | 'Insights Dropdown' | 'Solutions Dropdown' | 'Footer Only';
  order: number;
}

const initialNav: NavItem[] = [
  { id: '1', label: 'Why BESS', path: '/why-bess', placement: 'Main Navbar', order: 1 },
  { id: '2', label: 'About', path: '/about-goodenough', placement: 'Main Navbar', order: 2 },
  { id: '3', label: 'Team', path: '/our-team', placement: 'Main Navbar', order: 3 },
  { id: '4', label: 'Products', path: '/products', placement: 'Main Navbar', order: 4 },
  { id: '5', label: 'Island Mode', path: '/island-mode', placement: 'Solutions Dropdown', order: 5 },
  { id: '6', label: 'Hybrid Mode', path: '/hybrid-mode', placement: 'Solutions Dropdown', order: 6 },
  { id: '7', label: 'Microgrid Solutions', path: '/microgrid', placement: 'Solutions Dropdown', order: 7 },
  { id: '8', label: 'Services', path: '/services', placement: 'Main Navbar', order: 8 },
  { id: '9', label: 'Sustainability', path: '/sustainability', placement: 'Main Navbar', order: 9 },
  { id: '10', label: 'White Papers', path: '/white-paper', placement: 'Insights Dropdown', order: 10 },
  { id: '11', label: 'Careers', path: '/career', placement: 'Main Navbar', order: 11 },
  { id: '12', label: 'Contact', path: '/contact', placement: 'Main Navbar', order: 12 },
];

export default function AdminNavigationPage() {
  const [navItems, setNavItems] = useState(initialNav);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSave = () => {
    setToast({ type: 'success', message: 'Navigation order and links updated!' });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Navigation Architecture</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Configure header menu items, dropdown categories, and ordering.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2 shadow-sm"
        >
          <Save className="w-4 h-4" />
          Save Navigation Order
        </button>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Nav Label</th>
                <th className="py-4 px-6">Destination Route</th>
                <th className="py-4 px-6">Menu Placement</th>
                <th className="py-4 px-6">Display Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {navItems.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6 font-bold text-slate-900 text-sm">{item.label}</td>
                  <td className="py-4 px-6 font-mono text-emerald-800">{item.path}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-ghost font-semibold text-slate-600">
                      {item.placement}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-mono font-bold text-slate-500">#{item.order}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

