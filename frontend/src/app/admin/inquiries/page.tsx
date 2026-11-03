'use client';

import React, { useState } from 'react';
import {
  Inbox,
  Filter,
  CheckCircle2,
  Clock,
  User,
  Phone,
  Mail,
  Building,
  Calendar,
  MessageSquare,
  Edit,
  Save,
  Search,
} from 'lucide-react';
import FormSelect from '@/components/admin/forms/FormSelect';
import FormTextarea from '@/components/admin/forms/FormTextarea';
import FormInput from '@/components/admin/forms/FormInput';
import FormToast from '@/components/admin/forms/FormToast';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  application: string;
  capacity: string;
  message: string;
  status: 'New' | 'Under Review' | 'Quoted' | 'Closed';
  assignedTo: string;
  internalNotes: string;
  quotedValue: string;
  createdAt: string;
}

const initialInquiries: Inquiry[] = [
  {
    id: 'INQ-2026-081',
    name: 'Rajesh Sharma',
    email: 'rajesh@sterlinghospital.org',
    phone: '+91 98765 43210',
    company: 'Sterling Hospital & Research',
    application: 'Commercial & Industrial',
    capacity: '250 kWh - 1 MWh',
    message: 'We currently run two 380 kVA diesel generators for emergency backup. Due to local hospital quiet zone norms, we wish to replace them with a StorEDGE 0.25 setup.',
    status: 'New',
    assignedTo: 'Application Engineering Team',
    internalNotes: 'Hospital load log indicates 350 kW peak load. Recommend StorEDGE 0.25 (2 units parallel).',
    quotedValue: '₹75,00,000',
    createdAt: 'Today, 11:30 AM',
  },
  {
    id: 'INQ-2026-079',
    name: 'Vikramaditya Rao',
    email: 'v.rao@adanirenewables.com',
    phone: '+91 98200 11223',
    company: 'Adani Solar Park Substation',
    application: 'Utility & Grid Scale',
    capacity: '5 MWh - 20 MWh',
    message: 'Seeking single-line diagram and delivery timelines for 2 units of StorEDGE 5.0 (10 MWh total) for a 33kV solar evacuation substation in Rajasthan.',
    status: 'Under Review',
    assignedTo: 'Akash Kaushik (Engineering MD)',
    internalNotes: 'SLD sent for CEIG compliance review. Discussion scheduled for Friday.',
    quotedValue: '₹14,50,00,000',
    createdAt: 'Yesterday, 4:15 PM',
  },
  {
    id: 'INQ-2026-075',
    name: 'Ananya Gupta',
    email: 'ananya@apexauto.in',
    phone: '+91 97112 33445',
    company: 'Apex Auto Components Pvt Ltd',
    application: 'Solar + BESS Hybrid',
    capacity: 'Under 250 kWh',
    message: 'Need peak shaving to avoid ₹1.5 Lakh monthly kVA contract penalties during morning furnace startup in Manesar.',
    status: 'Quoted',
    assignedTo: 'Sales & Solutions Desk',
    internalNotes: 'Feasibility study shared showing 2.8-year payback.',
    quotedValue: '₹42,00,000',
    createdAt: '28 Oct 2026',
  },
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(initialInquiries[0]);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Filtered List
  const filtered = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === 'All' || inq.status === filterStatus;
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleUpdateSelected = (field: keyof Inquiry, value: string) => {
    if (!selectedInquiry) return;
    const updated = { ...selectedInquiry, [field]: value };
    setSelectedInquiry(updated);
    setInquiries((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
  };

  const handleSaveInquiry = async () => {
    if (!selectedInquiry) return;
    setIsSaving(true);
    await new Promise((res) => setTimeout(res, 600));
    setIsSaving(false);
    setToast({
      type: 'success',
      message: `Inquiry ${selectedInquiry.id} updated successfully!`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          BESS Customer & Technical Inquiries
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Process incoming sizing requests, assign engineering leads, and update commercial quotes.
        </p>
      </div>

      {toast && (
        <FormToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client, company, or ID..."
            className="input input-sm input-bordered w-full pl-9 rounded-xl text-xs bg-slate-50 focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">Status Filter:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="select select-sm select-bordered rounded-xl text-xs bg-white font-medium"
          >
            <option value="All">All Inquiries ({inquiries.length})</option>
            <option value="New">New</option>
            <option value="Under Review">Under Review</option>
            <option value="Quoted">Quoted</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Main Grid: Left Column List, Right Column Edit Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Inquiries List (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
          <div className="p-4 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Inquiry Queue ({filtered.length})
            </span>
          </div>

          <div className="max-h-[680px] overflow-y-auto divide-y divide-slate-100">
            {filtered.map((inq) => {
              const isSelected = selectedInquiry?.id === inq.id;
              return (
                <div
                  key={inq.id}
                  onClick={() => setSelectedInquiry(inq)}
                  className={`p-4 cursor-pointer transition-colors text-xs ${
                    isSelected
                      ? 'bg-emerald-50/80 border-l-4 border-emerald-600'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-slate-500">{inq.id}</span>
                    <span
                      className={`badge badge-xs font-bold ${
                        inq.status === 'New'
                          ? 'badge-success bg-emerald-100 text-emerald-800'
                          : inq.status === 'Under Review'
                          ? 'badge-warning bg-amber-100 text-amber-800'
                          : inq.status === 'Quoted'
                          ? 'badge-info bg-cyan-100 text-cyan-800'
                          : 'badge-ghost text-slate-500'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm">{inq.name}</h3>
                  <div className="text-slate-500 font-medium truncate">{inq.company}</div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                    <span className="font-semibold text-emerald-700">{inq.capacity}</span>
                    <span>{inq.createdAt}</span>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-xs">
                No inquiries matching the selected criteria.
              </div>
            )}
          </div>
        </div>

        {/* Selected Inquiry Detail & Update Form (7 cols) */}
        {selectedInquiry ? (
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {selectedInquiry.id}
                  </span>
                  <span className="badge badge-sm badge-success bg-emerald-500 text-slate-950 font-bold border-none text-[10px]">
                    {selectedInquiry.status}
                  </span>
                </div>
                <h2 className="text-xl font-black mt-1">{selectedInquiry.company}</h2>
                <p className="text-xs text-slate-400">Contact: {selectedInquiry.name}</p>
              </div>

              <button
                type="button"
                onClick={handleSaveInquiry}
                disabled={isSaving}
                className="btn btn-sm btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-1.5 shadow-md shadow-emerald-500/20"
              >
                {isSaving ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <Save className="w-3.5 h-3.5" />
                )}
                Save Status & Notes
              </button>
            </div>

            {/* Client Info Summary Grid */}
            <div className="p-6 bg-slate-50/70 border-b border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2.5 text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`mailto:${selectedInquiry.email}`} className="hover:underline font-semibold">
                  {selectedInquiry.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-700">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`tel:${selectedInquiry.phone}`} className="hover:underline font-semibold">
                  {selectedInquiry.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-700">
                <Building className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Application: <strong>{selectedInquiry.application}</strong></span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-700">
                <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Requested Storage: <strong>{selectedInquiry.capacity}</strong></span>
              </div>
            </div>

            {/* Customer Message */}
            <div className="p-6 border-b border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Original Client Requirements
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                &ldquo;{selectedInquiry.message}&rdquo;
              </p>
            </div>

            {/* Lead Status & Assignment Form */}
            <div className="p-6 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Engineering Processing & Quotation
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormSelect
                  label="Inquiry Status"
                  name="status"
                  value={selectedInquiry.status}
                  onChange={(e) => handleUpdateSelected('status', e.target.value)}
                  options={[
                    { value: 'New', label: 'New (Unassigned)' },
                    { value: 'Under Review', label: 'Under Review (SLD Engineering)' },
                    { value: 'Quoted', label: 'Quoted (Proposal Delivered)' },
                    { value: 'Closed', label: 'Closed (Won / Completed)' },
                  ]}
                />

                <FormSelect
                  label="Assigned Lead Engineer"
                  name="assignedTo"
                  value={selectedInquiry.assignedTo}
                  onChange={(e) => handleUpdateSelected('assignedTo', e.target.value)}
                  options={[
                    { value: 'Application Engineering Team', label: 'Application Engineering Team' },
                    { value: 'Akash Kaushik (Engineering MD)', label: 'Akash Kaushik (Engineering MD)' },
                    { value: 'Sales & Solutions Desk', label: 'Sales & Solutions Desk' },
                    { value: 'Greater Noida Field Services', label: 'Greater Noida Field Services' },
                  ]}
                />
              </div>

              <FormInput
                label="Quoted / Estimated Proposal Value"
                name="quotedValue"
                value={selectedInquiry.quotedValue}
                onChange={(e) => handleUpdateSelected('quotedValue', e.target.value)}
                placeholder="₹45,00,000"
                helperText="Estimated turnkey project budget."
              />

              <FormTextarea
                label="Internal Engineering Notes & Sizing Remarks"
                name="internalNotes"
                value={selectedInquiry.internalNotes}
                onChange={(e) => handleUpdateSelected('internalNotes', e.target.value)}
                rows={3}
                placeholder="Document single-line diagram observations, transformer kVA, or client meeting takeaways..."
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

