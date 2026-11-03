import type { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, ExternalLink, Download, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Media Room & Press Releases | GoodEnough Energy',
  description:
    'Official press releases, media coverage, and brand assets from GoodEnough Energy’s BESS Gigafactory in Greater Noida.',
};

const pressReleases = [
  {
    source: 'Economic Times',
    title: 'GoodEnough Energy commences operations at its mega BESS Gigafactory in Greater Noida',
    date: 'February 2026',
    desc: 'India’s clean-tech pioneer flags off domestic BESS production aiming to cut reliance on diesel generators and support 500 GW renewable targets.',
  },
  {
    source: 'PV Magazine India',
    title: 'GoodEnough Energy unveils StorEDGE 5.0 containerised BESS for utility-scale solar farms',
    date: 'January 2026',
    desc: 'The 20ft containerized 5 MWh platform combines liquid cooling with sub-second response times for utility and grid substations.',
  },
  {
    source: 'Energetica India',
    title: 'How GoodEnough Energy is solving the thermal challenge in Indian extreme climates',
    date: 'December 2025',
    desc: 'An interview with founder Akash Kaushik on why liquid cooling is indispensable for long-lasting energy storage in India.',
  },
];

export default function MediaRoomPage() {
  return (
    <>
      <PageHero
        badge="Press & News"
        title="GoodEnough Energy Media Room"
        subtitle="Latest official press announcements, media features, coverage, and downloadable brand press kit."
        breadcrumbs={[
          { label: 'Insights' },
          { label: 'Media Room' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Press Coverage"
            title="GoodEnough Energy in the News"
            description="Recent media coverage and press announcements regarding our gigafactory developments."
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {pressReleases.map((pr) => (
              <HoverCard key={pr.title}>
                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {pr.source}
                    </span>
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{pr.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{pr.desc}</p>
                  <Link
                    href="/contact?type=media_inquiry"
                    className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1.5"
                  >
                    Contact Media Relations <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </HoverCard>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-slate-950 text-white p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 border border-slate-800">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Journalist & Press Inquiries</h4>
              <p className="text-xs text-slate-400">
                For high-resolution factory imagery, spokesperson interviews, or media kits.
              </p>
            </div>
            <a
              href="mailto:connect@goodenough.energy?subject=Media%20Kit%20Request"
              className="btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none rounded-xl gap-2 px-6 shrink-0"
            >
              <Download className="w-4 h-4" />
              Download Media Kit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

