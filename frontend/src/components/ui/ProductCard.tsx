'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Battery, Zap, Shield, Sparkles } from 'lucide-react';
import { HoverCard } from './MotionComponents';

interface ProductCardProps {
  name: string;
  capacity: string;
  segment: string;
  badge: string;
  description: string;
  specs: string[];
  href: string;
  isPopular?: boolean;
}

export default function ProductCard({
  name,
  capacity,
  segment,
  badge,
  description,
  specs,
  href,
  isPopular = false,
}: ProductCardProps) {
  return (
    <HoverCard className="h-full">
      <div
        className={`card h-full bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
          isPopular
            ? 'border-emerald-500 shadow-xl shadow-emerald-950/10 ring-2 ring-emerald-500/20'
            : 'border-slate-200 shadow-md hover:border-slate-300'
        }`}
      >
        <div>
          {/* Card Header with dark gradient */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-7 sm:p-8 text-white relative">
            <div className="flex items-center justify-between mb-4">
              <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold border-none text-xs px-3 py-2.5">
                {badge}
              </span>
              {isPopular && (
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" /> High Demand
                </span>
              )}
            </div>

            <h3 className="text-2xl font-black tracking-tight">{name}</h3>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-extrabold text-emerald-400 font-mono">
                {capacity}
              </span>
              <span className="text-xs text-slate-400 font-medium">Usable Storage</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              {segment}
            </p>
          </div>

          {/* Card Body */}
          <div className="p-7 sm:p-8">
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2.5">
                {specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-7 sm:p-8 pt-0">
          <Link
            href={href}
            className={`btn w-full rounded-xl gap-2 font-bold transition-all shadow-md ${
              isPopular
                ? 'btn-primary bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-emerald-700/20'
                : 'btn-outline border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900'
            }`}
          >
            Explore Specifications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </HoverCard>
  );
}

