import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingDown,
  Sun,
  Zap,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Sliders,
  BarChart3,
  Layers,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';
import RoiCalculator from '@/components/ui/RoiCalculator';

export const metadata: Metadata = {
  title: 'Hybrid Mode BESS | Solar + Storage Peak Shaving & Tariff Arbitrage | GoodEnough Energy',
  description:
    'Maximize facility profitability with GoodEnough Hybrid Mode BESS. Shave peak demand charges, capture TOD tariff arbitrage, and achieve 100% solar self-consumption.',
  openGraph: {
    title: 'Hybrid Mode BESS Solutions | GoodEnough Energy',
    description: 'Grid-interactive solar + storage optimization for Indian commercial & industrial leaders.',
  },
};

const hybridFunctions = [
  {
    icon: TrendingDown,
    title: 'Peak Demand Shaving',
    desc: 'Utility bills impose severe penalty charges when peak kVA exceeds your sanctioned demand. StorEDGE discharges instantaneously during equipment startup to cap utility draw below the threshold, saving lakhs monthly in fixed demand charges.',
  },
  {
    icon: DollarSign,
    title: 'Time-of-Day (TOD) Tariff Arbitrage',
    desc: 'Indian state DISCOMs charge steep premiums during evening peak hours (6 PM – 10 PM) while offering discounted tariffs overnight. StorEDGE charges at low night tariffs and discharges during peak hours, yielding direct margin arbitrage.',
  },
  {
    icon: Sun,
    title: 'Maximising Solar Self-Consumption',
    desc: 'Instead of injecting surplus midday solar generation into the grid at unfavorable net-metering feed-in tariffs (often ₹2.5–3/kWh), store it in StorEDGE to offset grid consumption worth ₹9–12/kWh during subsequent operations.',
  },
  {
    icon: Zap,
    title: 'Power Factor & Harmonics Correction',
    desc: 'GoodEnough bidirectional PCS inverters can inject active and reactive power independently, maintaining power factor near unity (0.99) and avoiding low-PF penalties on your monthly DISCOM bill.',
  },
];

export default function HybridModePage() {
  return (
    <>
      <PageHero
        badge="Grid-Tied Optimization"
        title="Hybrid Mode: Intelligent Solar + BESS Peak Shaving & Tariff Arbitrage"
        subtitle="Turn your energy storage from a passive standby asset into an active, everyday profit center that slashes DISCOM peak demand penalties and maximizes solar utilization."
        breadcrumbs={[
          { label: 'Solutions' },
          { label: 'Hybrid Mode' },
        ]}
        actions={
          <Link
            href="/contact"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
          >
            Request Tariff Savings Analysis
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
                  Real-Time EMS Dispatch
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                  Dynamic Load Balancing in Milliseconds
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Most industrial energy bills consist of two major components: high energy consumption charges (kWh) and punitive peak demand charges (kVA). When heavy machinery, chillers, or induction furnaces start up, demand spikes trigger immediate penalties.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  In Hybrid Mode, the GoodEnough Energy Management System (EMS) monitors facility transformer meters at sub-second telemetry. The instant demand approaches your threshold, StorEDGE steps in with precision discharge to clip the peak, keeping your grid draw perfectly flat.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                    <div className="text-2xl font-black text-emerald-600 font-mono">Up to 40%</div>
                    <div className="text-xs text-slate-500 mt-1">Peak Demand Penalty Reduction</div>
                  </div>
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                    <div className="text-2xl font-black text-emerald-600 font-mono">0.99 PF</div>
                    <div className="text-xs text-slate-500 mt-1">Autonomous Power Factor Correction</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                  <h3 className="text-xl font-bold text-emerald-400 border-b border-slate-800 pb-4">
                    Daily 24-Hour Cycle in Hybrid Mode
                  </h3>

                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">
                        00:00 – 06:00 (Night Off-Peak)
                      </div>
                      <p>
                        Grid electricity tariff is cheapest (~₹5–6/kWh). StorEDGE charges to 100% SOC while powering any baseline facility night loads.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">
                        09:00 – 16:00 (Solar Peak Hours)
                      </div>
                      <p>
                        Rooftop and ground-mount solar arrays generate maximum power. Surplus solar beyond facility loads charges BESS with zero loss.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">
                        18:00 – 22:00 (Evening Peak TOD)
                      </div>
                      <p>
                        Grid tariffs spike to highest TOD rates (~₹11–14/kWh). StorEDGE discharges stored clean energy, avoiding expensive grid units.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm mb-1">
                        24/7 Grid Outage Protection
                      </div>
                      <p>
                        If a sudden grid outage occurs at any moment, the system switches instantly to Island Mode to keep critical operations running.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Functional Capabilities ───────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Profit Centers"
            title="Four Ways Hybrid Mode Generates Revenue"
            description="Transform energy from an operational overhead into an optimized, predictable asset."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hybridFunctions.map((fn) => (
              <HoverCard key={fn.title}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                      <fn.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{fn.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{fn.desc}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROI Calculator ────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>
    </>
  );
}

