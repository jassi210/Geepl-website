import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Inbox,
  Box,
  BookOpen,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard | GoodEnough Energy Admin',
};

const recentInquiries = [
  {
    id: 'inq-101',
    name: 'Rajesh Sharma',
    company: 'Sterling Hospital & Research',
    application: 'Commercial & Industrial',
    capacity: '500 kWh (DG Replacement)',
    date: 'Today, 2:15 PM',
    status: 'New',
  },
  {
    id: 'inq-102',
    name: 'Vikramaditya Rao',
    company: 'Adani Solar Park Substation',
    application: 'Utility & Grid Scale',
    capacity: '10 MWh (2x StorEDGE 5.0)',
    date: 'Yesterday',
    status: 'In Review',
  },
  {
    id: 'inq-103',
    name: 'Ananya Gupta',
    company: 'Apex Auto Components Ltd',
    application: 'Solar Hybrid Peak Shaving',
    capacity: '250 kWh',
    date: 'Oct 28',
    status: 'Quoted',
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Executive Overview
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Welcome back. Greater Noida Gigafactory digital portal & commercial BESS pipeline status.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/products/new"
            className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </Link>
          <Link
            href="/admin/blogs/new"
            className="btn btn-sm btn-outline border-slate-300 hover:bg-slate-900 hover:text-white rounded-xl gap-1.5"
          >
            <FileText className="w-4 h-4" />
            New Article
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Total Inquiries</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 font-mono">148</div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5" /> +18% this month
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Active Platforms</span>
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Box className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 font-mono">2 Active</div>
            <div className="text-xs text-slate-400 mt-1">StorEDGE 0.25 & 5.0</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Published Articles</span>
            <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 font-mono">12 Posts</div>
            <div className="text-xs text-slate-400 mt-1">4 Technical White Papers</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Open Positions</span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 font-mono">5 Roles</div>
            <div className="text-xs text-slate-400 mt-1">Greater Noida Gigafactory</div>
          </div>
        </div>
      </div>

      {/* Recent Inquiries Panel */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recent Customer & BESS Inquiries</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Review and qualify commercial leads from your public inquiry forms.
            </p>
          </div>
          <Link
            href="/admin/inquiries"
            className="btn btn-sm btn-ghost text-emerald-700 font-bold hover:bg-emerald-50 rounded-xl gap-1 text-xs"
          >
            Manage All Inquiries
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-3 px-6">Client / Company</th>
                <th className="py-3 px-6">Application</th>
                <th className="py-3 px-6">Capacity Needed</th>
                <th className="py-3 px-6">Submitted</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {recentInquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900">{inq.name}</div>
                    <div className="text-[11px] text-slate-500">{inq.company}</div>
                  </td>
                  <td className="py-4 px-6 font-medium">{inq.application}</td>
                  <td className="py-4 px-6 font-mono font-semibold text-slate-900">
                    {inq.capacity}
                  </td>
                  <td className="py-4 px-6 text-slate-500">{inq.date}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`badge badge-sm font-semibold ${
                        inq.status === 'New'
                          ? 'badge-success bg-emerald-100 text-emerald-800 border-emerald-200'
                          : inq.status === 'In Review'
                          ? 'badge-warning bg-amber-100 text-amber-800 border-amber-200'
                          : 'badge-info bg-cyan-100 text-cyan-800 border-cyan-200'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={`/admin/inquiries?id=${inq.id}`}
                      className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
                    >
                      Review
                    </Link>
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

