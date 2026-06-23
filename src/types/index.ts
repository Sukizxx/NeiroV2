export type ModelId = 'gpt-oss-120b' | 'nemotron-ultra' | 'nemotron-nano-omni' | 'neiroplus';

export interface ModelInfo {
  id: ModelId;
  name: string;
  description: string;
  provider: 'openrouter' | 'nvidia';
  modelString: string;
  roles: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  model?: ModelId;
  timestamp: number;
  thinking?: string;
  isStreaming?: boolean;
  images?: string[];
  files?: FileAttachment[];
  discussionMessages?: DiscussionMessage[];
}

export interface DiscussionMessage {
  model: ModelId;
  modelName: string;
  content: string;
  type: 'draft' | 'critique' | 'revision' | 'judge' | 'conclusion';
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
  model: ModelId;
}

export interface FileAttachment {
  name: string;
  type: string;
  size: number;
  url?: string;
  content?: string;
}

export interface AppSettings {
  theme: 'dark';
  defaultModel: ModelId;
  animationsEnabled: boolean;
  thinkingMode: boolean;
}
