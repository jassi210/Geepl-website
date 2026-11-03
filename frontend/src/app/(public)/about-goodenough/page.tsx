import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Factory,
  ShieldCheck,
  Award,
  Zap,
  Globe2,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'About GoodEnough Energy | India’s First 7 GWh BESS Gigafactory',
  description:
    'Learn about GoodEnough Energy, our Greater Noida gigafactory, leadership, and mission to establish India as a global manufacturing powerhouse in Battery Energy Storage Systems.',
  openGraph: {
    title: 'About GoodEnough Energy | BESS Gigafactory Greater Noida',
    description:
      'Pioneering grid-scale and commercial energy storage manufacturing in India. 7 GWh annual capacity.',
  },
};

const milestones = [
  {
    year: '2023',
    title: 'Gigafactory Foundation',
    desc: 'Broke ground on India’s largest dedicated BESS manufacturing facility at Ecotech VII, Greater Noida, UP.',
  },
  {
    year: '2024',
    title: 'Phase 1 Commissioning',
    desc: 'Inauguration of initial automated robotic battery pack assembly lines and high-precision testing chambers.',
  },
  {
    year: '2025',
    title: 'Pan-India Deployments',
    desc: 'Surpassed 200+ commercial, industrial, and substation BESS installations across 15+ Indian states.',
  },
  {
    year: '2026',
    title: 'Scaling to 7 GWh',
    desc: 'Expansion of cell integration lines, advanced liquid thermal systems, and export to international markets.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Engineering Rigour',
    desc: 'Every pack undergoes automated laser welding, cell-level impedance grading, and thermal stress tests.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Multi-layer safety: Tier-1 LFP chemistry, prognostic BMS diagnostics, and automated aerosol suppression.',
  },
  {
    icon: Globe2,
    title: 'Aatmanirbhar Bharat',
    desc: 'Building local clean-tech manufacturing independence and reducing India’s dependence on fossil fuel imports.',
  },
  {
    icon: Sparkles,
    title: 'Decarbonisation at Scale',
    desc: 'Targeting the abatement of millions of metric tons of CO2 by permanently displacing diesel generators.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About GoodEnough Energy"
        title="Pioneering India's Energy Storage Revolution"
        subtitle="GoodEnough Energy was founded with an uncompromising mission: to design, build, and deploy world-class Battery Energy Storage Systems engineered specifically for high-ambient Indian operating conditions."
        breadcrumbs={[{ label: 'About GoodEnough' }]}
        actions={
          <>
            <Link
              href="/our-team"
              className="btn bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl"
            >
              Meet Our Leadership
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?type=plant_visit"
              className="btn btn-outline border-slate-700 text-white hover:bg-slate-900 rounded-xl"
            >
              Book Factory Visit
            </Link>
          </>
        }
      />

      {/* ─── Story & Gigafactory ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                  Building the Clean Power Backbone of New India
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  As India accelerates toward its target of 500 GW of non-fossil capacity by 2030,
                  intermittent renewables create urgent challenges for grid frequency stability and peak demand management.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  GoodEnough Energy bridges this critical gap. At our Greater Noida Gigafactory,
                  we produce containerised and cabinet-based BESS platforms that replace diesel
                  generators, stabilize state DISCOM distribution grids, and enable round-the-clock (RTC) green power.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border border-slate-200 rounded-2xl p-4">
                    <div className="text-3xl font-black text-emerald-600 font-mono">₹450 Cr+</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">Capital Investment in Greater Noida</div>
                  </div>
                  <div className="border border-slate-200 rounded-2xl p-4">
                    <div className="text-3xl font-black text-emerald-600 font-mono">5 Million</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">Tonnes CO₂ Abatement Target</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  <h3 className="text-xl font-bold mb-6 text-emerald-400">
                    Gigafactory Infrastructure Highlights
                  </h3>
                  <ul className="space-y-4 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Automated Cell Sorting:</strong> High-precision grading by internal resistance (IR), capacity, and open circuit voltage (OCV).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Robotic Laser Welding:</strong> Automated busbar bonding ensuring zero contact resistance and thermal durability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Liquid Cold-Plate Testing:</strong> 100% helium leak test on internal fluid circuits before module encapsulation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Full-Power Testing Bay:</strong> Multi-megawatt charge-discharge cycling mimicking extreme Indian grid transients.</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Company Values ────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Tenets"
            title="What Drives GoodEnough Energy"
            description="Our engineering culture is defined by deep domain expertise, uncompromising safety standards, and relentless execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <HoverCard key={v.title}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Journey / Timeline ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Track Record"
            title="The GoodEnough Growth Trajectory"
            description="From establishing our Greater Noida plant to scaling across India’s industrial corridors."
          />

          <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <FadeIn key={m.year} delay={idx * 0.1} className="relative pl-8 sm:pl-10">
                {/* Year tag for larger screens */}
                <span className="hidden sm:block absolute -left-28 top-0 text-right font-black text-2xl text-emerald-600 font-mono w-20">
                  {m.year}
                </span>

                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <span className="sm:hidden text-xs font-mono font-bold text-emerald-600 block mb-1">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Call to Action ────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to explore our leadership team?</h3>
            <p className="text-slate-400 text-sm mt-1">
              Meet the founders and engineering pioneers leading GoodEnough Energy.
            </p>
          </div>
          <Link
            href="/our-team"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none px-6 rounded-xl gap-2 whitespace-nowrap"
          >
            View Leadership Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

