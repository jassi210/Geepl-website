import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FadeIn } from './MotionComponents';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-slate-950 overflow-hidden py-16 sm:py-24 text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.18)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(13,148,136,0.1)_0%,_transparent_50%)]" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-emerald-400 font-semibold">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                {badge}
              </span>
            </FadeIn>
          )}

          <FadeIn direction="up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
              {title}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {subtitle}
            </p>
          </FadeIn>

          {actions && (
            <FadeIn direction="up" delay={0.2} className="flex flex-wrap gap-4">
              {actions}
            </FadeIn>
          )}
        </div>

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

