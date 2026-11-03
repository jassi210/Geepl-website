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
  Cpu,
  Layers,
  Thermometer,
  Radio,
  Server,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'StorEDGE 5.0 (5 MWh Utility BESS Container) | GoodEnough Energy',
  description:
    'StorEDGE 5.0 delivers 5.016 MWh of utility-scale energy storage in a standard 20ft ISO container. Built for solar farms, grid substations, and multi-megawatt renewable projects in India.',
  openGraph: {
    title: 'StorEDGE 5.0 | 5 MWh Utility BESS Container',
    description: 'Ultra-high density 20-foot containerized energy storage engineered in Greater Noida.',
  },
};

const utilitySpecs = [
  { label: 'Nominal Energy Capacity', val: '5.016 MWh (5,016 kWh)' },
  { label: 'Continuous Output Power', val: '2.5 MW (0.5C) / 1.25 MW (0.25C option)' },
  { label: 'Battery Cell Chemistry', val: 'Tier-1 Prismatic LiFePO₄ (314Ah / 280Ah cells)' },
  { label: 'DC Voltage Operating Range', val: '1,050 V – 1,500 V DC' },
  { label: 'System Round-Trip Efficiency', val: '> 89.2% (AC-to-AC at 0.5C nominal)' },
  { label: 'Container Form Factor', val: 'Standard 20-ft High-Cube ISO Shipping Container' },
  { label: 'Thermal Cooling System', val: 'Active Liquid Chiller with Variable Inverter Pump' },
  { label: 'Temperature Non-Uniformity', val: '≤ ±2.5°C throughout all 5 MWh modules' },
  { label: 'Enclosure Protection & Coating', val: 'IP55 / C5-M Heavy Industrial Anti-Corrosion' },
  { label: 'Operating Ambient Range', val: '-30°C to +55°C without derating' },
  { label: 'Fire Safety Architecture', val: 'Multi-stage aerosol + NFPA 855 deflagration venting' },
  { label: 'Grid Ancillary Functions', val: 'Primary Frequency Response (PFR), Fast Frequency, AGC' },
  { label: 'Communication Protocols', val: 'IEC 61850, Modbus TCP, DNP3, SCADA RTU' },
  { label: 'Multi-Container Scalability', val: 'Unlimited scalability to 100+ MWh farm arrays' },
];

const utilityUseCases = [
  {
    title: 'Solar & Wind IPPs',
    desc: 'Mitigate renewable curtailment, time-shift solar peak generation to evening peak tariffs, and eliminate grid forecasting penalties.',
  },
  {
    title: 'DISCOM 33kV/66kV Substations',
    desc: 'Alleviate distribution transformer overload, stabilize feeder voltage, and avoid multi-crore transmission upgrades.',
  },
  {
    title: 'Commercial Heavy Parks (SEZs)',
    desc: 'Power high-demand manufacturing zones, cement mills, and steel rolling mills with megawatt-scale demand charge reduction.',
  },
  {
    title: 'Ancillary Services & Frequency Response',
    desc: 'Respond to grid frequency deviations in milliseconds, providing synthetic inertia and frequency regulation.',
  },
];

export default function StorEdge50Page() {
  return (
    <>
      <PageHero
        badge="Utility Flagship"
        title="StorEDGE 5.0: 5 MWh Containerised Utility BESS"
        subtitle="Ultra-high density 20ft containerized battery storage engineered for utility-scale solar farms, wind parks, and high-voltage substation integration."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'StorEDGE 5.0' },
        ]}
        actions={
          <>
            <a
              href="#inquiry"
              className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
            >
              Request Utility PPA / Capex Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact?type=brochure_50"
              className="btn btn-outline border-slate-700 text-white hover:bg-slate-900 rounded-xl gap-2"
            >
              <Download className="w-4 h-4" />
              Download Technical Datasheet
            </Link>
          </>
        }
      />

      {/* ─── High Density Engineering Spotlight ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                  Utility Grade Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                  5 MWh Packed into a Standard 20ft Footprint
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Land acquisition and civil foundations are significant cost factors in utility renewable
                  projects. StorEDGE 5.0 delivers an industry-leading volumetric energy density exceeding
                  145 Wh/L at the container level.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  By utilizing 314Ah high-capacity prismatic cells paired with back-to-back liquid-cooled
                  racks and a top-mounted intelligent chiller, StorEDGE 5.0 minimizes land footprint by
                  over 35% compared to legacy 3.3 MWh containers.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                    <Battery className="w-6 h-6 text-emerald-600 mb-1" />
                    <div className="text-2xl font-black text-slate-900 font-mono">5.016 MWh</div>
                    <div className="text-xs text-slate-500">20ft High-Cube Container</div>
                  </div>
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                    <Radio className="w-6 h-6 text-emerald-600 mb-1" />
                    <div className="text-2xl font-black text-slate-900 font-mono">IEC 61850</div>
                    <div className="text-xs text-slate-500">Utility SCADA Standard</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Comprehensive Safety Systems</h3>
                    <span className="badge badge-outline border-emerald-500 text-emerald-400 text-xs">
                      NFPA 855 / UL 9540A
                    </span>
                  </div>

                  <div className="space-y-3.5 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Deflagration Explosion Panels:</strong> Roof-mounted pressure relief vents prevent internal container overpressure.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Early Gas Sensor Matrix:</strong> Multi-gas detectors (CO, H₂, VOC) detect off-gassing before any thermal event.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Automated Module Isolation:</strong> Dual DC contactors disconnect affected racks in milliseconds to prevent cascading.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Substation Integration:</strong> Pre-engineered MV transformer skids up to 33 kV for direct grid connection.</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Applications Grid ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Utility Applications"
            title="Where StorEDGE 5.0 Deploys"
            description="Powering major solar farms, state utilities, and multi-megawatt industrial clusters across India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utilityUseCases.map((u) => (
              <HoverCard key={u.title}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{u.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{u.desc}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Utility Datasheet Table ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Parameters"
            title="StorEDGE 5.0 Technical Specifications"
            description="Verified under factory testing conditions at our Greater Noida Gigafactory."
          />

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
            <table className="table w-full">
              <tbody className="divide-y divide-slate-100 text-sm">
                {utilitySpecs.map((spec, idx) => (
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
              Utility Engineering Desk
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Request a Utility-Scale BESS Sizing
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Connect with our utility transmission engineers for single-line diagram (SLD) reviews, grid connection studies, and pricing.
            </p>
          </div>

          <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <ContactForm defaultSubject="StorEDGE 5.0 (5 MWh Utility) Inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}

