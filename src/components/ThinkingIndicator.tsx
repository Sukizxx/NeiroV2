'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  thinking: string;
  isActive: boolean;
}

const LABELS = ['Thinking', 'Reasoning', 'Analyzing', 'Planning'];

export default function ThinkingIndicator({ thinking, isActive }: Props) {
  const [labelIdx, setLabelIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setLabelIdx(i => (i + 1) % LABELS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isActive]);

  if (!thinking && !isActive) return null;

  return (
    <div className="mb-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm text-[#888] hover:text-[#bbb] transition-colors"
      >
        {isActive && (
          <motion.div
            className="w-2 h-2 rounded-full bg-white/40"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        )}
        <AnimatePresence mode="wait">
          <motion.span
            key={isActive ? LABELS[labelIdx] : 'done'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="font-medium"
          >
            {isActive ? `${LABELS[labelIdx]}...` : 'Thought process'}
          </motion.span>
        </AnimatePresence>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {expanded && thinking && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-2 p-3 rounded-lg bg-[#0D0D0D] border border-[#1A1A1A] text-xs text-[#888] font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
              {thinking}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
