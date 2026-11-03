import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Download,
  ArrowRight,
  BookOpen,
  Calendar,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'BESS Technical White Papers & Engineering Reports | GoodEnough Energy',
  description:
    'Download technical white papers from GoodEnough Energy: Liquid cooling design for extreme Indian climates, BESS fire safety architecture, and DG set replacement economics.',
  openGraph: {
    title: 'Technical White Papers | GoodEnough Energy',
    description: 'Engineering deep-dives into battery energy storage design and grid integration.',
  },
};

const papers = [
  {
    title: 'Thermal Dissipation Dynamics: Liquid vs Air Cooling in +50°C Indian Ambient',
    category: 'Thermal Engineering',
    author: 'GoodEnough R&D Lab',
    date: 'February 2026',
    pages: '28 Pages',
    desc: 'An empirical CFD investigation examining cell temperature gradients, internal resistance degradation, and cycle life longevity comparing direct micro-channel liquid cold-plates against conventional HVAC forced-air cooling.',
    highlights: [
      'CFD simulations across 35°C to 52°C ambient temperatures',
      'Impact of ±2°C cell delta on long-term cycle degradation',
      'HVAC parasitic auxiliary power consumption breakdown',
    ],
  },
  {
    title: 'Prognostic AI Safety Architecture: Multi-Layer Thermal Runaway Prevention',
    category: 'Battery Safety & Firmware',
    author: 'BMS Engineering Division',
    date: 'January 2026',
    pages: '34 Pages',
    desc: 'A comprehensive engineering guide detailing off-gassing sensor placement (CO, H₂, VOC), voltage deviation algorithms, and aerosol suppression system integration conforming to UL 9540A and NFPA 855 standards.',
    highlights: [
      'Early detection thresholds before cell venting occurs',
      'Fast-acting aerosol extinguishing agent mechanics',
      'Electrical isolation contactor trip sequences (< 10 ms)',
    ],
  },
  {
    title: 'LCOE & Payback Modeling: Replacing Diesel Generators with BESS in Indian C&I',
    category: 'Financial Economics',
    author: 'GoodEnough Advisory Desk',
    date: 'November 2025',
    pages: '22 Pages',
    desc: 'A granular financial model comparing the 15-year total cost of ownership (TCO) of conventional diesel gensets against lithium iron phosphate BESS charged with off-peak grid power and on-site solar.',
    highlights: [
      'Sensitivity analysis of diesel price escalation (₹85–₹115/L)',
      'Sub-20ms switchover value vs traditional DG synchronizer delay',
      'Accelerated depreciation (AD) and tax incentives in India',
    ],
  },
  {
    title: 'Grid Ancillary Services: Synthetic Inertia & Sub-Cycle Frequency Regulation',
    category: 'Utility & Grid Integration',
    author: 'Microgrid Systems Group',
    date: 'October 2025',
    pages: '30 Pages',
    desc: 'Examines the role of grid-forming (GFM) utility BESS containers in supporting state DISCOM 33kV/66kV feeder stability during rapid solar cloud-cover events and sudden trip contingencies.',
    highlights: [
      'Virtual synchronous generator (VSG) control loop algorithms',
      'Active and reactive power response times under 50 milliseconds',
      'Case study: 20 MWh utility substation feeder installation in UP',
    ],
  },
];

export default function WhitePaperPage() {
  return (
    <>
      <PageHero
        badge="Engineering Research"
        title="Technical White Papers & Research Publications"
        subtitle="In-depth technical white papers authored by our electrochemical, thermal, and power electronics research teams at the Greater Noida Gigafactory."
        breadcrumbs={[
          { label: 'Insights' },
          { label: 'White Papers' },
        ]}
      />

      {/* ─── White Papers Grid ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical Library"
            title="Peer-Reviewed Engineering Deep Dives"
            description="Download detailed technical documentation, mathematical models, and empirical testing data."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {papers.map((paper) => (
              <HoverCard key={paper.title}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="badge badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold text-xs">
                        {paper.category}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{paper.pages}</span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug">
                      {paper.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{paper.desc}</p>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Key Study Topics
                      </h4>
                      <ul className="space-y-1.5">
                        {paper.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Published: {paper.date}</span>
                    <Link
                      href="/contact?type=whitepaper_download"
                      className="btn btn-sm btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white rounded-xl gap-1.5 font-bold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Request Full PDF
                    </Link>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Custom Research Request ───────────────────────────────────────── */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Need a Custom Electrical Simulation or SLD Review?
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Our engineering applications team works with enterprise clients to run custom ETAP simulations, harmonic load assessments, and diesel displacement ROI models.
            </p>
            <Link
              href="/contact?type=custom_simulation"
              className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2 px-8"
            >
              Contact Our Applications Engineering Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

