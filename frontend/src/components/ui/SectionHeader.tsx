import React from 'react';
import { FadeIn } from './MotionComponents';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className = '',
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <FadeIn direction="down">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
              light
                ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/25'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}
          >
            {badge}
          </span>
        </FadeIn>
      )}

      <FadeIn direction="up">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-slate-900'
          }`}
        >
          {title}
        </h2>
      </FadeIn>

      {description && (
        <FadeIn direction="up" delay={0.1}>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              light ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

