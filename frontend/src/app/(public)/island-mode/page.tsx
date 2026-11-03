import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Zap,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  PowerOff,
  Radio,
  Sliders,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';
import RoiCalculator from '@/components/ui/RoiCalculator';

export const metadata: Metadata = {
  title: 'Island Mode BESS Solutions | 100% Off-Grid Power Resilience | GoodEnough Energy',
  description:
    'Experience seamless power independence with GoodEnough Island Mode BESS. True grid-forming architecture with sub-20ms switchover, eliminating diesel gensets completely.',
  openGraph: {
    title: 'Island Mode BESS | GoodEnough Energy',
    description: 'Grid-forming energy storage for complete off-grid reliability and zero outage downtime.',
  },
};

const islandBenefits = [
  {
    title: 'Sub-20ms Instantaneous Switchover',
    desc: 'When the main grid fails, StorEDGE detects voltage/frequency anomaly in sub-cycle time (< 20ms) and seamlessly forms the AC voltage reference before machinery trips.',
  },
  {
    title: 'True Grid-Forming (GFM) Control',
    desc: 'Unlike conventional grid-following inverters that require an existing grid frequency, GoodEnough inverters generate a robust 50Hz / 415V sine wave autonomously.',
  },
  {
    title: '100% Diesel Genset Displacement',
    desc: 'Run completely on solar + BESS. No fuel procurement logistics, no fuel theft risk, no exhaust smoke, and zero compliance headaches with pollution control boards.',
  },
  {
    title: 'Black-Start Capability',
    desc: 'StorEDGE can cold-start an entire factory or sub-network from complete darkness without requiring any auxiliary diesel generator.',
  },
];

export default function IslandModePage() {
  return (
    <>
      <PageHero
        badge="Operating Topology"
        title="Island Mode: Total Power Autonomy with Zero Grid Dependence"
        subtitle="GoodEnough StorEDGE systems provide true grid-forming capability, establishing independent voltage and frequency to power your operations through indefinite grid blackouts."
        breadcrumbs={[
          { label: 'Solutions' },
          { label: 'Island Mode' },
        ]}
        actions={
          <Link
            href="/contact"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
          >
            Request Islanding Feasibility Study
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* ─── Architectural Overview ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                  Grid-Forming Inverter Technology
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                  Zero Interruption. Infinite Independence.
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  In regions with unstable power grids or remote facilities where grid extension is
                  prohibitively expensive, traditional facilities rely on continuous diesel generators
                  that consume fuel at staggering costs.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  StorEDGE in Island Mode acts as an intelligent voltage-source inverter. Paired with
                  on-site solar arrays, it creates a self-balancing local power island. It handles sudden
                  motor-starting inductive inrush currents up to 200% of nominal rating without voltage sag.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-700"><strong>Zero Flickering:</strong> High-speed static transfer switch eliminates computer reboot.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-700"><strong>Dynamic Solar Smoothing:</strong> Absorbs solar cloud transients instantly to protect machinery.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-700"><strong>Synthetic Inertia:</strong> High virtual damping prevents frequency instability during heavy load steps.</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">How Island Mode Operates</h3>
                    <span className="badge badge-outline border-emerald-500 text-emerald-400 text-xs">
                      GFM Control
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1">Step 1: Outage Detection (&lt; 5 ms)</div>
                      <p className="text-xs text-slate-400">
                        High-speed micro-grid controller senses grid voltage loss and triggers the static transfer disconnect switch.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1">Step 2: Instant Voltage Forming (&lt; 15 ms)</div>
                      <p className="text-xs text-slate-400">
                        StorEDGE establishes 415V 50Hz sine wave, taking over 100% of the facility critical loads without drop.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1">Step 3: Solar PV Coordination</div>
                      <p className="text-xs text-slate-400">
                        Rooftop solar string inverters synchronize to StorEDGE’s synthesized AC wave, powering loads and recharging batteries.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1">Step 4: Seamless Grid Resynchronization</div>
                      <p className="text-xs text-slate-400">
                        When the utility grid returns, StorEDGE matches phase angle and frequency before smoothly reconnecting without interruption.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Islanding Pillars ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Superiority"
            title="Core Advantages of StorEDGE Island Mode"
            description="Built to deliver rock-solid stability even when disconnected from the centralized power grid."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {islandBenefits.map((b) => (
              <HoverCard key={b.title}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{b.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Financial Savings Simulation ──────────────────────────────────── */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>
    </>
  );
}

