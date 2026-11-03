import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Eye, CheckCircle2, Search, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pages Management | GoodEnough Admin',
};

const pages = [
  { name: 'Home Page', path: '/', status: 'Live', type: 'Landing', lastUpdated: 'Today' },
  { name: 'Why BESS', path: '/why-bess', status: 'Live', type: 'Comparison', lastUpdated: 'Today' },
  { name: 'About GoodEnough', path: '/about-goodenough', status: 'Live', type: 'Corporate', lastUpdated: 'Today' },
  { name: 'Leadership Team', path: '/our-team', status: 'Live', type: 'Corporate', lastUpdated: 'Today' },
  { name: 'StorEDGE Products Hub', path: '/products', status: 'Live', type: 'Catalog', lastUpdated: 'Today' },
  { name: 'StorEDGE 0.25 (250 kWh)', path: '/products/storedge-0-25', status: 'Live', type: 'Product', lastUpdated: 'Today' },
  { name: 'StorEDGE 5.0 (5 MWh)', path: '/products/storedge-5-0', status: 'Live', type: 'Product', lastUpdated: 'Today' },
  { name: 'Island Mode', path: '/island-mode', status: 'Live', type: 'Solution', lastUpdated: 'Today' },
  { name: 'Hybrid Mode', path: '/hybrid-mode', status: 'Live', type: 'Solution', lastUpdated: 'Today' },
  { name: 'Microgrid Solutions', path: '/microgrid', status: 'Live', type: 'Solution', lastUpdated: 'Today' },
  { name: 'Services & Operations', path: '/services', status: 'Live', type: 'Service', lastUpdated: 'Today' },
  { name: 'Sustainability & ESG', path: '/sustainability', status: 'Live', type: 'Corporate', lastUpdated: 'Today' },
  { name: 'Contact Us', path: '/contact', status: 'Live', type: 'Lead Form', lastUpdated: 'Today' },
  { name: 'Careers', path: '/career', status: 'Live', type: 'Hiring', lastUpdated: 'Today' },
  { name: 'White Papers', path: '/white-paper', status: 'Live', type: 'Technical', lastUpdated: 'Today' },
  { name: 'Articles & Blogs', path: '/blogs', status: 'Live', type: 'Insights', lastUpdated: 'Today' },
];

export default function AdminPagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Website Pages Overview</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Monitor all 16 public SSR pages, routes, metadata, and live status.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Page Name & Route</th>
                <th className="py-4 px-6">Page Classification</th>
                <th className="py-4 px-6">SSR & Metadata</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {pages.map((p) => (
                <tr key={p.path} className="hover:bg-slate-50/60">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900 text-sm">{p.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{p.path}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-ghost text-slate-600 font-medium">
                      {p.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Next.js Metadata OK
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={p.path}
                      target="_blank"
                      className="btn btn-xs btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white rounded-lg gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      View Page
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

