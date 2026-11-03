'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  error?: string;
  helperText?: string;
  badge?: string;
  required?: boolean;
  maxLength?: number;
}

export default function FormTextarea({
  label,
  name,
  error,
  helperText,
  badge,
  required,
  maxLength,
  value,
  className = '',
  rows = 4,
  disabled,
  ...props
}: FormTextareaProps) {
  const currentLength = typeof value === 'string' ? value.length : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={name} className="block text-xs font-bold text-slate-700 tracking-wide">
          {label}
          {required && <span className="text-rose-500 ml-1 font-bold">*</span>}
        </label>
        <div className="flex items-center gap-2">
          {maxLength && (
            <span
              className={`text-[10px] font-mono ${
                currentLength >= maxLength ? 'text-rose-500 font-bold' : 'text-slate-400'
              }`}
            >
              {currentLength}/{maxLength}
            </span>
          )}
          {badge && (
            <span className="badge badge-sm badge-ghost text-[10px] font-semibold text-slate-500">
              {badge}
            </span>
          )}
        </div>
      </div>

      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
        className={`textarea textarea-bordered w-full text-sm bg-white text-slate-900 rounded-xl transition-all placeholder:text-slate-400 focus:border-emerald-600 focus:outline-emerald-600 ${
          error
            ? 'border-rose-400 focus:border-rose-500 focus:outline-rose-500 bg-rose-50/20'
            : 'border-slate-300 hover:border-slate-400'
        } ${disabled ? 'opacity-60 bg-slate-100 cursor-not-allowed' : ''} ${className}`}
        {...props}
      />

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

