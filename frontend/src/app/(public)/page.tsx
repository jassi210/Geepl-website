import type { Metadata } from 'next';
import Image from 'next/image';
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
  Server,
  Building2,
  Car,
  Power,
  BarChart3,
  FileText,
  Calendar,
  ExternalLink,
  ShieldAlert,
  Sliders,
  Check,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionComponents';
import RoiCalculator from '@/components/ui/RoiCalculator';
import FaqAccordion from '@/components/ui/FaqAccordion';

export const metadata: Metadata = {
  title: 'GoodEnough Energy | Powering a Smarter Energy Future — BESS Gigafactory',
  description:
    'Reliable, intelligent battery energy storage systems (BESS) for businesses and grids — engineered to cut costs, protect operations and accelerate the transition to clean energy.',
  keywords: [
    'BESS',
    'Battery Energy Storage Systems',
    'GoodEnough Energy',
    'StorEDGE',
    'Greater Noida Gigafactory',
    'Commercial BESS',
    'Utility Energy Storage',
    'Clean Energy',
    'Liquid Cooled BESS',
  ],
  openGraph: {
    title: 'GoodEnough Energy | Powering a Smarter Energy Future',
    description:
      'Reliable, intelligent battery storage for businesses and grids. India’s leading 7 GWh BESS Gigafactory in Greater Noida.',
    url: 'https://goodenough.energy',
    siteName: 'GoodEnough Energy',
    locale: 'en_IN',
    type: 'website',
  },
};

const heroStats = [
  { value: '7 GWh', label: 'Gigafactory Phase Capacity', sub: 'Greater Noida, UP' },
  { value: '< 20 ms', label: 'Sub-Cycle Switchover', sub: 'Instantaneous Black Start' },
  { value: '25 Years', label: 'Engineered Asset Life', sub: 'Liquid-Cooled LFP Cells' },
  { value: '₹7-8 / kWh', label: 'Levelized Storage Cost', sub: 'Displacing ₹25+ DG Sets' },
];

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing & Heavy Industry',
    desc: 'Eliminate peak demand penalties, prevent production line stoppages, and replace noisy diesel generators.',
    badge: 'Industrial C&I',
  },
  {
    icon: Building2,
    name: 'Commercial Infrastructure',
    desc: 'Uninterrupted power for hospitals, IT campuses, data centers, and corporate facilities with zero switchover delay.',
    badge: 'Commercial',
  },
  {
    icon: Leaf,
    name: 'Renewable Energy Integration',
    desc: 'Firm intermittent wind and solar generation, capture curtailment power, and dispatch steady clean megawatts to the grid.',
    badge: 'Solar & Wind',
  },
  {
    icon: Server,
    name: 'Data Centres & Critical Tech',
    desc: 'High-density backup with sub-20ms response, displacing massive lead-acid UPS strings with liquid-cooled LFP.',
    badge: 'Mission-Critical',
  },
  {
    icon: Car,
    name: 'EV Fast-Charging Hubs',
    desc: 'Buffer the electrical grid during mega-watt EV charging spikes without requiring massive substation upgrades.',
    badge: 'Mobility',
  },
  {
    icon: Power,
    name: 'Utilities & Substation Grids',
    desc: 'Frequency regulation, synthetic inertia, voltage support, and transmission congestion relief at transmission voltages.',
    badge: 'Grid-Scale',
  },
];

const whyChooseUs = [
  {
    icon: Factory,
    title: 'Engineering Expertise',
    desc: 'End-to-end proprietary development of battery enclosures, active liquid cooling, high-voltage battery management systems, and SCADA orchestration.',
  },
  {
    icon: Shield,
    title: 'Safety & Quality First',
    desc: 'Tier-1 LiFePO₄ chemistry, UL 9540A anti-propagation design, aerosol gas suppression, and multi-tier AI fault diagnostics at the individual cell level.',
  },
  {
    icon: Cpu,
    title: 'Intelligent Energy Management',
    desc: 'Autonomous AI EMS controller dynamically optimizes energy arbitrage, peak demand shaving, frequency tracking, and solar-wind synchronization.',
  },
  {
    icon: Clock,
    title: 'Reliable Performance',
    desc: 'Sub-20 millisecond switchover guarantees critical loads never reboot during utility power drops or brownouts.',
  },
  {
    icon: Layers,
    title: 'Scalable Modular Topologies',
    desc: 'Start with a single 250 kWh cabinet and scale seamlessly in parallel up to multi-hundred-megawatt grid container farms.',
  },
  {
    icon: Award,
    title: 'Full Lifecycle Support',
    desc: 'Dedicated 24/7 remote diagnostic monitoring, pan-India field service engineers, and comprehensive 10-to-25-year performance warranties.',
  },
];

