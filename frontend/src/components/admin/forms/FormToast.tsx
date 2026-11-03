'use client';

import React from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, X } from 'lucide-react';

export interface FormToastProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  onClose?: () => void;
}

export default function FormToast({ type, message, onClose }: FormToastProps) {
  const styles = {
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    error: 'bg-rose-50 text-rose-800 border-rose-200',
    warning: 'bg-amber-50 text-amber-800 border-amber-200',
  };

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    warning: AlertTriangle,
  };

  const Icon = icons[type];

  return (
    <div
      className={`p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold transition-all shadow-xs ${styles[type]}`}
    >
      <div className="flex items-center gap-2.5">
        <Icon className="w-5 h-5 shrink-0" />
        <span>{message}</span>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="p-1 hover:bg-black/5 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

