'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface Command {
  id: string;
  label: string;
  description: string;
  icon: string;
}

const COMMANDS: Command[] = [
  { id: '/img', label: '/img', description: 'Generate image', icon: '🖼️' },
  { id: '/editimg', label: '/editimg', description: 'Edit uploaded image', icon: '✏️' },
  { id: '/download', label: '/download', description: 'Download media', icon: '⬇️' },
  { id: '/upload', label: '/upload', description: 'Upload file', icon: '📎' },
  { id: '/analyze', label: '/analyze', description: 'Analyze file', icon: '🔍' },
];

interface Props {
  visible: boolean;
  filter: string;
  onSelect: (cmd: string) => void;
}

export default function CommandPalette({ visible, filter, onSelect }: Props) {
  const filtered = COMMANDS.filter(c =>
    c.id.includes(filter.toLowerCase()) || c.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AnimatePresence>
      {visible && filtered.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.12 }}
          className="absolute bottom-full mb-2 left-2 right-2 sm:left-4 sm:right-auto sm:min-w-[260px] bg-[#1A1A1A] border border-[#333] rounded-xl shadow-2xl overflow-hidden z-50"
        >
          {filtered.map(cmd => (
            <button
              key={cmd.id}
              onClick={() => onSelect(cmd.id)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#2A2A2A] transition-colors text-left"
            >
              <span className="text-lg">{cmd.icon}</span>
              <div>
                <span className="text-sm text-white font-mono">{cmd.label}</span>
                <p className="text-xs text-[#888]">{cmd.description}</p>
              </div>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
