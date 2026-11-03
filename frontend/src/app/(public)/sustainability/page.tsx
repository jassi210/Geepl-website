import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Leaf,
  Recycle,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Globe2,
  CheckCircle2,
  Award,
  Factory,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Sustainability & ESG | Net Zero Energy Transition | GoodEnough Energy',
  description:
    'Accelerating India’s Net Zero targets. GoodEnough Energy BESS eliminates Scope 1 diesel emissions, increases solar self-consumption, and champions circular battery recycling.',
  openGraph: {
    title: 'Sustainability & ESG Leadership | GoodEnough Energy',
    description: 'Empowering Indian industries to achieve Net Zero with zero diesel emissions.',
  },
};

const esgPillars = [
  {
    icon: Leaf,
    title: 'Scope 1 Emissions Elimination',
    desc: 'Diesel generators produce over 2.68 kg of CO₂ per litre consumed, along with hazardous nitrogen oxides (NOₓ) and particulate matter (PM2.5). Replacing DG sets with BESS directly achieves permanent Scope 1 decarbonisation.',
  },
  {
    icon: Globe2,
    title: 'Accelerating Scope 2 Decarbonisation',
    desc: 'Even facilities with rooftop solar still draw carbon-intensive grid power during cloudy days or night hours. StorEDGE stores daytime solar abundance to power night operations entirely with zero-carbon energy.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy & Battery Recycling',
    desc: 'GoodEnough Energy operates an EPR (Extended Producer Responsibility) compliant battery return and recycling program. We partner with authorized recyclers to extract lithium, iron, and phosphate for reuse.',
  },
  {
    icon: Award,
    title: 'Green Building Credits (LEED & GRIHA)',
    desc: 'Deploying BESS combined with solar earns maximum points under Indian GRIHA and international LEED green building rating programs in energy optimization and on-site renewable storage categories.',
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        badge="ESG & Decarbonisation"
        title="Engineering India's Journey to Net Zero"
        subtitle="GoodEnough Energy empowers enterprises to turn sustainability commitments into tangible emissions reductions. Eliminating millions of litres of diesel and accelerating India's 2070 Net Zero timeline."
        breadcrumbs={[{ label: 'Sustainability' }]}
        actions={
          <Link
            href="/contact?type=esg_consultation"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
          >
            Calculate Your Carbon Offset
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* ─── ESG Pillars ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Environmental Stewardship"
            title="Tangible Emissions Reductions for Indian Enterprises"
            description="Achieve verified carbon accounting metrics with every kilowatt-hour of clean energy stored and dispatched."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {esgPillars.map((p) => (
              <HoverCard key={p.title}>
                <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                      <p.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Impact Statistics ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider mb-2">
              Our 2030 Impact Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Targeting 5 Million Metric Tonnes of CO₂ Abatement
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              By replacing diesel generation across India with StorEDGE platforms manufactured in Greater Noida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700 text-center">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono mb-2">
                1.8B+ Litres
              </div>
              <div className="text-base font-bold text-white">Diesel Fuel Displaced</div>
              <p className="text-xs text-slate-400 mt-2">
                Equivalent to removing over 400,000 combustion vehicles from Indian roads.
              </p>
            </div>

            <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700 text-center">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono mb-2">
                5.0 MT
              </div>
              <div className="text-base font-bold text-white">CO₂ Emissions Abated</div>
              <p className="text-xs text-slate-400 mt-2">
                Accelerating India’s Nationally Determined Contributions (NDC) under the Paris Agreement.
              </p>
            </div>

            <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700 text-center">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono mb-2">
                100%
              </div>
              <div className="text-base font-bold text-white">Non-Toxic LFP Chemistry</div>
              <p className="text-xs text-slate-400 mt-2">
                Zero cobalt and nickel dependency, minimizing toxic mining impacts and enhancing safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Circular Lifecycle & Responsible Recycling ────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Circular Economy"
            title="Responsible Battery Stewardship & Recycling"
            description="Our commitment to sustainability extends through the entire 25-year lifecycle and end-of-life material recovery."
          />

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Cobalt-Free Prismatic LiFePO₄ Chemistry
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unlike traditional NMC batteries that rely on ethically contentious cobalt mining, GoodEnough StorEDGE systems exclusively utilize LFP (Lithium Iron Phosphate). LFP offers superior thermal stability, contains no toxic heavy metals, and poses minimal environmental hazard.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Second-Life Applications & Cascading Repurposing
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When utility-scale battery modules reach 80% State of Health (SOH) after 10–12 years of high-frequency cycling, they are inspected, recertified at our Greater Noida plant, and redeployed into low-stress second-life applications such as rural microgrids and agricultural solar storage.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Closed-Loop Hydrometallurgical Recycling
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  At final end of life, batteries enter closed-loop hydrometallurgical recycling, recovering over 95% of lithium, copper, and aluminum with near-zero landfill footprint, supporting India’s Critical Minerals Mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

