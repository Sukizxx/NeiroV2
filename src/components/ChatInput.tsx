'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import { ModelId } from '@/types';
import ModelPicker from './ModelPicker';
import CommandPalette from './CommandPalette';

interface Props {
  onSend: (content: string) => void;
  onStop: () => void;
  isStreaming: boolean;
  model: ModelId;
  onModelChange: (m: ModelId) => void;
  thinkingMode: boolean;
  onThinkingToggle: () => void;
  onFileUpload: (file: File) => void;
}

export default function ChatInput({
  onSend, onStop, isStreaming, model, onModelChange,
  thinkingMode, onThinkingToggle, onFileUpload,
}: Props) {
  const [value, setValue] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const [cmdFilter, setCmdFilter] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const autoResize = useCallback(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 200) + 'px';
  }, []);

  useEffect(() => { autoResize(); }, [value, autoResize]);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || isStreaming) return;
    onSend(trimmed);
    setValue('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    setValue(v);

    if (v.startsWith('/')) {
      setShowCommands(true);
      setCmdFilter(v);
    } else {
      setShowCommands(false);
    }
  };

  const handleCommandSelect = (cmd: string) => {
    setValue(cmd + ' ');
    setShowCommands(false);
    textareaRef.current?.focus();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileUpload(file);
    e.target.value = '';
  };

  return (
    <div className="border-t border-[#1A1A1A] bg-black">
      <div className="max-w-3xl mx-auto px-3 py-3 sm:px-4">
        <div className="relative bg-[#1A1A1A] rounded-2xl border border-[#333] focus-within:border-[#555] transition-colors">
          <CommandPalette visible={showCommands} filter={cmdFilter} onSelect={handleCommandSelect} />

          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Message NeiroAI..."
            rows={1}
            className="w-full bg-transparent text-white text-sm px-4 pt-3 pb-1 outline-none resize-none placeholder:text-[#666] min-h-[44px]"
          />

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-3 pb-2.5 pt-1">
            <div className="flex items-center gap-2">
              <ModelPicker selected={model} onChange={onModelChange} />

              {/* Thinking toggle */}
              <button
                onClick={onThinkingToggle}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                  thinkingMode
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-[#666] hover:text-[#999] hover:bg-white/5'
                }`}
              >
                💭 Think
              </button>

              {/* File upload */}
              <button
                onClick={() => fileRef.current?.click()}
                className="p-1.5 text-[#666] hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <input ref={fileRef} type="file" className="hidden" onChange={handleFile}
                accept="image/*,.pdf,.docx,.txt,.zip,.js,.ts,.py,.html,.css,.json,.yaml,.xml" />
            </div>

            {/* Send / Stop */}
            {isStreaming ? (
              <button
                onClick={onStop}
                className="p-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!value.trim()}
                className="p-2 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:hover:bg-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
