'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  code: string;
  language: string;
  filename?: string;
}

export default function CodeEmbed({ code, language, filename }: Props) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const isHtml = language.toLowerCase() === 'html';

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="my-3 rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#0D0D0D]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141414] border-b border-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          </div>
          <span className="text-xs text-[#888] font-mono ml-2">{filename || language}</span>
        </div>
        <div className="flex items-center gap-2">
          {isHtml && (
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                showPreview ? 'bg-white/10 text-white' : 'text-[#888] hover:text-white hover:bg-white/5'
              }`}
            >
              {showPreview ? 'Code' : 'Preview'}
            </button>
          )}
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 rounded-md text-xs text-[#888] hover:text-white hover:bg-white/5 transition-colors font-medium"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Body */}
      <AnimatePresence mode="wait">
        {showPreview && isHtml ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white"
          >
            <iframe
              srcDoc={code}
              sandbox="allow-scripts"
              className="w-full border-0"
              style={{ minHeight: '300px', height: '400px' }}
              title="HTML Preview"
            />
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overflow-x-auto p-4"
          >
            <pre className="text-sm font-mono text-[#BFBFBF] whitespace-pre leading-relaxed">
              <code>{code}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
