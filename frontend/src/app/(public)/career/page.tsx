import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  GraduationCap,
  Zap,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Careers at GoodEnough Energy | Join India’s BESS Gigafactory',
  description:
    'Join GoodEnough Energy’s engineering revolution in Greater Noida. Explore open careers in battery architecture, BMS firmware, liquid cooling CFD, and power electronics.',
  openGraph: {
    title: 'Careers at GoodEnough Energy | BESS Engineering Jobs',
    description: 'Build the future of energy storage at India’s premier BESS gigafactory.',
  },
};

const jobs = [
  {
    title: 'Battery Systems Integration Engineer',
    dept: 'Engineering & R&D',
    location: 'Greater Noida Gigafactory',
    type: 'Full-Time',
    experience: '3–6 Years',
    desc: 'Lead the mechanical and electrical packaging of high-density LFP prismatic battery modules, busbar bonding, and high-voltage DC protection.',
  },
  {
    title: 'Senior BMS Firmware Architect',
    dept: 'Software & Embedded',
    location: 'Greater Noida / Hybrid',
    type: 'Full-Time',
    experience: '5–8 Years',
    desc: 'Design and deploy real-time State of Charge (SOC), State of Health (SOH), and thermal runaway prognostic algorithms compliant with ISO 26262 / IEC 61508.',
  },
  {
    title: 'Thermal & Fluid CFD Specialist',
    dept: 'Thermal Engineering',
    location: 'Greater Noida Gigafactory',
    type: 'Full-Time',
    experience: '4–7 Years',
    desc: 'Simulate and optimize micro-channel cold plate designs, liquid glycol flow distribution, and extreme high-ambient (+55°C) heat dissipation.',
  },
  {
    title: 'BESS Solutions & Pre-Sales Architect',
    dept: 'Commercial & Strategy',
    location: 'Delhi-NCR / Pan-India',
    type: 'Full-Time',
    experience: '4–8 Years',
    desc: 'Work directly with C&I facility heads and renewable developers to perform load-profile simulations, SLD reviews, and diesel displacement financial modeling.',
  },
  {
    title: 'Automated Robotics & Welding Engineer',
    dept: 'Manufacturing Operations',
    location: 'Greater Noida Gigafactory',
    type: 'Full-Time',
    experience: '3–5 Years',
    desc: 'Operate and optimize high-speed 6-axis robotic arms for cell pick-and-place, laser busbar welding, and in-line helium leak detection.',
  },
];

const perks = [
  {
    icon: Zap,
    title: 'High-Impact Clean-Tech Mission',
    desc: 'Your daily engineering directly displaces toxic diesel generators and accelerates India’s transition to 100% renewable energy.',
  },
  {
    icon: Sparkles,
    title: 'World-Class Gigafactory Labs',
    desc: 'Direct hands-on access to automated robotic assembly lines, high-precision cyclers, and multi-megawatt testing chambers.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Technical Growth',
    desc: 'Work alongside leading aerospace engineers, electrochemical researchers, and battery veterans with sponsorship for conferences.',
  },
  {
    icon: HeartHandshake,
    title: 'Competitive Rewards & Equity',
    desc: 'Industry-leading compensation packages, health insurance for family, and Employee Stock Ownership (ESOP) opportunities.',
  },
];

export default function CareerPage() {
  return (
    <>
      <PageHero
        badge="Join Our Mission"
        title="Shape the Future of Energy Storage in India"
        subtitle="We are assembling India’s finest electrochemical, power electronics, and manufacturing minds at our 7 GWh Greater Noida Gigafactory. Help us build the hardware that powers tomorrow."
        breadcrumbs={[{ label: 'Careers' }]}
        actions={
          <a
            href="#openings"
            className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2"
          >
            Explore Open Positions
            <ArrowRight className="w-4 h-4" />
          </a>
        }
      />

      {/* ─── Why Join Us ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Culture & Values"
            title="Why Build Your Career at GoodEnough Energy"
            description="We foster an uncompromising engineering culture where innovation is rewarded, ownership is celebrated, and solutions are deployed at massive scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
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

      {/* ─── Open Roles List ───────────────────────────────────────────────── */}
      <section id="openings" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Active Openings"
            title="Current Opportunities at Greater Noida Gigafactory"
            description="Explore our open positions and send your profile directly to our talent acquisition team."
          />

          <div className="space-y-6">
            {jobs.map((job) => (
              <HoverCard key={job.title}>
                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="badge badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold text-xs">
                        {job.dept}
                      </span>
                      <span className="badge badge-outline border-slate-300 text-slate-600 text-xs">
                        {job.type}
                      </span>
                      <span className="badge badge-outline border-slate-300 text-slate-600 text-xs">
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900">{job.title}</h3>

                    <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">{job.desc}</p>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`mailto:careers@goodenough.energy?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                    className="btn btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white rounded-xl gap-2 font-bold shrink-0 w-full sm:w-auto"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </HoverCard>
            ))}
          </div>

          <div className="mt-12 bg-slate-950 text-white p-8 rounded-3xl text-center border border-slate-800">
            <h4 className="text-xl font-bold mb-2">Don&apos;t see the exact role you are looking for?</h4>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
              We are constantly seeking outstanding battery researchers, power systems specialists, and production supervisors. Send your resume for future opportunities.
            </p>
            <a
              href="mailto:careers@goodenough.energy?subject=General%20Engineering%20Application"
              className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl px-8"
            >
              Send Open Resume to careers@goodenough.energy
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

