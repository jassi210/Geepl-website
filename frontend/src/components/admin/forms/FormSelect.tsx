'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  badge?: string;
  required?: boolean;
  placeholder?: string;
}

export default function FormSelect({
  label,
  name,
  options,
  error,
  helperText,
  badge,
  required,
  placeholder,
  className = '',
  disabled,
  ...props
}: FormSelectProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={name} className="block text-xs font-bold text-slate-700 tracking-wide">
          {label}
          {required && <span className="text-rose-500 ml-1 font-bold">*</span>}
        </label>
        {badge && (
          <span className="badge badge-sm badge-ghost text-[10px] font-semibold text-slate-500">
            {badge}
          </span>
        )}
      </div>

      <select
        id={name}
        name={name}
        disabled={disabled}
        className={`select select-bordered w-full text-sm bg-white text-slate-900 rounded-xl transition-all focus:border-emerald-600 focus:outline-emerald-600 ${
          error
            ? 'border-rose-400 focus:border-rose-500 focus:outline-rose-500 bg-rose-50/20'
            : 'border-slate-300 hover:border-slate-400'
        } ${disabled ? 'opacity-60 bg-slate-100 cursor-not-allowed' : ''} ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-1 text-[11px] text-slate-500 leading-normal">{helperText}</p>
      ) : null}
    </div>
  );
}

