'use client';

import React from 'react';

export interface FormToggleProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  badge?: string;
  disabled?: boolean;
}

export default function FormToggle({
  label,
  name,
  checked,
  onChange,
  description,
  badge,
  disabled = false,
}: FormToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
      <div className="space-y-0.5">
        <div className="flex items-center gap-2">
          <label htmlFor={name} className="text-sm font-bold text-slate-800 cursor-pointer">
            {label}
          </label>
          {badge && (
            <span className="badge badge-sm badge-success text-[10px] font-semibold">
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-slate-500 leading-relaxed max-w-xl">{description}</p>
        )}
      </div>

      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="toggle toggle-success shrink-0 mt-0.5"
      />
    </div>
  );
}

