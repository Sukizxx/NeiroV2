'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingOrb({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-32 h-32 mb-8"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 blur-xl" />
        <motion.div
          className="absolute inset-2 rounded-full border border-white/20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border border-white/15"
          animate={{ scale: [1, 0.95, 1], rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-8 rounded-full bg-white/10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-12 rounded-full bg-white/20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.h1
        className="text-2xl font-bold text-white mb-2 tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        NeiroAI
      </motion.h1>

      <div className="w-48 h-0.5 bg-[#1A1A1A] rounded-full overflow-hidden mt-4">
        <motion.div
          className="h-full bg-white/40 rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
