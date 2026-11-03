import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  TrendingDown,
  Shield,
  Leaf,
  Battery,
  ArrowRight,
  CheckCircle2,
  Factory,
  Globe,
  Award,
  ChevronRight,
  Flame,
  Cpu,
  Clock,
  Sparkles,
  Layers,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionComponents';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import FeatureCard from '@/components/ui/FeatureCard';
import RoiCalculator from '@/components/ui/RoiCalculator';
import FaqAccordion from '@/components/ui/FaqAccordion';

export const metadata: Metadata = {
  title: 'GoodEnough Energy | Leading BESS Gigafactory — Greater Noida, India',
  description:
    'GoodEnough Energy manufactures advanced Battery Energy Storage Systems (BESS) at its 7 GWh gigafactory in Greater Noida. Powering commercial, industrial, and utility-scale energy storage with liquid cooling & AI fire safety.',
  keywords: [
    'BESS India',
    'Battery Energy Storage System',
    'GoodEnough Energy',
    'Greater Noida Gigafactory',
    'StorEDGE',
    'Commercial BESS',
    'Utility Energy Storage',
    'Diesel Generator Replacement',
  ],
  openGraph: {
    title: 'GoodEnough Energy | India\'s Advanced BESS Gigafactory',
    description:
      'Power That Stores. Energy That Lasts. 7 GWh annual capacity BESS gigafactory in Greater Noida, UP, India.',
    url: 'https://goodenough.energy',
    siteName: 'GoodEnough Energy',
    locale: 'en_IN',
    type: 'website',
  },
};

const stats = [
  { value: '7 GWh', label: 'Gigafactory Phase Capacity', sub: 'Greater Noida, UP', icon: Battery },
  { value: '₹25.8/kWh', label: 'DG Cost Displaced', sub: 'Cut to ₹7-8 with BESS', icon: TrendingDown },
  { value: '< 20 ms', label: 'Sub-Cycle Switchover', sub: 'Zero outage downtime', icon: Zap },
  { value: '25 Years', label: 'Engineered Asset Life', sub: 'Liquid-cooled LFP cells', icon: Shield },
];

