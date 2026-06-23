'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '@/types';
import { MODELS } from '@/lib/models';
import MarkdownRenderer from './MarkdownRenderer';
import ThinkingIndicator from './ThinkingIndicator';

interface Props {
  message: Message;
  onEdit?: (id: string, content: string) => void;
}

export default function MessageBubble({ message, onEdit }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(message.content);
  const isUser = message.role === 'user';
  const modelInfo = message.model ? MODELS[message.model] : null;

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setShowMenu(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 px-2 sm:px-4`}
    >
      <div className={`max-w-[85%] sm:max-w-[75%] lg:max-w-[65%] ${isUser ? '' : 'w-full sm:w-auto'}`}>
        {/* Model label */}
        {!isUser && modelInfo && (
          <div className="flex items-center gap-2 mb-1.5 ml-1">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white/70">N</span>
            </div>
            <span className="text-xs text-[#666] font-medium">{modelInfo.name}</span>
          </div>
        )}

        {/* Bubble */}
        <div
          className={`relative rounded-2xl ${
            isUser
              ? 'bg-[#2A2A2A] text-white px-4 py-3'
              : 'bg-transparent text-[#e0e0e0] py-1'
          }`}
          onClick={() => !editing && setShowMenu(!showMenu)}
        >
          {/* Thinking */}
          {!isUser && message.thinking && (
            <ThinkingIndicator
              thinking={message.thinking}
              isActive={!!message.isStreaming}
            />
          )}

          {/* Content */}
          {editing ? (
            <div>
              <textarea
                className="w-full bg-[#1A1A1A] text-white rounded-lg p-3 text-sm outline-none border border-[#333] focus:border-[#555] resize-none min-h-[60px]"
                value={editContent}
                onChange={e => setEditContent(e.target.value)}
                autoFocus
              />
              <div className="flex gap-2 mt-2 justify-end">
                <button
                  className="px-3 py-1.5 text-xs bg-[#333] text-white rounded-lg hover:bg-[#444] transition-colors"
                  onClick={() => setEditing(false)}
                >Cancel</button>
                <button
                  className="px-3 py-1.5 text-xs bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  onClick={() => { onEdit?.(message.id, editContent); setEditing(false); }}
                >Save</button>
              </div>
            </div>
          ) : isUser ? (
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
          ) : (
            <MarkdownRenderer content={message.content} />
          )}

          {/* Streaming cursor */}
          {message.isStreaming && !message.content && (
            <div className="flex gap-1 py-2">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-white/40" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-white/40" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-white/40" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} />
            </div>
          )}
        </div>

        {/* Action Menu */}
        <AnimatePresence>
          {showMenu && !editing && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className={`flex gap-1 mt-1.5 ${isUser ? 'justify-end' : 'justify-start'} ml-1`}
            >
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 text-xs text-[#888] hover:text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-md transition-colors"
              >Copy</button>
              {isUser && onEdit && (
                <button
                  onClick={() => { setEditing(true); setShowMenu(false); }}
                  className="px-2.5 py-1 text-xs text-[#888] hover:text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-md transition-colors"
                >Edit</button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
