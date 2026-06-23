'use client';
import { Chat, Message, ModelId, AppSettings } from '@/types';
import { v4 as uuid } from 'uuid';

const CHATS_KEY = 'neiroai_chats';
const SETTINGS_KEY = 'neiroai_settings';

export const defaultSettings: AppSettings = {
  theme: 'dark',
  defaultModel: 'neiroplus',
  animationsEnabled: true,
  thinkingMode: false,
};

export function getSettings(): AppSettings {
  if (typeof window === 'undefined') return defaultSettings;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : defaultSettings;
  } catch { return defaultSettings; }
}

export function saveSettings(s: AppSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

export function getChats(): Chat[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CHATS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function saveChats(chats: Chat[]) {
  localStorage.setItem(CHATS_KEY, JSON.stringify(chats));
}

export function createChat(model: ModelId): Chat {
  return {
    id: uuid(),
    title: 'New Chat',
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    model,
  };
}

export function generateTitle(messages: Message[]): string {
  const first = messages.find(m => m.role === 'user');
  if (!first) return 'New Chat';
  const t = first.content.slice(0, 50);
  return t.length < first.content.length ? t + '...' : t;
}
