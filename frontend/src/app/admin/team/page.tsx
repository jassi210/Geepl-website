'use client';

import React, { useState } from 'react';
import { Users, Plus, Edit, Trash2, Save, X, GraduationCap } from 'lucide-react';
import FormInput from '@/components/admin/forms/FormInput';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormTagsInput from '@/components/admin/forms/FormTagsInput';
import FormToast from '@/components/admin/forms/FormToast';

interface Leader {
  id: string;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  tags: string[];
}

const initialLeaders: Leader[] = [
  {
    id: 'lead-1',
    name: 'Akash Kaushik',
    role: 'Founder & Managing Director',
    expertise: 'Aerospace Engineering & Electrochemical Systems',
    bio: 'An aerospace engineer with deep specialization in lithium-ion battery integration, thermal dissipation, and cell degradation modeling.',
    tags: ['Battery Architecture', 'Gigafactory Operations', 'Liquid Thermal Engineering'],
  },
  {
    id: 'lead-2',
    name: 'Deepak Agarwal',
    role: 'Co-Founder & Director',
    expertise: 'Industrial Scaling & Supply Chain Strategy',
    bio: 'A veteran industrial leader with over two decades of experience establishing heavy manufacturing enterprises in India.',
    tags: ['Industrial Infrastructure', 'Strategic Partnerships', 'Manufacturing Scale'],
  },
  {
    id: 'lead-3',
    name: 'Gaurav Aggarwal',
    role: 'Director & Financial Officer',
    expertise: 'Renewable Capital Allocation & Project Financing',
    bio: 'Chartered Accountant with extensive expertise in structuring large-scale renewable energy Capex and utility PPAs.',
    tags: ['Project Financing', 'Capex Optimization', 'Investor Relations'],
  },
];

export default function AdminTeamPage() {
  const [leaders, setLeaders] = useState<Leader[]>(initialLeaders);
  const [editingLeader, setEditingLeader] = useState<Leader | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLeader?.name || !editingLeader?.role) return;

    if (isNew) {
      setLeaders((prev) => [...prev, { ...editingLeader, id: `lead-${Date.now()}` }]);
      setToast({ type: 'success', message: 'Team member added!' });
    } else {
      setLeaders((prev) => prev.map((l) => (l.id === editingLeader.id ? editingLeader : l)));
      setToast({ type: 'success', message: 'Team member updated!' });
    }
    setEditingLeader(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Team Directorate</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage executive board profiles, engineering directors, and advisory members.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingLeader({
              id: '',
              name: '',
              role: '',
              expertise: '',
              bio: '',
              tags: ['Engineering', 'BESS'],
            });
            setIsNew(true);
          }}
          className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Director / Lead
        </button>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Editor Modal */}
      {editingLeader && (
        <form onSubmit={handleSave} className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-300 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">
              {isNew ? 'Add Leadership Profile' : 'Edit Leader Profile'}
            </h3>
            <button
              type="button"
              onClick={() => {
                setEditingLeader(null);
                setIsNew(false);
              }}
              className="btn btn-xs btn-ghost text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              label="Full Name"
              name="name"
              value={editingLeader.name}
              onChange={(e) => setEditingLeader({ ...editingLeader, name: e.target.value })}
              required
            />
            <FormInput
              label="Corporate Designation / Title"
              name="role"
              value={editingLeader.role}
              onChange={(e) => setEditingLeader({ ...editingLeader, role: e.target.value })}
              placeholder="e.g. Founder & Managing Director"
              required
            />
          </div>

          <FormInput
            label="Domain Expertise & Educational Background"
            name="expertise"
            value={editingLeader.expertise}
            onChange={(e) => setEditingLeader({ ...editingLeader, expertise: e.target.value })}
            placeholder="Aerospace Engineering & Electrochemical Systems"
          />

          <FormTextarea
            label="Executive Biography"
            name="bio"
            value={editingLeader.bio}
            onChange={(e) => setEditingLeader({ ...editingLeader, bio: e.target.value })}
            rows={3}
          />

          <FormTagsInput
            label="Specialization Tags"
            name="tags"
            tags={editingLeader.tags}
            onChange={(newTags) => setEditingLeader({ ...editingLeader, tags: newTags })}
          />

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setEditingLeader(null);
                setIsNew(false);
              }}
              className="btn btn-sm btn-ghost rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-1.5"
            >
              <Save className="w-4 h-4" />
              Save Profile
            </button>
          </div>
        </form>
      )}

      {/* Grid of Leaders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaders.map((lead) => (
          <div key={lead.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 font-black text-lg flex items-center justify-center">
                  {lead.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <button
                  onClick={() => {
                    setEditingLeader(lead);
                    setIsNew(false);
                  }}
                  className="btn btn-xs btn-ghost text-slate-500 hover:text-emerald-700"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="font-bold text-slate-900 text-base">{lead.name}</h3>
              <div className="text-xs font-semibold text-emerald-600 mb-2">{lead.role}</div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{lead.bio}</p>
            </div>

            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
              {lead.tags.map((t) => (
                <span key={t} className="badge badge-xs badge-ghost text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

