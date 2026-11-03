'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { HoverCard } from './MotionComponents';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  className = '',
}: FeatureCardProps) {
  return (
    <HoverCard className="h-full">
      <div
        className={`h-full bg-white p-7 rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between ${className}`}
      >
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6" />
            </div>
            {badge && (
              <span className="badge badge-sm badge-outline border-emerald-500 text-emerald-700 font-semibold">
                {badge}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </HoverCard>
  );
}

