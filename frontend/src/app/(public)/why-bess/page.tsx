import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingDown,
  Shield,
  Zap,
  Leaf,
  Clock,
  VolumeX,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Flame,
  BatteryCharging,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';
import RoiCalculator from '@/components/ui/RoiCalculator';

export const metadata: Metadata = {
  title: 'Why BESS? | Battery Energy Storage vs Diesel Generators | GoodEnough Energy',
  description:
    'Discover why Indian commercial and industrial leaders are transitioning from diesel generators to Battery Energy Storage Systems (BESS). Compare fuel savings, ROI, zero emissions, and sub-cycle reliability.',
  openGraph: {
    title: 'Why BESS? Battery Energy Storage vs Diesel Generators',
    description: 'Slash operating costs and eliminate diesel generators with GoodEnough StorEDGE BESS.',
  },
};

const comparisonTable = [
  {
    parameter: 'Electricity Generation Cost',
    dg: '₹24 – ₹30 per kWh (High diesel volatility)',
    bess: '₹6 – ₹8 per kWh (Off-peak grid / Solar charging)',
    winner: 'bess',
  },
  {
    parameter: 'Switchover Delay',
    dg: '15 to 45 seconds (Requires synchronizer & UPS)',
    bess: '< 20 milliseconds (Zero drop, seamless sub-cycle)',
    winner: 'bess',
  },
  {
    parameter: 'Operating Noise & Vibration',
    dg: '85 to 110 dBA (Requires acoustic canopies)',
    bess: '< 65 dBA (Whisper quiet liquid pumps)',
    winner: 'bess',
  },
  {
    parameter: 'Local Air & Carbon Pollution',
    dg: '2.68 kg CO₂ per litre + toxic PM2.5 & NOₓ fumes',
    bess: 'Zero tailpipe emissions (Scope 1 Elimination)',
    winner: 'bess',
  },
  {
    parameter: 'Routine Maintenance Burden',
    dg: 'Frequent engine oil, filters, coolant & fuel spills',
    bess: 'Solid-state electronics; zero recurring lube/filters',
    winner: 'bess',
  },
  {
    parameter: 'Revenue Generation & Arbitrage',
    dg: 'None (Pure cost sink & insurance expense)',
    bess: 'Peak tariff shaving + DISCOM demand reduction',
    winner: 'bess',
  },
  {
    parameter: 'Lifecycle Longevity',
    dg: '7 – 10 years before major engine overhauls',
    bess: '15 – 25 years with liquid-cooled LFP packs',
    winner: 'bess',
  },
];

const pillars = [
  {
    icon: TrendingDown,
    title: 'Drastic OPEX Reduction',
    desc: 'Diesel generators burn ₹90+/litre fuel while running inefficiently at partial loads. BESS charges using cheap off-peak night electricity or surplus rooftop solar, reducing operating cost per unit by 65–75%.',
  },
  {
    icon: Zap,
    title: 'Zero Latency Islanding',
    desc: 'Conventional DG sets take up to 45 seconds to start up and synchronize, causing machinery tripping and IT reboots. StorEDGE transitions in under 20ms — completely eliminating downtime.',
  },
  {
    icon: Leaf,
    title: 'Clean Scope 1 Compliance',
    desc: 'Governments and state pollution control boards (such as CAQM in Delhi-NCR) are severely restricting DG set operation. BESS is 100% compliant with clean air mandates.',
  },
  {
    icon: VolumeX,
    title: 'Acoustic & Vibration Free',
    desc: 'Unlike vibrating diesel engines, GoodEnough BESS systems operate under 65 dBA, making them ideal for hospitals, educational campuses, high-density IT parks, and residential townships.',
  },
];

export default function WhyBessPage() {
  return (
    <>
      <PageHero
        badge="Technology Transition"
        title="Why Indian Industry is Moving to BESS"
        subtitle="Diesel generators are noisy, polluting, and economically draining. GoodEnough Battery Energy Storage Systems provide instantaneous clean power, slash operating expenditure, and unlock peak tariff savings."
        breadcrumbs={[{ label: 'Why BESS' }]}
        actions={
          <Link
            href="/contact"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
          >
            Calculate Your Facility Payback
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* ─── Core Value Pillars ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Strategic Advantages"
            title="Beyond Mere Backup: An Active Profit Center"
            description="While diesel generators sit idle as an expensive insurance policy, BESS works 365 days a year to generate continuous financial returns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <HoverCard key={p.title}>
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all">
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

      {/* ─── Head-to-Head Comparison Table ─────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical Face-Off"
            title="GoodEnough BESS vs Conventional Diesel Generator"
            description="A direct comparison across financial, operational, environmental, and engineering metrics."
          />

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-xl">
            <table className="table w-full">
              <thead>
                <tr className="bg-slate-900 text-white text-sm">
                  <th className="py-5 px-6 font-bold w-1/4">Key Parameter</th>
                  <th className="py-5 px-6 font-bold w-3/8 text-rose-300">Diesel Genset (DG Set)</th>
                  <th className="py-5 px-6 font-bold w-3/8 text-emerald-300 bg-emerald-950/60">
                    GoodEnough StorEDGE BESS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{row.parameter}</td>
                    <td className="py-4 px-6 text-slate-600 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.dg}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-900 font-medium bg-emerald-50/40">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-emerald-900">{row.bess}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Interactive Calculator ────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>
    </>
  );
}

