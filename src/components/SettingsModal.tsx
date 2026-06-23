'use client';
import { motion } from 'framer-motion';
import { AppSettings, ModelId } from '@/types';
import { MODEL_LIST } from '@/lib/models';

interface Props {
  settings: AppSettings;
  onChange: (s: AppSettings) => void;
  onClose: () => void;
  onClearHistory: () => void;
}

export default function SettingsModal({ settings, onChange, onClose, onClearHistory }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        className="fixed inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl w-full max-w-md mx-4 p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Settings</h2>
          <button onClick={onClose} className="text-[#666] hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Default Model */}
        <div className="mb-5">
          <label className="text-sm text-[#BFBFBF] mb-2 block">Default Model</label>
          <select
            value={settings.defaultModel}
            onChange={e => onChange({ ...settings, defaultModel: e.target.value as ModelId })}
            className="w-full bg-[#1A1A1A] text-white border border-[#333] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#555]"
          >
            {MODEL_LIST.map(m => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>

        {/* Animations */}
        <div className="mb-5 flex items-center justify-between">
          <label className="text-sm text-[#BFBFBF]">Animations</label>
          <button
            onClick={() => onChange({ ...settings, animationsEnabled: !settings.animationsEnabled })}
            className={`w-10 h-5 rounded-full transition-colors relative ${settings.animationsEnabled ? 'bg-white/20' : 'bg-[#333]'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${settings.animationsEnabled ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
        </div>

        {/* Clear History */}
        <div className="pt-4 border-t border-[#1A1A1A]">
          <button
            onClick={() => { onClearHistory(); onClose(); }}
            className="w-full py-2.5 rounded-lg text-red-400 border border-red-400/20 hover:bg-red-400/10 text-sm font-medium transition-colors"
          >
            Clear All History
          </button>
        </div>
      </motion.div>
    </div>
  );
}
