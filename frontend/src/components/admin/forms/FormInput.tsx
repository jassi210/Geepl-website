'use client';

import React from 'react';
import { LucideIcon, AlertCircle } from 'lucide-react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: LucideIcon;
  error?: string;
  helperText?: string;
  badge?: string;
  required?: boolean;
  prefixText?: string;
  suffixText?: string;
}

export default function FormInput({
  label,
  name,
  icon: Icon,
  error,
  helperText,
  badge,
  required,
  prefixText,
  suffixText,
  className = '',
  disabled,
  ...props
}: FormInputProps) {
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

      <div className="relative rounded-xl shadow-xs">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Icon className="w-4 h-4" />
          </div>
        )}

        {prefixText && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm font-semibold">
            {prefixText}
          </div>
        )}

        <input
          id={name}
          name={name}
          disabled={disabled}
          className={`input input-bordered w-full text-sm bg-white text-slate-900 rounded-xl transition-all placeholder:text-slate-400 focus:border-emerald-600 focus:outline-emerald-600 ${
            Icon ? 'pl-10' : prefixText ? 'pl-9' : 'pl-3.5'
          } ${suffixText ? 'pr-12' : 'pr-3.5'} ${
            error
              ? 'border-rose-400 focus:border-rose-500 focus:outline-rose-500 bg-rose-50/20'
              : 'border-slate-300 hover:border-slate-400'
          } ${disabled ? 'opacity-60 bg-slate-100 cursor-not-allowed' : ''} ${className}`}
          {...props}
        />

        {suffixText && (
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs font-semibold">
            {suffixText}
          </div>
        )}
      </div>

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

