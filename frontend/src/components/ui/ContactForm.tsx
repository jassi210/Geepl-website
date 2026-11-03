'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  defaultSubject?: string;
}

export default function ContactForm({ defaultSubject = 'General BESS Inquiry' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: defaultSubject,
    application: 'Commercial & Industrial',
    capacity: '250 kWh - 1 MWh',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate submission (or submit to backend if endpoint available)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You for Connecting!</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm mb-6">
          Our engineering and solutions team will review your BESS sizing requirements and get back to you within 24 business hours.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              subject: defaultSubject,
              application: 'Commercial & Industrial',
              capacity: '250 kWh - 1 MWh',
              message: '',
            });
          }}
          className="btn btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label text-xs font-semibold text-slate-700 pb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rajesh Sharma"
              className="input input-bordered w-full pl-10 text-sm focus:border-emerald-600 focus:outline-emerald-600 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="label text-xs font-semibold text-slate-700 pb-1">
            Business Email <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="rajesh@company.com"
              className="input input-bordered w-full pl-10 text-sm focus:border-emerald-600 focus:outline-emerald-600 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label text-xs font-semibold text-slate-700 pb-1">
            Phone / Mobile <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="input input-bordered w-full pl-10 text-sm focus:border-emerald-600 focus:outline-emerald-600 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="label text-xs font-semibold text-slate-700 pb-1">
            Company / Organization
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Industries Pvt Ltd"
              className="input input-bordered w-full pl-10 text-sm focus:border-emerald-600 focus:outline-emerald-600 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label text-xs font-semibold text-slate-700 pb-1">
            Primary Application
          </label>
          <select
            value={formData.application}
            onChange={(e) => setFormData({ ...formData, application: e.target.value })}
            className="select select-bordered w-full text-sm focus:border-emerald-600 focus:outline-emerald-600 bg-white"
          >
            <option>Commercial & Industrial (C&I)</option>
            <option>Utility & Grid Scale</option>
            <option>Island Mode / DG Replacement</option>
            <option>Solar + BESS Hybrid</option>
            <option>Microgrid EPC</option>
            <option>EV Charging Fast Hub</option>
          </select>
        </div>

        <div>
          <label className="label text-xs font-semibold text-slate-700 pb-1">
            Estimated Storage Needed
          </label>
          <select
            value={formData.capacity}
            onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            className="select select-bordered w-full text-sm focus:border-emerald-600 focus:outline-emerald-600 bg-white"
          >
            <option>Under 250 kWh</option>
            <option>250 kWh - 1 MWh</option>
            <option>1 MWh - 5 MWh</option>
            <option>5 MWh - 20 MWh</option>
            <option>20 MWh+ (Utility Grid)</option>
            <option>Not sure / Need Energy Audit</option>
          </select>
        </div>
      </div>

      <div>
        <label className="label text-xs font-semibold text-slate-700 pb-1">
          Project Details / Remarks
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your facility location, current DG running hours, transformer sanction load, or specific backup needs..."
            className="textarea textarea-bordered w-full pl-10 text-sm focus:border-emerald-600 focus:outline-emerald-600 bg-white"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn bg-emerald-600 hover:bg-emerald-700 border-none text-white w-full rounded-xl gap-2 font-semibold shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
      >
        {status === 'submitting' ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
            Sending Request...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Technical Consultation Request
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-500 text-center">
        Your data is strictly confidential. GoodEnough Energy does not share contact details with third parties.
      </p>
    </form>
  );
}

