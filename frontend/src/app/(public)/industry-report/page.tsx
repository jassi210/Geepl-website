import type { Metadata } from 'next';
import Link from 'next/link';
import { FileBarChart, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Industry Reports & Market Intelligence | GoodEnough Energy',
  description:
    'Comprehensive market reports on the Indian BESS sector, renewable energy integration mandates, and grid-scale storage forecasts through 2030.',
};

const reports = [
  {
    title: 'India BESS Market Outlook 2026–2030: The 70 GWh Storage Mandate',
    date: 'Q1 2026',
    pages: '48 Pages',
    desc: 'Analysis of national grid integration targets, VGF (Viability Gap Funding) policies, CEA national electricity plan projections, and state-level storage purchase obligations (SPO).',
  },
  {
    title: 'Commercial & Industrial Energy Storage Economics in India',
    date: 'Q4 2025',
    pages: '36 Pages',
    desc: 'Deep-dive into Time-of-Day tariff trends across Maharashtra, Gujarat, Tamil Nadu, and UP, with case study data on demand charge savings.',
  },
  {
    title: 'Supply Chain Decarbonisation: Domestic Gigafactory Resilience',
    date: 'Q3 2025',
    pages: '42 Pages',
    desc: 'Assessment of domestic battery cell supply chains, PLI schemes, and localized pack assembly benefits over imported Chinese modules.',
  },
];

export default function IndustryReportPage() {
  return (
    <>
      <PageHero
        badge="Market Intelligence"
        title="BESS Industry Reports & Sector Analysis"
        subtitle="Authoritative market intelligence, regulatory analysis, and market demand forecasts compiled by GoodEnough Energy research team."
        breadcrumbs={[
          { label: 'Insights' },
          { label: 'Industry Reports' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Strategic Research"
            title="Comprehensive Sector Briefings"
            description="Essential intelligence for CFOs, energy heads, DISCOM planners, and renewable investors."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reports.map((r) => (
              <HoverCard key={r.title}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all">
                  <div>
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-4">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {r.date}
                      </span>
                      <span>{r.pages}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{r.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{r.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href="/contact?type=report_access"
                      className="btn btn-sm btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white rounded-xl w-full gap-2 font-bold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Request Full Report
                    </Link>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

