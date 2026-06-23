import { ModelInfo, ModelId } from '@/types';

export const MODELS: Record<ModelId, ModelInfo> = {
  'gpt-oss-120b': {
    id: 'gpt-oss-120b',
    name: 'GPT-OSS 120B',
    description: 'Primary Coding Specialist',
    provider: 'openrouter',
    modelString: 'openai/gpt-4.1',
    roles: ['coding', 'refactoring', 'debugging', 'architecture'],
  },
  'nemotron-ultra': {
    id: 'nemotron-ultra',
    name: 'Nemotron-3 Ultra',
    description: 'Coding Specialist & Chief Judge',
    provider: 'nvidia',
    modelString: 'nvidia/llama-3.3-nemotron-super-49b-v1',
    roles: ['coding', 'reasoning', 'judge', 'consensus', 'analysis', 'validation'],
  },
  'nemotron-nano-omni': {
    id: 'nemotron-nano-omni',
    name: 'Nemotron-3 Nano Omni',
    description: 'Vision & Multimodal Specialist',
    provider: 'nvidia',
    modelString: 'nvidia/llama-3.2-nv-vision-11b-v1',
    roles: ['vision', 'ocr', 'image-understanding', 'multimodal'],
  },
  neiroplus: {
    id: 'neiroplus',
    name: 'NeiroPlus',
    description: 'Multi-Model Orchestration (Best Quality)',
    provider: 'openrouter',
    modelString: '',
    roles: ['all'],
  },
};

export const MODEL_LIST = Object.values(MODELS);
