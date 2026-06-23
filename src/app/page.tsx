'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Chat, Message, ModelId, AppSettings } from '@/types';
import { getChats, saveChats, createChat, generateTitle, getSettings, saveSettings, defaultSettings } from '@/store/chatStore';
import { useChat } from '@/hooks/useChat';
import { v4 as uuid } from 'uuid';
import LoadingOrb from '@/components/LoadingOrb';
import Sidebar from '@/components/Sidebar';
import ChatInput from '@/components/ChatInput';
import MessageBubble from '@/components/MessageBubble';
import SettingsModal from '@/components/SettingsModal';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [currentModel, setCurrentModel] = useState<ModelId>('neiroplus');
  const [thinkingMode, setThinkingMode] = useState(false);
  const [thinkingText, setThinkingText] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const userScrolledUp = useRef(false);
  const { sendMessage, stopStreaming, isStreaming } = useChat();

  // Load from localStorage
  useEffect(() => {
    const s = getSettings();
    setSettings(s);
    setCurrentModel(s.defaultModel);
    setChats(getChats());
  }, []);

  // Save chats
  useEffect(() => {
    if (chats.length > 0) saveChats(chats);
  }, [chats]);

  // Save settings
  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  // Auto scroll
  const scrollToBottom = useCallback(() => {
    if (!userScrolledUp.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const activeChat = chats.find(c => c.id === activeChatId) || null;

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages, scrollToBottom]);

  // Detect user scroll
  const handleScroll = () => {
    const el = chatContainerRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
    userScrolledUp.current = !atBottom;
  };

  // Create new chat
  const handleNewChat = useCallback(() => {
    const chat = createChat(currentModel);
    setChats(prev => [chat, ...prev]);
    setActiveChatId(chat.id);
    setThinkingText('');
  }, [currentModel]);

  // Send message
  const handleSend = useCallback((content: string) => {
    let chat = activeChat;
    if (!chat) {
      chat = createChat(currentModel);
      setChats(prev => [chat!, ...prev]);
      setActiveChatId(chat.id);
    }

    const userMsg: Message = {
      id: uuid(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setChats(prev =>
      prev.map(c =>
        c.id === chat!.id
          ? { ...c, messages: [...c.messages, userMsg], updatedAt: Date.now() }
          : c
      )
    );

    setThinkingText('');
    userScrolledUp.current = false;

    const updatedChat = {
      ...chat,
      messages: [...chat.messages, userMsg],
    };

    sendMessage(
      updatedChat,
      content,
      currentModel,
      thinkingMode,
      // onUpdate
      (assistantMsg: Message) => {
        setChats(prev =>
          prev.map(c => {
            if (c.id !== chat!.id) return c;
            const msgs = c.messages.filter(m => m.id !== assistantMsg.id);
            return {
              ...c,
              messages: [...msgs, assistantMsg],
              title: c.title === 'New Chat' ? generateTitle(c.messages) : c.title,
              updatedAt: Date.now(),
            };
          })
        );
      },
      // onThinking
      (t: string) => setThinkingText(t),
      // onDone
      () => setThinkingText(''),
    );
  }, [activeChat, currentModel, thinkingMode, sendMessage]);

  // Edit message
  const handleEditMessage = useCallback((msgId: string, newContent: string) => {
    if (!activeChat) return;
    setChats(prev =>
      prev.map(c => {
        if (c.id !== activeChat.id) return c;
        const idx = c.messages.findIndex(m => m.id === msgId);
        if (idx === -1) return c;
        // Remove this message and everything after, then re-send
        const newMessages = c.messages.slice(0, idx);
        return { ...c, messages: newMessages, updatedAt: Date.now() };
      })
    );
    // Re-send with new content
    setTimeout(() => handleSend(newContent), 100);
  }, [activeChat, handleSend]);

  // Delete chat
  const handleDeleteChat = useCallback((id: string) => {
    setChats(prev => prev.filter(c => c.id !== id));
    if (activeChatId === id) setActiveChatId(null);
  }, [activeChatId]);

  // Rename chat
  const handleRenameChat = useCallback((id: string, title: string) => {
    setChats(prev => prev.map(c => c.id === id ? { ...c, title } : c));
  }, []);

  // File upload
  const handleFileUpload = useCallback((file: File) => {
    // For images, we could use vision model
    const isImage = file.type.startsWith('image/');
    if (isImage) {
      setCurrentModel('nemotron-nano-omni');
    }
    // TODO: Full file processing pipeline
    handleSend(`[Uploaded: ${file.name} (${(file.size / 1024).toFixed(1)}KB)]`);
  }, [handleSend]);

  // Clear history
  const handleClearHistory = useCallback(() => {
    setChats([]);
    setActiveChatId(null);
    localStorage.removeItem('neiroai_chats');
  }, []);

  if (loading) {
    return <LoadingOrb onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="h-dvh flex flex-col bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1A] bg-black/80 backdrop-blur-xl z-30 shrink-0">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <h1 className="text-sm font-semibold tracking-widest text-white/80">NEIROAI</h1>

        <button
          onClick={handleNewChat}
          className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </header>

      {/* Messages */}
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto overscroll-contain"
      >
        {!activeChat || activeChat.messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-6">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">How can I help you?</h2>
            <p className="text-sm text-[#666] text-center max-w-sm">
              Ask me anything — coding, analysis, reasoning, or creative tasks.
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto py-4">
            {activeChat.messages.map(msg => (
              <MessageBubble
                key={msg.id}
                message={msg}
                onEdit={msg.role === 'user' ? handleEditMessage : undefined}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput
        onSend={handleSend}
        onStop={stopStreaming}
        isStreaming={isStreaming}
        model={currentModel}
        onModelChange={setCurrentModel}
        thinkingMode={thinkingMode}
        onThinkingToggle={() => setThinkingMode(!thinkingMode)}
        onFileUpload={handleFileUpload}
      />

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        chats={chats}
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
        onSelectChat={setActiveChatId}
        onDeleteChat={handleDeleteChat}
        onRenameChat={handleRenameChat}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Settings */}
      <AnimatePresence>
        {settingsOpen && (
          <SettingsModal
            settings={settings}
            onChange={setSettings}
            onClose={() => setSettingsOpen(false)}
            onClearHistory={handleClearHistory}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
