import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Battery,
  Shield,
  Zap,
  Flame,
  CheckCircle2,
  ArrowRight,
  Download,
  Building,
  Activity,
  Layers,
  Thermometer,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'StorEDGE 0.25 (250 kWh C&I BESS) | GoodEnough Energy',
  description:
    'Detailed specifications of StorEDGE 0.25 — 250 kWh liquid-cooled battery energy storage system designed for commercial buildings, factories, hospitals, and EV hubs in India.',
  openGraph: {
    title: 'StorEDGE 0.25 | Commercial & Industrial BESS',
    description: '250 kWh liquid-cooled modular energy storage system manufactured in Greater Noida.',
  },
};

const fullSpecs = [
  { label: 'Nominal Energy Capacity', val: '250 kWh usable' },
  { label: 'Continuous Output Power', val: '125 kW (0.5C) / up to 250 kW (1C option)' },
  { label: 'Battery Cell Chemistry', val: 'Prismatic Lithium Iron Phosphate (LiFePO₄)' },
  { label: 'DC Voltage Operating Range', val: '614.4 V – 780.8 V DC' },
  { label: 'Round-Trip AC-AC Efficiency', val: '> 88% (at 0.5C nominal)' },
  { label: 'Thermal Management Method', val: 'Active Liquid Glycol Circulation (Cold Plate)' },
  { label: 'Cell Temperature Variance', val: 'Maintained within ≤ ±2°C across pack' },
  { label: 'Ingress Protection Rating', val: 'IP55 (Outdoor Weatherproof Enclosure)' },
  { label: 'Operating Ambient Temp', val: '-10°C to +55°C (Indian extreme climates)' },
  { label: 'Fire Suppression & Detection', val: 'Aerosol Extinguishant + Early Gas & Thermal Sensor' },
  { label: 'Switchover Transition Time', val: '< 20 ms (Seamless sub-cycle islanding)' },
  { label: 'Parallel Scalability', val: 'Up to 8 units in parallel (2.0 MWh aggregate)' },
  { label: 'Weight & Dimensions', val: 'Approx 3,200 kg | 1,400 x 1,300 x 2,250 mm' },
  { label: 'Communications & Protocols', val: 'Modbus TCP / RTU, RS485, 4G / Ethernet IoT' },
];

const targetSectors = [
  {
    title: 'Hospitals & Healthcare',
    desc: 'Zero-downtime power protection for ICU, surgical suites, and diagnostic MRI machines without DG diesel smoke.',
  },
  {
    title: 'Data Centres & IT Parks',
    desc: 'Instantaneous sub-cycle islanding eliminates computer reboot and replaces noisy diesel UPS generators.',
  },
  {
    title: 'Pharmaceuticals & Food Processing',
    desc: 'Prevents batch losses caused by momentary grid brownouts and strict temperature-controlled storage.',
  },
  {
    title: 'EV Fast-Charging Plazas',
    desc: 'Buffers extreme EV charging spikes without requiring costly electrical transformer sanctions from DISCOMs.',
  },
];

export default function StorEdge025Page() {
  return (
    <>
      <PageHero
        badge="C&I Platform"
        title="StorEDGE 0.25: 250 kWh Liquid-Cooled BESS"
        subtitle="The definitive commercial and industrial energy storage cabinet. Displaces diesel gensets, cuts peak demand charges, and provides seamless backup with sub-20ms transfer."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'StorEDGE 0.25' },
        ]}
        actions={
          <>
            <a
              href="#inquiry"
              className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
            >
              Get Price Quote & Sizing
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact?type=brochure_025"
              className="btn btn-outline border-slate-700 text-white hover:bg-slate-900 rounded-xl gap-2"
            >
              <Download className="w-4 h-4" />
              Download Spec Sheet
            </Link>
          </>
        }
      />

      {/* ─── Key Value Proposition ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                  Engineered for Indian Climate
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                  Precision Liquid Cooling for 25-Year Asset Longevity
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Indian summers regularly push ambient temperatures past 45°C. Traditional air-cooled
                  battery systems suffer severe thermal runaway risks and rapid cell degradation.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  StorEDGE 0.25 features advanced micro-channel liquid cooling plates that circulate
                  inhibited glycol directly beneath each cell group. This maintains internal cell
                  temperature deviation below ±2°C, ensuring optimal performance, safety, and up to
                  6,000+ full charge-discharge cycles.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                    <Thermometer className="w-6 h-6 text-emerald-600 mb-1" />
                    <div className="text-2xl font-black text-slate-900 font-mono">±2°C</div>
                    <div className="text-xs text-slate-500">Tight Cell Thermal Delta</div>
                  </div>
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                    <Zap className="w-6 h-6 text-emerald-600 mb-1" />
                    <div className="text-2xl font-black text-slate-900 font-mono">&lt; 20 ms</div>
                    <div className="text-xs text-slate-500">Islanding Transfer Speed</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">System Architecture</h3>
                    <span className="badge badge-outline border-emerald-500 text-emerald-400 text-xs">
                      IP55 Outdoor Skid
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Integrated Inverter Option:</strong> Available with matched bidirectional PCS inverter or DC-coupled setup.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>AI Fire Protection:</strong> Aerosol fire extinguishing triggered by gas detection before smoke occurs.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Smart Energy Management:</strong> On-board EMS optimizes real-time time-of-day (TOD) tariffs automatically.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Plug & Play Footprint:</strong> Minimal civil work; simple concrete plinth foundation required.</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Target Applications ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Industrial Deployments"
            title="Ideal Applications for StorEDGE 0.25"
            description="Proven across diverse commercial sectors seeking operational continuity and carbon compliance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetSectors.map((sector) => (
              <HoverCard key={sector.title}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{sector.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{sector.desc}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Complete Engineering Datasheet Table ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Comprehensive Datasheet"
            title="Detailed Engineering Parameters"
            description="Full specifications according to IEC 62619, UL 9540A, and BIS standards."
          />

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
            <table className="table w-full">
              <tbody className="divide-y divide-slate-100 text-sm">
                {fullSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="py-4 px-6 font-semibold text-slate-700 w-1/2">{spec.label}</td>
                    <td className="py-4 px-6 font-mono text-slate-900 font-bold w-1/2 text-right sm:text-left">
                      {spec.val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Inquiry Form ─────────────────────────────────────────────────── */}
      <section id="inquiry" className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider mb-2">
              Commercial Consultation
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Request a StorEDGE 0.25 Proposal
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Provide your facility details and our Greater Noida application engineering team will send you a complete sizing calculation.
            </p>
          </div>

          <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <ContactForm defaultSubject="StorEDGE 0.25 (250 kWh) Inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}

