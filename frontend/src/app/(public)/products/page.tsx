import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Zap, Battery, Cpu, Layers } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import { FadeIn } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'StorEDGE BESS Products | Commercial & Utility Storage | GoodEnough Energy',
  description:
    'Explore the GoodEnough StorEDGE portfolio: StorEDGE 0.25 (250 kWh C&I system) and StorEDGE 5.0 (5 MWh containerised utility solution). Manufactured at our Greater Noida Gigafactory.',
  openGraph: {
    title: 'StorEDGE BESS Platforms | GoodEnough Energy',
    description: 'Advanced liquid-cooled battery energy storage systems engineered in India.',
  },
};

const comparisonSpecs = [
  { spec: 'Nominal Energy Capacity', cAndI: '250 kWh', utility: '5.016 MWh (20ft ISO)' },
  { spec: 'Battery Chemistry', cAndI: 'Prismatic LFP (LiFePO₄)', utility: 'Prismatic LFP (LiFePO₄)' },
  { spec: 'Thermal Management', cAndI: 'Active Liquid Cooling (±2°C)', utility: 'Variable-Speed Liquid Chiller' },
  { spec: 'DC Bus Voltage Range', cAndI: '614 V – 780 V DC', utility: '1000 V – 1500 V DC' },
  { spec: 'Round-Trip Efficiency (RTE)', cAndI: '> 88% (at 0.5C AC-AC)', utility: '> 89% (at 0.5C AC-AC)' },
  { spec: 'Enclosure Rating', cAndI: 'IP55 Outdoor Weatherproof', utility: 'IP55 / C5-M Anti-Corrosion' },
  { spec: 'Fire Suppression', cAndI: 'Aerosol + Early Gas Detection', utility: 'NFPA 855 / Aerosol + Water Deluge' },
  { spec: 'Communications', cAndI: 'Modbus TCP / RTU, 4G / LAN', utility: 'IEC 61850, Modbus TCP, DNP3' },
  { spec: 'Target Use Cases', cAndI: 'Factories, Hospitals, IT Parks, Malls', utility: 'Solar IPP, Wind, Substation, Peak Shaving' },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="StorEDGE Platforms"
        title="Scalable Battery Energy Storage for Every Voltage & Scale"
        subtitle="Designed and manufactured at our 7 GWh gigafactory in Greater Noida, StorEDGE integrates high-density LFP cells, active liquid thermal cooling, and intelligent multi-tier BMS."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* ─── Product Cards Grid ────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Product Lineup"
            title="Two Proven Platforms. Infinite Applications."
            description="Whether you need compact plug-and-play outdoor cabinets for your commercial building or containerised utility blocks for grid-scale solar farms."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
            <ProductCard
              name="StorEDGE 0.25"
              capacity="250 kWh"
              segment="Commercial & Industrial (C&I)"
              badge="C&I Best Seller"
              isPopular
              description="Compact, skid-mounted outdoor BESS engineered for uninterrupted backup, peak shaving, and seamless rooftop solar integration at commercial and industrial facilities."
              specs={[
                'Liquid thermal cooling keeps cells balanced within ±2°C',
                'Seamless sub-20ms transfer (< 1 cycle black-start)',
                'Modular scalability up to 2 MWh via parallel clustering',
                'IP55 outdoor weatherproof enclosure with low acoustic footprint',
                'Integrated EMS with automated TOD tariff time-of-day shifting',
              ]}
              href="/products/storedge-0-25"
            />

            <ProductCard
              name="StorEDGE 5.0"
              capacity="5 MWh"
              segment="Utility & High-Voltage Grid"
              badge="Utility Flagship"
              description="Standard 20-foot high-cube containerised BESS designed for large-scale renewable generation farms, 33kV/66kV grid substations, and energy arbitrage."
              specs={[
                '5 MWh ultra-high volumetric energy density in 20ft container',
                '1500V DC bus architecture maximizing power conversion efficiency',
                'IEC 61850 and SCADA compliant telemetry for DISCOM integration',
                'Multi-tier fire safety: deflagration venting, gas sensors, aerosol',
                'Multi-megawatt farm scaling up to hundreds of megawatt-hours',
              ]}
              href="/products/storedge-5-0"
            />
          </div>
        </div>
      </section>

      {/* ─── Detailed Technical Comparison Matrix ─────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Specifications"
            title="Side-by-Side Platform Comparison"
            description="Detailed technical breakdown across electrical, thermal, environmental, and communications architecture."
          />

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-xl">
            <table className="table w-full">
              <thead>
                <tr className="bg-slate-900 text-white text-sm">
                  <th className="py-5 px-6 font-bold w-1/3">Technical Specification</th>
                  <th className="py-5 px-6 font-bold w-1/3 text-emerald-300">
                    StorEDGE 0.25 (C&I)
                  </th>
                  <th className="py-5 px-6 font-bold w-1/3 text-teal-300">
                    StorEDGE 5.0 (Utility)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonSpecs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">{row.spec}</td>
                    <td className="py-4 px-6 text-slate-700 font-medium">{row.cAndI}</td>
                    <td className="py-4 px-6 text-slate-700 font-medium">{row.utility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact?type=product_datasheet"
              className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2 px-8"
            >
              Request Engineering Datasheets & CAD Layouts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

