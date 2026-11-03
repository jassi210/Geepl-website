import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  BookOpen,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'BESS Industry Insights & Articles | GoodEnough Energy',
  description:
    'Expert articles, policy updates, and technical guides on Battery Energy Storage Systems (BESS), diesel generator replacement regulations, and renewable storage economics in India.',
  openGraph: {
    title: 'BESS Articles & Industry Insights | GoodEnough Energy',
    description: 'Latest analysis on India’s clean energy transition and BESS technology.',
  },
};

const articles = [
  {
    title: 'CAQM DG Bans in Delhi-NCR: Why BESS is the Only Permanent Industrial Compliance Solution',
    category: 'Regulatory & Policy',
    readTime: '6 min read',
    date: 'February 24, 2026',
    excerpt: 'With the Commission for Air Quality Management (CAQM) enforcing stringent bans on diesel generator sets across Delhi-NCR, industrial units are switching to BESS for cleaner, compliant, and cost-effective backup.',
  },
  {
    title: 'The Thermodynamics of Liquid Cooling: Why Indian Summers Demand More Than Just Fans',
    category: 'Engineering & Tech',
    readTime: '8 min read',
    date: 'February 12, 2026',
    excerpt: 'Ambient temperatures surpassing 45°C cause traditional air-cooled battery systems to throttle or suffer premature capacity degradation. Here is how active glycol liquid loops double asset lifespan.',
  },
  {
    title: 'Understanding TOD Tariffs: How C&I Facilities Arbitrage Off-Peak Night Units',
    category: 'Financial Economics',
    readTime: '5 min read',
    date: 'January 28, 2026',
    excerpt: 'Learn how state DISCOM time-of-day tariffs create a substantial profit spread between ₹5.50 night rates and ₹12.00 evening peaks — and how automated EMS dispatch captures this daily.',
  },
  {
    title: 'Grid-Forming vs Grid-Following: The Inverter Architecture That Enables Real Islanding',
    category: 'Power Electronics',
    readTime: '7 min read',
    date: 'January 15, 2026',
    excerpt: 'Why standard solar inverters shut down during grid outages, and how virtual synchronous generator (VSG) control loops establish independent voltage and frequency in sub-20ms.',
  },
];

export default function BlogsPage() {
  return (
    <>
      <PageHero
        badge="Knowledge Center"
        title="Articles, Analysis & Market Intelligence"
        subtitle="Insights on energy storage policy, battery safety benchmarks, electrochemical design, and diesel displacement economics authored by GoodEnough Energy specialists."
        breadcrumbs={[
          { label: 'Insights' },
          { label: 'Articles & Blogs' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Latest Insights"
            title="Industry Trends & Technical Perspectives"
            description="Stay ahead of regulatory mandates, technology evolutions, and operational best practices in BESS."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <HoverCard key={art.title}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 h-full flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold text-xs">
                        {art.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{art.excerpt}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <Link
                      href="/contact?type=article_consultation"
                      className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1"
                    >
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
