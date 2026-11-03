import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, ArrowRight, ShieldCheck, Award, GraduationCap } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Our Leadership Team | GoodEnough Energy',
  description:
    'Meet the visionary leadership and battery engineering pioneers driving GoodEnough Energy’s mission to decarbonise India with advanced BESS technology.',
  openGraph: {
    title: 'Our Leadership Team | GoodEnough Energy',
    description: 'Founders, Directors, and Technical Visionaries at GoodEnough Energy.',
  },
};

const leaders = [
  {
    name: 'Akash Kaushik',
    role: 'Founder & Managing Director',
    expertise: 'Aerospace Engineering & Electrochemical Systems',
    bio: 'An aerospace engineer with deep specialization in lithium-ion battery integration, thermal dissipation, and cell degradation modeling. Akash oversees technology architecture, gigafactory robotics, and long-term product roadmaps at GoodEnough Energy.',
    tags: ['Battery Architecture', 'Gigafactory Operations', 'Liquid Thermal Engineering'],
    initials: 'AK',
  },
  {
    name: 'Deepak Agarwal',
    role: 'Co-Founder & Director',
    expertise: 'Industrial Scaling & Supply Chain Strategy',
    bio: 'A veteran industrial leader with over two decades of experience establishing heavy manufacturing enterprises in India. Deepak spearheads infrastructure expansion, global cell supply chain partnerships, and corporate governance.',
    tags: ['Industrial Infrastructure', 'Strategic Partnerships', 'Manufacturing Scale'],
    initials: 'DA',
  },
  {
    name: 'Gaurav Aggarwal',
    role: 'Director & Financial Officer',
    expertise: 'Renewable Capital Allocation & Project Financing',
    bio: 'Chartered Accountant with extensive expertise in structuring large-scale renewable energy Capex and utility PPAs. Gaurav leads project financing, financial modeling for C&I clients, and investor relations.',
    tags: ['Project Financing', 'Capex Optimization', 'Investor Relations'],
    initials: 'GA',
  },
];

const technicalLeads = [
  {
    name: 'Dr. V. Ramanathan',
    role: 'Chief Technology Officer (CTO)',
    dept: 'BMS Firmware & Power Electronics',
    experience: 'Ex-Tier 1 Automotive EV & Grid Inverter Lead. 18+ yrs experience.',
  },
  {
    name: 'Priyanka Sen',
    role: 'Head of Thermal & Fluid Dynamics',
    dept: 'Liquid Cooling Architecture',
    experience: 'Specialized in micro-channel cold plate designs and high-ambient CFD simulation.',
  },
  {
    name: 'Sunil Mehra',
    role: 'VP of Manufacturing & Quality',
    dept: 'Greater Noida Gigafactory',
    experience: 'Oversees automated cell laser welding, helium leak tests, and ISO/IEC 62619 compliance.',
  },
  {
    name: 'Arjun Nambiar',
    role: 'Head of EMS & Microgrid Solutions',
    dept: 'SCADA, IoT & Grid Formers',
    experience: 'Leads AI dispatch algorithms, sub-cycle islanding transition, and state DISCOM interconnects.',
  },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        badge="GoodEnough Leadership"
        title="Pioneering Minds Behind India's Energy Transition"
        subtitle="Our leadership team pairs deep aerospace and electrochemical engineering expertise with decades of industrial manufacturing leadership and renewable project financing."
        breadcrumbs={[{ label: 'Our Team' }]}
      />

      {/* ─── Executive Board ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Board of Directors"
            title="Executive Leadership"
            description="Guiding GoodEnough Energy's gigafactory expansion, technological innovation, and pan-India presence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <HoverCard key={leader.name}>
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 h-full flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all">
                  <div>
                    {/* Avatar Initials & Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-xl shadow-md shadow-emerald-500/20">
                        {leader.initials}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                        <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                          {leader.role}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mb-3">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                      {leader.expertise}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{leader.bio}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-1.5">
                      {leader.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-sm bg-white border-slate-200 text-slate-600 text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Engineering & Technical Directors ─────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical Excellence"
            title="Engineering & Operations Leadership"
            description="Our multidisciplinary technical leadership drives excellence across BMS firmware, liquid cooling CFD, and automated robotic manufacturing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalLeads.map((t) => (
              <HoverCard key={t.name}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                  <div>
                    <span className="badge badge-outline border-emerald-500 text-emerald-700 text-xs font-bold mb-3">
                      {t.dept}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{t.name}</h3>
                    <div className="text-xs font-semibold text-slate-500 mb-3">{t.role}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{t.experience}</p>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Join the Team Banner ──────────────────────────────────────────── */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-extrabold mb-4">Want to Work with Our Engineering Team?</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              We are actively hiring battery system engineers, power electronics designers, and BMS architects at our Greater Noida Gigafactory.
            </p>
            <Link
              href="/career"
              className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2 px-8"
            >
              Explore Open Careers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
