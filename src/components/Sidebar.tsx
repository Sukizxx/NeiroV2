'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Chat } from '@/types';
import { useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  chats: Chat[];
  activeChatId: string | null;
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
  onDeleteChat: (id: string) => void;
  onRenameChat: (id: string, title: string) => void;
  onOpenSettings: () => void;
}

export default function Sidebar({
  open, onClose, chats, activeChatId,
  onNewChat, onSelectChat, onDeleteChat, onRenameChat, onOpenSettings,
}: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [menuId, setMenuId] = useState<string | null>(null);

  const sorted = [...chats].sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed left-0 top-0 bottom-0 w-72 bg-[#0A0A0A] border-r border-[#1A1A1A] z-50 flex flex-col"
            initial={{ x: -288 }}
            animate={{ x: 0 }}
            exit={{ x: -288 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="p-4 border-b border-[#1A1A1A] flex items-center justify-between">
              <span className="text-white font-semibold text-lg tracking-wide">NeiroAI</span>
              <button onClick={onClose} className="text-[#BFBFBF] hover:text-white p-1 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <button
              onClick={() => { onNewChat(); onClose(); }}
              className="m-3 p-3 rounded-lg border border-[#333] text-white hover:bg-[#1A1A1A] transition-colors flex items-center gap-2 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
              New Chat
            </button>

            <div className="flex-1 overflow-y-auto px-2">
              {sorted.map(chat => (
                <div
                  key={chat.id}
                  className={`relative group rounded-lg mb-1 transition-colors ${chat.id === activeChatId ? 'bg-[#1A1A1A]' : 'hover:bg-[#141414]'}`}
                >
                  {editingId === chat.id ? (
                    <div className="p-2">
                      <input
                        className="w-full bg-[#2A2A2A] text-white text-sm rounded px-2 py-1.5 outline-none border border-[#333] focus:border-[#555]"
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') { onRenameChat(chat.id, editTitle); setEditingId(null); }
                          else if (e.key === 'Escape') setEditingId(null);
                        }}
                        onBlur={() => { onRenameChat(chat.id, editTitle); setEditingId(null); }}
                        autoFocus
                      />
                    </div>
                  ) : (
                    <button
                      className="w-full text-left p-2.5 text-sm text-[#BFBFBF] truncate"
                      onClick={() => { onSelectChat(chat.id); onClose(); }}
                    >
                      {chat.title}
                    </button>
                  )}

                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[#666] hover:text-white p-1 transition-all"
                    onClick={(e) => { e.stopPropagation(); setMenuId(menuId === chat.id ? null : chat.id); }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>
                  </button>

                  <AnimatePresence>
                    {menuId === chat.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute right-0 top-full z-10 bg-[#1A1A1A] border border-[#333] rounded-lg shadow-xl overflow-hidden min-w-[120px]"
                      >
                        <button
                          className="w-full text-left px-3 py-2 text-sm text-[#BFBFBF] hover:bg-[#2A2A2A] transition-colors"
                          onClick={() => { setEditTitle(chat.title); setEditingId(chat.id); setMenuId(null); }}
                        >Rename</button>
                        <button
                          className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-[#2A2A2A] transition-colors"
                          onClick={() => { onDeleteChat(chat.id); setMenuId(null); }}
                        >Delete</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-[#1A1A1A]">
              <button
                onClick={() => { onOpenSettings(); onClose(); }}
                className="w-full p-2.5 rounded-lg text-[#BFBFBF] hover:bg-[#1A1A1A] transition-colors text-sm flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                Settings
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
