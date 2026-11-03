'use client';

import React from 'react';
import Link from 'next/link';
import { Save, X, Trash2, ArrowLeft } from 'lucide-react';

export interface FormActionsProps {
  isSubmitting?: boolean;
  submitLabel?: string;
  cancelHref?: string;
  onCancel?: () => void;
  onDelete?: () => void;
  deleteLabel?: string;
  isDirty?: boolean;
}

export default function FormActions({
  isSubmitting = false,
  submitLabel = 'Save Changes',
  cancelHref,
  onCancel,
  onDelete,
  deleteLabel = 'Delete Record',
}: FormActionsProps) {
  return (
    <div className="sticky bottom-0 z-20 -mx-4 sm:-mx-8 -mb-8 px-4 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-lg shadow-slate-900/5">
      <div>
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-sm btn-ghost text-rose-600 hover:bg-rose-50 hover:text-rose-700 gap-1.5 font-bold"
          >
            <Trash2 className="w-4 h-4" />
            {deleteLabel}
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {cancelHref ? (
          <Link
            href={cancelHref}
            className="btn btn-sm btn-ghost text-slate-600 hover:text-slate-900 font-semibold rounded-xl"
          >
            Cancel
          </Link>
        ) : onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-sm btn-ghost text-slate-600 hover:text-slate-900 font-semibold rounded-xl"
          >
            Cancel
          </button>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-none rounded-xl gap-2 shadow-md shadow-emerald-700/20 px-5"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-xs"></span>
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              {submitLabel}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

