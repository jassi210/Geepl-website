import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus, BookOpen, Edit, Eye, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Articles Management | GoodEnough Admin',
};

const blogsList = [
  {
    id: 'b-1',
    title: 'CAQM DG Bans in Delhi-NCR: Why BESS is the Only Permanent Industrial Compliance Solution',
    category: 'Regulatory & Policy',
    readTime: '6 min read',
    date: 'Feb 24, 2026',
    status: 'Published',
    slug: 'caqm-dg-bans-delhi-ncr-bess-compliance',
  },
  {
    id: 'b-2',
    title: 'The Thermodynamics of Liquid Cooling: Why Indian Summers Demand More Than Just Fans',
    category: 'Engineering & Tech',
    readTime: '8 min read',
    date: 'Feb 12, 2026',
    status: 'Published',
    slug: 'thermodynamics-liquid-cooling-indian-summers',
  },
  {
    id: 'b-3',
    title: 'Understanding TOD Tariffs: How C&I Facilities Arbitrage Off-Peak Night Units',
    category: 'Financial Economics',
    readTime: '5 min read',
    date: 'Jan 28, 2026',
    status: 'Published',
    slug: 'understanding-tod-tariffs-ci-facilities-arbitrage',
  },
];

export default function AdminBlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Articles & Insights</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Publish technical whitepapers, policy analyses, and clean energy bulletins.
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Write New Article
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Article Title</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Published Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {blogsList.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 max-w-md">
                    <div className="font-bold text-slate-900 text-sm line-clamp-1">{blog.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">/blogs/{blog.slug}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-ghost font-semibold text-slate-600">
                      {blog.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">{blog.date}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                      {blog.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/blogs`}
                        target="_blank"
                        className="btn btn-xs btn-ghost text-slate-500 hover:text-slate-900"
                        title="View Live"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/admin/blogs/new?edit=${blog.id}`}
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

