import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wrench,
  Search,
  Activity,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Services & Operations | Turnkey BESS EPC & O&M | GoodEnough Energy',
  description:
    'Comprehensive lifecycle services for Battery Energy Storage Systems: Energy Audits, Turnkey EPC, 24/7 Remote Battery Health Monitoring, and preventive O&M across India.',
  openGraph: {
    title: 'BESS Engineering & Lifecycle Services | GoodEnough Energy',
    description: 'From initial energy audit to 25-year operations & maintenance.',
  },
};

const services = [
  {
    icon: Search,
    title: 'On-Site Energy & Power Quality Audit',
    desc: 'Our electrical engineers conduct high-resolution power-logging at your main incoming transformer. We analyze 15-minute kVA demand curves, harmonics, voltage transients, and diesel generator runtime to calculate the precise BESS capacity needed.',
    deliverables: ['Detailed Load Profile Report', 'Peak Shaving Feasibility Model', 'Payback & IRR Projection', 'Recommended SLD Architecture'],
  },
  {
    icon: Wrench,
    title: 'Turnkey EPC & Grid Interconnect',
    desc: 'Complete engineering, procurement, and commissioning from foundation civil work to high-voltage cable terminations. We handle statutory approvals including CEA, CEIG inspection, state DISCOM grid-sync compliance, and fire department clearances.',
    deliverables: ['Civil Foundation & Skid Placement', 'MV Transformer & Switchgear Integration', 'Statutory CEA / CEIG Clearances', 'Factory Acceptance Testing (FAT)'],
  },
  {
    icon: Activity,
    title: '24/7 Cloud Remote Monitoring & NOC',
    desc: 'Our Central Network Operations Center (NOC) continuously tracks every cell voltage, cold-plate temperature, inverter efficiency, and state-of-charge. Automated AI alerts identify anomalous cell impedance before any operational impact occurs.',
    deliverables: ['Sub-Second Telemetry Dashboard', 'AI Prognostic Fault Early-Warning', 'Monthly Generation & Savings Reports', 'Over-the-Air (OTA) Firmware Updates'],
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Operations & Maintenance (O&M)',
    desc: 'Guaranteed system uptime through dedicated pan-India field service engineers. Includes scheduled coolant fluid inspections, HVAC filter replacements, thermal imaging scans, and priority spare parts dispatch from our Greater Noida Gigafactory.',
    deliverables: ['Guaranteed 98%+ Availability SLA', 'Quarterly Preventive Inspections', 'Pan-India 24-hr Emergency Response', 'Original Gigafactory Spares Warranty'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Full Lifecycle Support"
        title="Comprehensive BESS Lifecycle Services"
        subtitle="From initial transformer power audits and turnkey EPC installation to 24/7 cloud monitoring and 25-year preventive O&M, GoodEnough Energy supports your energy transition at every stage."
        breadcrumbs={[{ label: 'Services' }]}
        actions={
          <Link
            href="/contact?type=energy_audit"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
          >
            Schedule On-Site Energy Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* ─── Services Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Offerings"
            title="Complete Lifecycle Capabilities"
            description="We eliminate project risk by handling electrical design, civil execution, regulatory approvals, and multi-decade system maintenance under one roof."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <HoverCard key={svc.title}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                      <svc.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{svc.desc}</p>

                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {svc.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href="/contact"
                      className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1.5"
                    >
                      Inquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOC Spotlight ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                  Real-Time Intelligence
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
                  24/7 Greater Noida Network Operations Center (NOC)
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Every GoodEnough StorEDGE installation is continuously connected via encrypted dual 4G/Ethernet telemetry to our central monitoring center in Greater Noida.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Our systems stream over 200 operational parameters per second — including individual cell voltage divergence, coolant pressure, inverter thermal status, and ambient humidity.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border border-slate-800 rounded-2xl p-4 bg-slate-900">
                    <div className="text-2xl font-black text-emerald-400 font-mono">99.5%</div>
                    <div className="text-xs text-slate-400 mt-1">Uptime Reliability SLA</div>
                  </div>
                  <div className="border border-slate-800 rounded-2xl p-4 bg-slate-900">
                    <div className="text-2xl font-black text-emerald-400 font-mono">&lt; 15 min</div>
                    <div className="text-xs text-slate-400 mt-1">NOC Critical Alert Response</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-sm space-y-4 shadow-2xl">
                  <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                    Proactive Maintenance Service Tiers
                  </h3>
                  <div className="space-y-3 text-slate-300 text-xs">
                    <div className="p-3 rounded-xl bg-slate-800/80">
                      <div className="font-bold text-emerald-400 mb-0.5">Tier 1: Preventive Regular Inspections</div>
                      <p className="text-slate-400">Quarterly on-site verification of cooling loops, torquing of high-voltage busbars, and air filter maintenance.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80">
                      <div className="font-bold text-emerald-400 mb-0.5">Tier 2: Rapid Field Spares Replacement</div>
                      <p className="text-slate-400">Stocked replacement modules, coolant pumps, and inverter power boards dispatched directly from Greater Noida warehouse.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80">
                      <div className="font-bold text-emerald-400 mb-0.5">Tier 3: Extended Capacity Guarantee</div>
                      <p className="text-slate-400">Optional capacity retention guarantees ensuring end-of-warranty state-of-health (SOH) meets performance benchmarks.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

