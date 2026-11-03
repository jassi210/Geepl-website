import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus, Briefcase, MapPin, Edit, Eye, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Job Openings Management | GoodEnough Admin',
};

const jobs = [
  {
    id: 'job-1',
    title: 'Battery Systems Integration Engineer',
    dept: 'Engineering & R&D',
    location: 'Greater Noida Gigafactory',
    type: 'Full-Time',
    experience: '3–6 Years',
    status: 'Active',
    applicants: 14,
  },
  {
    id: 'job-2',
    title: 'Senior BMS Firmware Architect',
    dept: 'Software & Embedded',
    location: 'Greater Noida / Hybrid',
    type: 'Full-Time',
    experience: '5–8 Years',
    status: 'Active',
    applicants: 22,
  },
  {
    id: 'job-3',
    title: 'Thermal & Fluid CFD Specialist',
    dept: 'Thermal Engineering',
    location: 'Greater Noida Gigafactory',
    type: 'Full-Time',
    experience: '4–7 Years',
    status: 'Active',
    applicants: 9,
  },
];

export default function AdminCareersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Gigafactory Job Openings</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage open positions, talent requirements, and review job applicants.
          </p>
        </div>
        <Link
          href="/admin/careers/new"
          className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Post New Opening
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Job Role & Title</th>
                <th className="py-4 px-6">Department</th>
                <th className="py-4 px-6">Location</th>
                <th className="py-4 px-6">Experience</th>
                <th className="py-4 px-6">Candidates</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 text-sm">
                    {job.title}
                  </td>
                  <td className="py-4 px-6 font-medium">{job.dept}</td>
                  <td className="py-4 px-6 text-slate-500">{job.location}</td>
                  <td className="py-4 px-6 font-mono">{job.experience}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-outline border-emerald-500 text-emerald-800 font-bold">
                      {job.applicants} applied
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/career`}
                        target="_blank"
                        className="btn btn-xs btn-ghost text-slate-500 hover:text-slate-900"
                        title="View on site"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/admin/careers/new?edit=${job.id}`}
                        className="btn btn-xs btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white rounded-lg gap-1 font-semibold"
                      >
                        <Edit className="w-3 h-3" />
                        Edit
                      </Link>
                    </div>
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

