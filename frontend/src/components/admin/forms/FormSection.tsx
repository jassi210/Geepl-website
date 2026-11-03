import React from 'react';

export interface FormSectionProps {
  title: string;
  description?: string;
  badge?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export default function FormSection({
  title,
  description,
  badge,
  children,
  actions,
  className = '',
}: FormSectionProps) {
  return (
    <div
      className={`bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden ${className}`}
    >
      <div className="p-6 sm:p-7 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              {title}
            </h3>
            {badge && (
              <span className="badge badge-sm badge-success bg-emerald-50 text-emerald-800 border-emerald-200 font-bold text-xs">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
      </div>

      <div className="p-6 sm:p-7 space-y-6">{children}</div>
    </div>
  );
}