const projects = [
  {
    title: '50 MWh Utility Solar + BESS Firming',
    location: 'Rajasthan, India',
    industry: 'Renewables & Grid',
    capacity: '50 MWh / 25 MW',
    desc: 'Grid-scale containerized StorEDGE 5.0 installation firming solar output and providing ancillary frequency regulation for the state load dispatch center.',
    image: '/images/concept7_hero.jpg',
  },
  {
    title: '10 MWh Automotive Gigafactory Microgrid',
    location: 'Pune, Maharashtra',
    industry: 'Automotive Manufacturing',
    capacity: '10 MWh / 4 MW',
    desc: 'Complete displacement of 12 diesel gensets across automated robotic stamping and paint lines, slashing carbon emissions by 8,200 metric tons annually.',
    image: '/images/concept1_hero.jpg',
  },
  {
    title: '2.5 MWh Tier-IV Data Centre UPS Backup',
    location: 'Noida, NCR',
    industry: 'Data Centres & Cloud',
    capacity: '2.5 MWh / 2 MW',
    desc: 'High-density StorEDGE 0.25 parallel cluster delivering instant black-start power, reducing substation demand charges and securing 99.999% uptime.',
    image: '/images/concept2_hero.jpg',
  },
];

const insights = [
  {
    type: 'Industry Report',
    date: 'Q1 2026',
    title: 'Replacing Diesel Generators with Liquid-Cooled BESS: The Complete C&I Economics Guide',
    excerpt: 'Detailed financial modeling showing how commercial facilities achieve 3.2-year payback by shifting from ₹26/kWh diesel to ₹7.5/kWh battery storage.',
    href: '/industry-report',
  },
  {
    type: 'Technical Whitepaper',
    date: 'Whitepaper #04',
    title: 'Grid-Forming Inverters vs. Grid-Following: Sub-20ms Transition Architectures',
    excerpt: 'In-depth analysis of virtual synchronous machine algorithms and black-start capabilities in high-renewable penetration grids.',
    href: '/white-paper',
  },
  {
    type: 'Company Blog',
    date: 'Recent Update',
    title: 'Inside the Greater Noida Gigafactory: Robotic Assembly & Thermal Potting',
    excerpt: 'A behind-the-scenes walkthrough of automated busbar laser welding, automated cell sorting, and 100% end-of-line battery cycle testing.',
    href: '/blogs',
  },
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
    <div className="bg-[#061A13] text-white selection:bg-[#A8E51E] selection:text-[#061A13]">
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Visual with Cinematic Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/concept7_hero.jpg"
            alt="GoodEnough Energy BESS Industrial Installation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered forest-green & dark overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A13]/95 via-[#061A13]/85 to-[#061A13]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A13] via-[#061A13]/40 to-[#061A13]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,77,56,0.4)_0%,_transparent_75%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 lg:pt-48 pb-16 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#164D38]/60 border border-[#A8E51E]/30 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#A8E51E] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#A8E51E] uppercase">
                  BATTERY ENERGY STORAGE SYSTEMS
                </span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Powering a Smarter Energy Future.
              </h1>
            </FadeIn>

            {/* Supporting Description */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-lg lg:text-xl text-[#B8C5BD] leading-relaxed mb-10 max-w-2xl font-normal">
                Reliable, intelligent battery storage for businesses and grids — engineered to cut costs, protect operations and accelerate the transition to clean energy.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.3} className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#A8E51E] hover:bg-[#B9EE45] text-[#061A13] font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-xl shadow-[#A8E51E]/25 hover:shadow-2xl hover:shadow-[#A8E51E]/40 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base border border-white/25 hover:border-white/50 backdrop-blur-xs transition-all duration-200 active:scale-95"
              >
                <span>Talk to Our Experts</span>
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Hero Stats Bar */}
        <div className="relative z-10 w-full border-t border-white/10 bg-[#061A13]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {heroStats.map(({ value, label, sub }, idx) => (
                <div key={label} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                  <div className="text-2xl sm:text-3xl font-black text-[#A8E51E] font-mono tracking-tight">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{label}</div>
                  <div className="text-[11px] text-[#B8C5BD]">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 1: Company Introduction ───────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B241A] relative border-b border-[#164D38]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-5">
                  About GoodEnough Energy
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-6">
                  Engineering Confidence for a Sustainable Future.
                </h2>
                <p className="text-base sm:text-lg text-[#B8C5BD] leading-relaxed mb-6 font-normal">
                  GoodEnough Energy operates one of India&apos;s most advanced Battery Energy Storage Systems (BESS) Gigafactories in Greater Noida, Uttar Pradesh. We design, manufacture, and deploy turn-key, utility-grade energy storage systems that eliminate dependency on expensive diesel generators and accelerate decarbonization.
                </p>
                <p className="text-sm sm:text-base text-[#B8C5BD]/80 leading-relaxed mb-8">
                  From sub-20ms instantaneous black-start capabilities to intelligent multi-tier AI BMS algorithms and active liquid glycol cooling, our technology guarantees asset longevity, unmatched thermal safety, and rapid return on investment across commercial and grid installations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-[#061A13] border border-[#164D38]">
                    <div className="text-2xl font-black text-[#A8E51E] font-mono">7 GWh</div>
                    <div className="text-xs font-bold text-white mt-1">Annual Capacity</div>
                    <div className="text-[11px] text-[#B8C5BD]">Automated Gigafactory in Greater Noida</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#061A13] border border-[#164D38]">
                    <div className="text-2xl font-black text-[#A8E51E] font-mono">± 2°C</div>
                    <div className="text-xs font-bold text-white mt-1">Liquid Cooling Delta</div>
                    <div className="text-[11px] text-[#B8C5BD]">Precision cell thermal management</div>
                  </div>
                </div>

                <Link
                  href="/about-goodenough"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A8E51E] hover:bg-[#B9EE45] text-[#061A13] font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md shadow-[#A8E51E]/20 hover:scale-[1.02] active:scale-95"
                >
                  <span>Learn More About Our Technology</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden border border-[#164D38] bg-[#061A13] shadow-2xl">
                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src="/images/concept1_hero.jpg"
                      alt="GoodEnough Energy Gigafactory Installation"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061A13] via-[#061A13]/40 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8 -mt-12 relative z-10">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#A8E51E] bg-[#164D38] px-3 py-1 rounded-full mb-3">
                      Make in India
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">Automated Robotic Pack Assembly</h3>
                    <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed">
                      Precision cell grading, automated busbar laser welding, and 100% end-of-line full-capacity cycle validation.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Products ───────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#061A13] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
                StorEDGE Product Lineup
              </span>
            </FadeIn>
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
                Discover Our Energy Storage Technology.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-base sm:text-lg text-[#B8C5BD] leading-relaxed">
                Liquid-cooled, high-density Lithium Iron Phosphate systems engineered for harsh operating environments, heavy cyclic loads, and rapid payback.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* StorEDGE 0.25 */}
            <FadeIn direction="up" delay={0.1} className="h-full">
              <div className="h-full rounded-3xl bg-[#0B241A] border border-[#164D38] hover:border-[#A8E51E]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-xl group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-[#164D38] text-[#A8E51E] text-xs font-bold uppercase tracking-wider">
                      Commercial &amp; Industrial
                    </span>
                    <span className="text-xs font-mono text-[#B8C5BD] bg-[#061A13] px-3 py-1 rounded-full border border-white/10">
                      IP55 Weatherproof
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">StorEDGE 0.25</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-black text-[#A8E51E] font-mono">250 kWh</span>
                    <span className="text-xs text-[#B8C5BD]">Usable Storage Capacity</span>
                  </div>

                  <p className="text-sm text-[#B8C5BD] leading-relaxed mb-6">
                    Compact, skid-ready BESS engineered for hospitals, universities, manufacturing plants, data centres, and EV charging hubs seeking to eliminate diesel generators.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Technical Highlights
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#B8C5BD]">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>Active liquid thermal glycol cooling keeping cells within ±2°C</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>Sub-20ms seamless backup transition for zero load disruption</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>Modular scaling up to 2 MWh in parallel configuration</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>Built-in aerosol fire suppression with multi-gas detection sensors</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/products/storedge-0-25"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#164D38] hover:bg-[#A8E51E] text-white hover:text-[#061A13] font-bold text-xs sm:text-sm transition-all duration-200 group-hover:shadow-lg group-hover:shadow-[#A8E51E]/20"
                >
                  <span>Explore StorEDGE 0.25 Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* StorEDGE 5.0 */}
            <FadeIn direction="up" delay={0.2} className="h-full">
              <div className="h-full rounded-3xl bg-[#0B241A] border border-[#164D38] hover:border-[#A8E51E]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-xl group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-[#A8E51E] text-[#061A13] text-xs font-extrabold uppercase tracking-wider">
                      Utility &amp; Grid Scale
                    </span>
                    <span className="text-xs font-mono text-[#B8C5BD] bg-[#061A13] px-3 py-1 rounded-full border border-white/10">
                      20ft ISO Container
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">StorEDGE 5.0</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-black text-[#A8E51E] font-mono">5.0 MWh</span>
                    <span className="text-xs text-[#B8C5BD]">High-Density Energy Block</span>
                  </div>

                  <p className="text-sm text-[#B8C5BD] leading-relaxed mb-6">
                    High-density 20ft containerized BESS engineered for solar and wind farms, transmission substations, peak shaving, and ancillary grid support services.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Technical Highlights
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#B8C5BD]">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>High-density 5 MWh energy block inside a standard 20ft ISO container</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>Variable-speed liquid pumps achieving &gt; 88% AC-to-AC round-trip efficiency</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>Sub-second SCADA / EMS dispatch with full remote cloud telemetry</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#A8E51E] shrink-0 mt-0.5" />
                        <span>UL 9540A &amp; NFPA 855 compliant with automated deflagration venting</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/products/storedge-5-0"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#A8E51E] hover:bg-[#B9EE45] text-[#061A13] font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#A8E51E]/20"
                >
                  <span>Explore StorEDGE 5.0 Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#A8E51E] hover:underline font-bold uppercase tracking-wider"
            >
              <span>View Full Technical Comparison Sheet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Solutions ──────────────────────────────────────────── */}
      <section id="solutions" className="py-24 sm:py-32 bg-[#0B241A] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
                Operational Modes
              </span>
            </FadeIn>
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
                Energy Solutions Designed Around Your Needs.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-base sm:text-lg text-[#B8C5BD] leading-relaxed">
                Whether creating islanded microgrids, optimizing tariff arbitrage, or firming renewable parks, our flexible topologies adapt dynamically.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn direction="up" delay={0.05} className="h-full">
              <div className="h-full rounded-2xl bg-[#061A13] border-l-4 border-l-[#A8E51E] border-y border-r border-[#164D38] p-6 flex flex-col justify-between hover:border-r-[#A8E51E]/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#164D38] text-[#A8E51E] flex items-center justify-center font-bold mb-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Island Mode</h3>
                  <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed mb-4">
                    True grid-forming operation. Automatically isolates during blackouts to power mission-critical operations completely off-grid with solar.
                  </p>
                </div>
                <Link
                  href="/island-mode"
                  className="text-xs text-[#A8E51E] font-bold inline-flex items-center gap-1 hover:underline pt-2"
                >
                  Explore Island Mode <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1} className="h-full">
              <div className="h-full rounded-2xl bg-[#061A13] border-l-4 border-l-[#A8E51E] border-y border-r border-[#164D38] p-6 flex flex-col justify-between hover:border-r-[#A8E51E]/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#164D38] text-[#A8E51E] flex items-center justify-center font-bold mb-4">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Hybrid Mode</h3>
                  <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed mb-4">
                    Synchronous grid-tied operation with rooftop or ground-mount solar. Maximizes self-consumption, cuts demand penalties, and enables ToD arbitrage.
                  </p>
                </div>
                <Link
                  href="/hybrid-mode"
                  className="text-xs text-[#A8E51E] font-bold inline-flex items-center gap-1 hover:underline pt-2"
                >
                  Explore Hybrid Mode <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15} className="h-full">
              <div className="h-full rounded-2xl bg-[#061A13] border-l-4 border-l-[#A8E51E] border-y border-r border-[#164D38] p-6 flex flex-col justify-between hover:border-r-[#A8E51E]/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#164D38] text-[#A8E51E] flex items-center justify-center font-bold mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Microgrid Architecture</h3>
                  <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed mb-4">
                    Turnkey power architecture for industrial townships, SEZs, remote campuses, and critical infrastructure with intelligent load priority shedding.
                  </p>
                </div>
                <Link
                  href="/microgrid"
                  className="text-xs text-[#A8E51E] font-bold inline-flex items-center gap-1 hover:underline pt-2"
                >
                  Explore Microgrids <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="h-full">
              <div className="h-full rounded-2xl bg-[#061A13] border-l-4 border-l-[#A8E51E] border-y border-r border-[#164D38] p-6 flex flex-col justify-between hover:border-r-[#A8E51E]/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#164D38] text-[#A8E51E] flex items-center justify-center font-bold mb-4">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Renewable Integration</h3>
                  <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed mb-4">
                    Solves duck curves, provides fast frequency response (FFR), ramps power output, and stores excess generation to prevent costly grid curtailment.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs text-[#A8E51E] font-bold inline-flex items-center gap-1 hover:underline pt-2"
                >
                  Explore Renewables <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Industries ─────────────────────────────────────────── */}
      <section id="industries" className="py-24 sm:py-32 bg-[#061A13] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
                Applications
              </span>
            </FadeIn>
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
                Tailored Energy Storage for Mission-Critical Sectors.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-base sm:text-lg text-[#B8C5BD] leading-relaxed">
                Deploying robust, climate-resilient energy storage platforms across India’s core industrial, commercial, and utility infrastructure.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <FadeIn key={ind.name} direction="up" delay={idx * 0.05} className="h-full">
                  <div className="h-full rounded-2xl bg-[#0B241A] border border-[#164D38] p-7 flex flex-col justify-between hover:border-[#A8E51E]/40 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#164D38] text-[#A8E51E] flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold text-[#A8E51E] bg-[#061A13] px-2.5 py-1 rounded-full border border-[#164D38]">
                          {ind.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2.5">{ind.name}</h3>
                      <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Why GoodEnough Energy ──────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0C3021] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
                The GoodEnough Advantage
              </span>
            </FadeIn>
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
                Why GoodEnough Energy?
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-base sm:text-lg text-[#B8C5BD] leading-relaxed">
                We combine gigafactory-scale domestic manufacturing with aerospace-grade thermal safety and intelligent energy management software.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} direction="up" delay={idx * 0.05} className="h-full">
                  <div className="h-full rounded-2xl bg-[#061A13] border border-[#164D38] p-7 flex flex-col justify-between hover:border-[#A8E51E]/40 transition-all duration-300">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#164D38] text-[#A8E51E] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Projects Showcase ──────────────────────────────────── */}
      <section id="projects" className="py-24 sm:py-32 bg-[#061A13] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
                Field Installations
              </span>
            </FadeIn>
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
                Proven Installations. Verified Impact.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-base sm:text-lg text-[#B8C5BD] leading-relaxed">
                Real-world BESS systems delivering round-the-clock reliability, peak tariff savings, and carbon reduction across India.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <FadeIn key={proj.title} direction="up" delay={idx * 0.1} className="h-full">
                <div className="h-full rounded-3xl bg-[#0B241A] border border-[#164D38] overflow-hidden flex flex-col justify-between hover:border-[#A8E51E]/40 transition-all duration-300 group">
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B241A] via-transparent to-black/40" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#061A13]/90 text-[#A8E51E] text-[11px] font-bold uppercase tracking-wider border border-white/10 backdrop-blur-md">
                          {proj.industry}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-4 font-mono text-xs font-bold text-white bg-[#164D38]/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {proj.capacity}
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <div className="text-xs text-[#A8E51E] font-medium mb-1">{proj.location}</div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A8E51E] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed mb-6">{proj.desc}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs text-[#A8E51E] font-bold hover:underline"
                    >
                      <span>View Case Study Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 7: Interactive ROI Financial Calculator ───────────────── */}
      <section className="py-20 bg-[#0B241A] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>

      {/* ─── Section 8: Trust, Certifications & Safety ─────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0C3021] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
                Global Compliance
              </span>
            </FadeIn>
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
                Built on Rigorous Safety &amp; Verified Standards.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-base sm:text-lg text-[#B8C5BD] leading-relaxed">
                GoodEnough Energy systems meet the world&apos;s most stringent battery energy storage electrical, fire safety, and environmental certifications.
              </p>
            </FadeIn>
          </div>

          {/* Certifications Badges */}
          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
              {[
                { code: 'IEC 62619', title: 'Secondary Lithium Cells & Batteries for Industrial Applications' },
                { code: 'UL 9540A', title: 'Test Method for Evaluating Thermal Runaway Fire Propagation' },
                { code: 'BIS Certified', title: 'Bureau of Indian Standards Mandatory Battery Compliance' },
                { code: 'ISO 9001:2015', title: 'Gigafactory Automated Quality Management Certified' },
                { code: 'Make In India', title: 'Domestic Value Addition & Local Supply Chain Integration' },
              ].map((cert) => (
                <div
                  key={cert.code}
                  className="p-5 rounded-2xl bg-[#061A13] border border-[#164D38] text-center flex flex-col justify-center items-center hover:border-[#A8E51E]/40 transition-colors"
                >
                  <Award className="w-8 h-8 text-[#A8E51E] mb-2" />
                  <div className="text-base font-black text-white font-mono">{cert.code}</div>
                  <div className="text-[11px] text-[#B8C5BD] mt-1 leading-snug">{cert.title}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Safety Architecture Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#061A13] border border-[#164D38]">
              <ShieldAlert className="w-7 h-7 text-[#A8E51E] mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Anti-Propagation Enclosures</h3>
              <p className="text-xs text-[#B8C5BD] leading-relaxed">
                Module-to-module thermal barrier sheets prevent any runaway cell from impacting adjacent modules, certified under UL 9540A testing.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#061A13] border border-[#164D38]">
              <Flame className="w-7 h-7 text-[#A8E51E] mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Aerosol Gas Fire Suppression</h3>
              <p className="text-xs text-[#B8C5BD] leading-relaxed">
                Automated multi-spectral flame and combustible gas detection with zero-water aerosol suppression to smother fire incidents without electrical shorting.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#061A13] border border-[#164D38]">
              <Sliders className="w-7 h-7 text-[#A8E51E] mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Active Liquid Thermal Loop</h3>
              <p className="text-xs text-[#B8C5BD] leading-relaxed">
                Circulating glycol coolant maintains uniform cell temperatures even under 50°C Indian ambient summer heat, boosting cell lifespan by 40%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 9: Insights ───────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#061A13] relative border-b border-[#164D38]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
                Knowledge Hub
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Latest Insights &amp; Intelligence.
              </h2>
            </div>
            <Link
              href="/blogs"
              className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A8E51E] font-bold hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((item, idx) => (
              <FadeIn key={item.title} direction="up" delay={idx * 0.1} className="h-full">
                <div className="h-full rounded-3xl bg-[#0B241A] border border-[#164D38] p-7 flex flex-col justify-between hover:border-[#A8E51E]/40 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#B8C5BD] mb-4">
                      <span className="font-semibold text-[#A8E51E] bg-[#061A13] px-2.5 py-1 rounded-full border border-white/10">
                        {item.type}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-[#A8E51E] transition-colors leading-snug">
                      <Link href={item.href}>{item.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8C5BD] leading-relaxed mb-6">{item.excerpt}</p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs text-[#A8E51E] font-bold hover:underline"
                  >
                    <span>Read Publication</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 10: Frequently Asked Questions ────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B241A] relative border-b border-[#164D38]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#164D38] border border-[#A8E51E]/20 text-[#A8E51E] text-xs font-bold uppercase tracking-wider mb-4">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Everything You Need to Know About BESS.
            </h2>
            <p className="text-sm sm:text-base text-[#B8C5BD]">
              Clear answers regarding system sizing, fire safety, diesel displacement economics, and warranty coverage.
            </p>
          </div>

          <FaqAccordion items={homeFaqs} />

          <div className="mt-12 text-center p-6 rounded-2xl bg-[#061A13] border border-[#164D38]">
            <p className="text-xs sm:text-sm text-[#B8C5BD] mb-3">
              Have specific technical questions regarding your electrical single-line diagram (SLD) or grid interconnect?
            </p>
            <Link
              href="/contact"
              className="text-[#A8E51E] hover:underline font-bold text-xs sm:text-sm inline-flex items-center gap-1.5"
            >
              <span>Consult with a GoodEnough BESS Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 11: Contact CTA ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-[#A8E51E] to-[#B9EE45] text-[#061A13] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#061A13]/10 text-[#061A13] text-xs font-black uppercase tracking-widest mb-6">
              Start Your Clean Power Transition
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-[#061A13]">
              Let&apos;s Build a Smarter Energy Future Together.
            </h2>
            <p className="text-base sm:text-xl text-[#061A13]/80 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
              Whether sizing a commercial BESS to replace diesel generators or engineering a multi-megawatt utility microgrid, our power electronics engineering team is ready to assist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#061A13] hover:bg-[#0B241A] text-white font-extrabold text-sm sm:text-base tracking-wide transition-all shadow-xl hover:scale-[1.02] active:scale-95 inline-flex items-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/contact?type=plant_visit"
                className="px-8 py-4 rounded-full bg-transparent hover:bg-[#061A13]/10 text-[#061A13] font-bold text-sm sm:text-base border-2 border-[#061A13] transition-all active:scale-95"
              >
                Schedule Greater Noida Plant Tour
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
