'use client';

import React, { useState } from 'react';
import { X, Plus, AlertCircle } from 'lucide-react';

export interface FormTagsInputProps {
  label: string;
  name: string;
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  helperText?: string;
  badge?: string;
  required?: boolean;
  maxTags?: number;
}

export default function FormTagsInput({
  label,
  name,
  tags,
  onChange,
  placeholder = 'Type and press Enter to add...',
  helperText,
  badge,
  required,
  maxTags,
}: FormTagsInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmed = inputValue.trim().replace(/^,+|,+$/g, '');
    if (!trimmed) return;
    if (tags.includes(trimmed)) {
      setInputValue('');
      return;
    }
    if (maxTags && tags.length >= maxTags) return;
    onChange([...tags, trimmed]);
    setInputValue('');
  };

  const removeTag = (indexToRemove: number) => {
    onChange(tags.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <label className="block text-xs font-bold text-slate-700 tracking-wide">
          {label}
          {required && <span className="text-rose-500 ml-1 font-bold">*</span>}
        </label>
        <div className="flex items-center gap-2">
          {maxTags && (
            <span className="text-[10px] font-mono text-slate-400">
              {tags.length}/{maxTags}
            </span>
          )}
          {badge && (
            <span className="badge badge-sm badge-ghost text-[10px] font-semibold text-slate-500">
              {badge}
            </span>
          )}
        </div>
      </div>

      <div className="p-2.5 bg-white border border-slate-300 rounded-xl focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 transition-all min-h-[50px] flex flex-wrap items-center gap-1.5">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(idx)}
              className="text-emerald-600 hover:text-emerald-900 focus:outline-none"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}

        {(!maxTags || tags.length < maxTags) && (
          <div className="flex items-center gap-1 flex-1 min-w-[160px]">
            <input
              type="text"
              id={name}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={tags.length === 0 ? placeholder : 'Add more...'}
              className="w-full text-xs text-slate-900 bg-transparent border-none outline-none focus:ring-0 p-1 placeholder:text-slate-400"
            />
            {inputValue.trim() && (
              <button
                type="button"
                onClick={addTag}
                className="btn btn-xs btn-circle btn-ghost text-emerald-600 hover:bg-emerald-50"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {helperText && (
        <p className="mt-1 text-[11px] text-slate-500 leading-normal">{helperText}</p>
      )}
    </div>
  );
}

