import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Layers,
  Network,
  Cpu,
  Shield,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe2,
  Building2,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Microgrid Solutions | Turnkey Microgrid Design & EPC | GoodEnough Energy',
  description:
    'End-to-end microgrid design, engineering, and deployment for industrial estates, university campuses, SEZs, and remote townships. Intelligent multi-source power balancing.',
  openGraph: {
    title: 'Turnkey Microgrid Solutions | GoodEnough Energy',
    description: 'Autonomous microgrid orchestration engineered in Greater Noida.',
  },
};

const microgridFeatures = [
  {
    icon: Network,
    title: 'Multi-Source Asset Orchestration',
    desc: 'Harmonises rooftop solar, ground-mount solar PV, wind turbines, grid interconnects, and legacy backup generators through a unified real-time dispatch controller.',
  },
  {
    icon: Cpu,
    title: 'AI Predictive Load Forecasting',
    desc: 'Our proprietary EMS analyzes machine operational schedules and weather forecasts to pre-charge or reserve BESS capacity ahead of demand spikes or overcast skies.',
  },
  {
    icon: Shield,
    title: 'Seamless Islanding & Black Start',
    desc: 'In case of transmission line faults or catastrophic regional blackouts, the entire microgrid seamlessly isolates, keeping critical campus services powered without interruption.',
  },
  {
    icon: Building2,
    title: 'Industrial Park & SEZ Scaling',
    desc: 'Scalable architecture from 500 kWh up to 100+ MWh microgrids with independent sub-metering, billing telemetry, and dynamic feeder load prioritization.',
  },
];

export default function MicrogridPage() {
  return (
    <>
      <PageHero
        badge="Autonomous Infrastructure"
        title="Microgrid Solutions: Resilient, Self-Healing Clean Power Networks"
        subtitle="GoodEnough Energy delivers end-to-end microgrid engineering, procurement, and construction (EPC) to transform industrial estates, institutions, and remote regions into resilient energy self-sufficient hubs."
        breadcrumbs={[
          { label: 'Solutions' },
          { label: 'Microgrid' },
        ]}
        actions={
          <Link
            href="/contact"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
          >
            Consult with Our Microgrid Architects
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* ─── Microgrid Architecture Section ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                  Microgrid Engineering
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                  Unified Orchestration Across Generation & Storage
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  A modern industrial campus often has complex energy assets: multiple solar installations,
                  variable utility feeder reliability, existing backup diesel sets, and diverse loads
                  ranging from critical data servers to heavy induction furnaces.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  GoodEnough Energy provides full microgrid engineering from initial power-flow
                  simulation (ETAP) to turnkey installation of StorEDGE BESS, bidirectional inverters,
                  islanding switchgear, and central supervisory SCADA.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><strong>Single-Point Control:</strong> Cloud & on-premise SCADA dashboard with sub-second device diagnostics.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><strong>Sub-Cycle Load Shedding:</strong> Programmable priority breakers shed non-essential loads if extreme contingency occurs.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><strong>Make in India:</strong> Rapid spares dispatch and localized field engineering support within hours.</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                  <h3 className="text-xl font-bold text-emerald-400 border-b border-slate-800 pb-4">
                    Microgrid Integration Layers
                  </h3>

                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">Layer 1: Generation & Storage (Hardware)</div>
                      <p>StorEDGE BESS + Solar PV Arrays + Wind Turbines + Optional Synchronous Condensers.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">Layer 2: Protection & Fast Switchgear</div>
                      <p>High-speed static transfer switches, motorized circuit breakers, and directional relay coordination.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">Layer 3: Microgrid Controller (EMS)</div>
                      <p>Real-time edge controller running frequency regulation, active volt-var control, and solar clipping.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">Layer 4: Cloud Telemetry & Analytics</div>
                      <p>24/7 remote monitoring, prognostic cell degradation models, and monthly carbon reduction certificates.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Microgrid Pillars ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Pillars"
            title="Comprehensive Microgrid Capabilities"
            description="Designed to deliver autonomous power independence for complex industrial and municipal facilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microgridFeatures.map((f) => (
              <HoverCard key={f.title}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Call to Action ────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Planning a Microgrid for Your Facility or Township?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-base leading-relaxed mb-8">
              Our engineering team conducts detailed electrical load-flow studies, transformer impedance modeling, and economic dispatch simulations.
            </p>
            <Link
              href="/contact?type=microgrid_study"
              className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2 px-8"
            >
              Request Microgrid Engineering Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

