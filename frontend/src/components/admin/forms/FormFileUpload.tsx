'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, File, X, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export interface FormFileUploadProps {
  label: string;
  name: string;
  value?: string | null;
  onChange: (fileUrl: string | null) => void;
  accept?: string;
  maxSizeMb?: number;
  helperText?: string;
  badge?: string;
  required?: boolean;
}

export default function FormFileUpload({
  label,
  name,
  value,
  onChange,
  accept = 'image/*,application/pdf',
  maxSizeMb = 10,
  helperText = 'PNG, JPG, SVG or PDF up to 10MB',
  badge,
  required,
}: FormFileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.size > maxSizeMb * 1024 * 1024) {
      alert(`File size exceeds maximum limit of ${maxSizeMb}MB`);
      return;
    }
    setFileName(file.name);
    // In a real backend upload, we would POST to /api/upload. Here we mock object URL or handle string
    const mockUrl = URL.createObjectURL(file);
    onChange(mockUrl);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    setFileName(null);
    onChange(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <label className="block text-xs font-bold text-slate-700 tracking-wide">
          {label}
          {required && <span className="text-rose-500 ml-1 font-bold">*</span>}
        </label>
        {badge && (
          <span className="badge badge-sm badge-ghost text-[10px] font-semibold text-slate-500">
            {badge}
          </span>
        )}
      </div>

      {value || fileName ? (
        <div className="flex items-center justify-between p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <File className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 truncate max-w-xs">
                {fileName || 'Uploaded Asset'}
              </p>
              <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Ready to save
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="btn btn-sm btn-circle btn-ghost text-slate-400 hover:text-rose-600 hover:bg-rose-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? 'border-emerald-500 bg-emerald-50/50'
              : 'border-slate-300 hover:border-emerald-500 hover:bg-slate-50/50 bg-white'
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            id={name}
            name={name}
            accept={accept}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
            className="hidden"
          />
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto mb-2">
            <UploadCloud className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-xs font-semibold text-slate-700">
            <span className="text-emerald-700 hover:underline">Click to upload</span> or drag and drop
          </p>
          <p className="text-[11px] text-slate-400 mt-1">{helperText}</p>
        </div>
      )}
    </div>
  );
}