const homeFaqs = [
  {
    question: 'How does GoodEnough BESS replace conventional Diesel Generators (DG sets)?',
    answer:
      'GoodEnough StorEDGE systems provide instantaneous power backup with sub-20ms switchover, eliminating the fuel supply hassle, high maintenance costs, noise pollution, and toxic carbon emissions of diesel gensets. While DG electricity costs ₹24–30/kWh, BESS running costs are only ₹6–8/kWh when charged from off-peak grid or rooftop solar.',
  },
  {
    question: 'Where is GoodEnough Energy’s manufacturing facility located?',
    answer:
      'Our state-of-the-art automated Gigafactory is situated in Ecotech VII, Greater Noida, Uttar Pradesh, India. It represents one of India’s largest dedicated BESS manufacturing investments, scaling to 7 GWh capacity to serve commercial, industrial, and utility projects.',
  },
  {
    question: 'What battery chemistry and safety mechanisms are utilized?',
    answer:
      'All StorEDGE systems utilize Tier-1 Lithium Iron Phosphate (LiFePO₄ / LFP) chemistry recognized for exceptional thermal stability and long cycle life. We integrate proprietary liquid thermal management alongside multi-tier AI prognostic BMS and aerosol fire suppression certified to IEC 62619, UL 9540A, and BIS standards.',
  },
  {
    question: 'Can GoodEnough BESS operate off-grid (Island Mode)?',
    answer:
      'Yes. StorEDGE is equipped with true black-start and grid-forming capabilities. In Island Mode, it acts as the voltage and frequency source, seamlessly integrating with solar PV and wind without any external grid reference.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative bg-slate-950 overflow-hidden text-white pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.22)_0%,_transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(13,148,136,0.15)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                India&apos;s BESS Gigafactory — Greater Noida
              </span>
            </FadeIn>

            <FadeIn direction="up">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
                Power That Stores.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Energy That Lasts.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
                GoodEnough Energy engineers and manufactures utility & industrial scale Battery
                Energy Storage Systems (BESS) at our 7 GWh gigafactory in Greater Noida — eliminating
                diesel reliance and accelerating India&apos;s clean power transition.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 border-none text-slate-950 font-extrabold px-8 rounded-xl shadow-xl shadow-emerald-500/25 text-base gap-2"
              >
                Request Technical Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="btn btn-outline border-slate-700 hover:bg-slate-900 text-white font-semibold px-6 rounded-xl text-base gap-2 hover:border-slate-500"
              >
                Explore StorEDGE Platform
                <ChevronRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            {/* Certifications ticker */}
            <FadeIn direction="up" delay={0.3} className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 uppercase tracking-wider">Certified Standards:</span>
              <span className="badge badge-outline border-slate-700 text-slate-300">IEC 62619</span>
              <span className="badge badge-outline border-slate-700 text-slate-300">UL 9540A</span>
              <span className="badge badge-outline border-slate-700 text-slate-300">BIS Certified</span>
              <span className="badge badge-outline border-slate-700 text-slate-300">ISO 9001:2015</span>
              <span className="badge badge-outline border-slate-700 text-slate-300">Make in India</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Metric Highlights ──────────────────────────────────────────────── */}
      <section className="bg-slate-900 border-y border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {stats.map(({ value, label, sub, icon: Icon }, idx) => (
              <FadeIn key={label} delay={idx * 0.08} className="pt-4 lg:pt-0 lg:px-6 first:pt-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {value}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-200">{label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── StorEDGE Product Showcase ──────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Modular BESS Platforms"
            title="Engineered for Every Energy Threshold"
            description="From high-density commercial cabinets to multi-megawatt utility containers, our StorEDGE lineup delivers liquid-cooled performance tailored for Indian climates."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <ProductCard
              name="StorEDGE 0.25"
              capacity="250 kWh"
              segment="Commercial & Industrial (C&I)"
              badge="C&I Platform"
              isPopular
              description="Compact, skid-ready BESS engineered for hospitals, universities, manufacturing plants, data centres, and EV charging hubs to displace DG sets."
              specs={[
                'Liquid thermal cooling keeping cells within ±2°C',
                'IP55 outdoor weatherproof enclosure with acoustic insulation',
                'Sub-20ms seamless backup transition (< 1 cycle)',
                'Modular scaling up to 2 MWh in parallel configuration',
                'Automated aerosol fire suppression system with early gas detection',
              ]}
              href="/products/storedge-0-25"
            />

            <ProductCard
              name="StorEDGE 5.0"
              capacity="5 MWh"
              segment="Utility & High-Voltage Grid"
              badge="Utility Scale"
              description="High-density 20ft containerised BESS engineered for solar/wind farms, grid substations, peak shaving, and ancillary grid support."
              specs={[
                'High-density 5 MWh energy block in a standard 20ft ISO container',
                'Liquid cooling with variable speed pumps for maximum round-trip efficiency (> 88%)',
                'Built-in SCADA / EMS with sub-second telemetry and remote dispatch',
                'Multi-MW farm scalability with central substation interconnect',
                'Deflagration panels & NFPA 855 / UL 9540A compliant fire safety',
              ]}
              href="/products/storedge-5-0"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="btn btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white rounded-xl gap-2 font-bold"
            >
              Compare All Detailed Technical Specifications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Interactive ROI Financial Calculator ────────────────────────────── */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>

      {/* ─── Operational Modes ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Flexible Deployment"
            title="Three Versatile Operating Topologies"
            description="Whether ensuring uninterrupted power during grid failures or optimizing tariff arbitrage, StorEDGE adapts dynamically through our intelligent EMS controller."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Island Mode</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    True grid-forming operation. Automatically isolates from the grid during blackouts
                    to power critical equipment with zero drop, operating completely off-grid with solar.
                  </p>
                </div>
                <Link
                  href="/island-mode"
                  className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1.5"
                >
                  Explore Island Mode <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold mb-6">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Hybrid Mode</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Synchronous grid-tied operation with on-site solar. Maximises self-consumption,
                    reduces high contract demand charges, and shifts cheap power into peak tariff windows.
                  </p>
                </div>
                <Link
                  href="/hybrid-mode"
                  className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1.5"
                >
                  Explore Hybrid Mode <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Microgrid Solutions</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Turnkey energy management for industrial townships, smart cities, and SEZs.
                    Orchestrates multiple generation sources with smart load prioritization.
                  </p>
                </div>
                <Link
                  href="/microgrid"
                  className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1.5"
                >
                  Explore Microgrids <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Greater Noida Gigafactory Spotlight ────────────────────────────── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.1)_0%,_transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <FadeIn direction="left">
                <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold uppercase tracking-wider text-xs px-3 py-2.5 mb-4">
                  Make In India Initiative
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
                  India&apos;s Advanced BESS Gigafactory in Greater Noida
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  Located in Ecotech VII, Greater Noida, our state-of-the-art gigafactory has an
                  initial operating capacity scaling up to 7 GWh. We integrate fully automated robotic
                  pack assembly, cell grading, automated busbar laser welding, and rigorous end-of-line testing.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    <Factory className="w-6 h-6 text-emerald-400 mb-2" />
                    <div className="font-bold text-white text-lg">Automated Lines</div>
                    <div className="text-xs text-slate-400">Robotic cell sorting & thermal potting</div>
                  </div>
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    <Cpu className="w-6 h-6 text-emerald-400 mb-2" />
                    <div className="font-bold text-white text-lg">Proprietary BMS</div>
                    <div className="text-xs text-slate-400">In-house hardware & firmware testing</div>
                  </div>
                </div>

                <Link
                  href="/about-goodenough"
                  className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2 shadow-lg shadow-emerald-500/20"
                >
                  Discover Our Factory & Leadership
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-gradient-to-tr from-slate-800 to-slate-850 p-8 rounded-3xl border border-slate-700 shadow-2xl space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-4">
                    Gigafactory Specifications
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Location:</span>
                      <span className="font-semibold text-white">Ecotech VII, Greater Noida, UP, India</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Annual Phase Capacity:</span>
                      <span className="font-bold text-emerald-400 font-mono">Up to 7 GWh</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Cell Technology:</span>
                      <span className="font-semibold text-white">Prismatic LiFePO₄ (LFP)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Thermal Management:</span>
                      <span className="font-semibold text-emerald-400">Active Liquid Glycol Cooling</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Testing Standards:</span>
                      <span className="font-semibold text-white">100% End-of-Line Cycle Testing</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-400">Factory Visits:</span>
                      <span className="font-semibold text-white">Available for qualified EPC & C&I clients</span>
                    </div>
                  </div>

                  <Link
                    href="/contact?type=plant_visit"
                    className="btn btn-outline border-slate-600 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 w-full rounded-xl"
                  >
                    Schedule Greater Noida Plant Tour
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything You Need to Know About BESS"
            description="Clear answers regarding system sizing, fire safety, diesel displacement economics, and warranty coverage."
          />

          <FaqAccordion items={homeFaqs} />

          <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600 mb-3">
              Have specific technical questions regarding your electrical single-line diagram (SLD)?
            </p>
            <Link
              href="/contact"
              className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1"
            >
              Consult with a GoodEnough BESS Specialist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Ready to Decarbonise Your Power Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-10">
              Speak with our power electronics engineers to evaluate your diesel displacement economics,
              transformer capacity, and payback schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn bg-white hover:bg-slate-100 text-emerald-800 font-extrabold px-8 py-3.5 rounded-xl border-none shadow-xl text-base gap-2"
              >
                Request Free Energy Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="btn bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-3.5 rounded-xl border-none text-base"
              >
                View Product Specifications
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
