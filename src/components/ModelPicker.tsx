'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModelId } from '@/types';
import { MODEL_LIST } from '@/lib/models';

interface Props {
  selected: ModelId;
  onChange: (id: ModelId) => void;
}

export default function ModelPicker({ selected, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = MODEL_LIST.find(m => m.id === selected)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#333] hover:border-[#555] transition-colors text-sm text-white"
      >
        <span className="truncate max-w-[140px]">{current.name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 left-0 bg-[#1A1A1A] border border-[#333] rounded-xl shadow-2xl overflow-hidden min-w-[220px] z-50"
          >
            {MODEL_LIST.map(m => (
              <button
                key={m.id}
                onClick={() => { onChange(m.id); setOpen(false); }}
                className={`w-full text-left px-4 py-3 transition-colors flex flex-col ${
                  m.id === selected ? 'bg-[#2A2A2A]' : 'hover:bg-[#222]'
                }`}
              >
                <span className="text-sm text-white font-medium">{m.name}</span>
                <span className="text-xs text-[#888] mt-0.5">{m.description}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
