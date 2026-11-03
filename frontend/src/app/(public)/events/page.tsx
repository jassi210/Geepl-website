import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Events & Expos | GoodEnough Energy',
  description:
    'Meet GoodEnough Energy at premier clean-tech conferences, renewable expos, and industrial energy summits across India and globally.',
};

const events = [
  {
    title: 'Renewable Energy India Expo (REI)',
    date: 'September 2026',
    location: 'India Expo Mart, Greater Noida',
    type: 'Keynote & Booth',
    desc: 'Demonstrating live StorEDGE 0.25 liquid-cooled systems and presenting our keynote on gigafactory automation.',
  },
  {
    title: 'India Energy Storage Week (IESW)',
    date: 'July 2026',
    location: 'New Delhi, India',
    type: 'Panel Discussion & Exhibition',
    desc: 'Participating in leadership discussions on domestic manufacturing incentives, cell localization, and grid storage.',
  },
  {
    title: 'CII National Energy Efficiency Summit',
    date: 'May 2026',
    location: 'Mumbai, Maharashtra',
    type: 'Technical Workshop',
    desc: 'Conducting technical masterclasses on replacing heavy industrial DG sets with intelligent BESS.',
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        badge="Industry Gatherings"
        title="Events, Expos & Technical Summits"
        subtitle="Connect with GoodEnough Energy engineers, leadership, and product specialists in person across major global clean-tech exhibitions."
        breadcrumbs={[
          { label: 'Insights' },
          { label: 'Events & Expos' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Upcoming & Past Events"
            title="Where to Meet Our Team"
            description="Book 1-on-1 consultations with our application engineers during these industry forums."
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {events.map((e) => (
              <HoverCard key={e.title}>
                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="space-y-2">
                    <span className="badge badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold text-xs">
                      {e.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{e.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{e.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        {e.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        {e.location}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact?type=event_meeting"
                    className="btn btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white rounded-xl gap-2 font-bold shrink-0 w-full sm:w-auto"
                  >
                    Schedule Meeting
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

