import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus, Box, Edit, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products Management | GoodEnough Admin',
};

const productList = [
  {
    id: 'prod-025',
    name: 'StorEDGE 0.25',
    capacity: '250 kWh',
    segment: 'Commercial & Industrial',
    voltage: '614V - 780V DC',
    cooling: 'Active Liquid Glycol',
    status: 'Active',
    slug: 'storedge-0-25',
  },
  {
    id: 'prod-50',
    name: 'StorEDGE 5.0',
    capacity: '5.016 MWh',
    segment: 'Utility & Grid Scale',
    voltage: '1000V - 1500V DC',
    cooling: 'Integrated Liquid Chiller',
    status: 'Active',
    slug: 'storedge-5-0',
  },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">StorEDGE Products</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Manage your hardware catalog, capacities, technical ratings, and datasheets.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New BESS Platform
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="table w-full text-xs">
            <thead>
              <tr className="bg-slate-50/70 text-slate-500 border-b border-slate-100">
                <th className="py-4 px-6">Product Platform</th>
                <th className="py-4 px-6">Capacity</th>
                <th className="py-4 px-6">Segment</th>
                <th className="py-4 px-6">Thermal Cooling</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {productList.map((prod) => (
                <tr key={prod.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                        <Box className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{prod.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">/products/{prod.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-mono font-bold text-emerald-700">{prod.capacity}</td>
                  <td className="py-4 px-6">{prod.segment}</td>
                  <td className="py-4 px-6">{prod.cooling}</td>
                  <td className="py-4 px-6">
                    <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold">
                      {prod.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/products/${prod.slug}`}
                        target="_blank"
                        className="btn btn-xs btn-ghost text-slate-500 hover:text-slate-900"
                        title="View Live Page"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/admin/products/new?edit=${prod.id}`}
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

