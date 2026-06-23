export type Intent = 'coding' | 'image-gen' | 'image-edit' | 'download' | 'analysis' | 'vision' | 'general';

const IMAGE_GEN_KEYWORDS = [
  'buat gambar', 'bikin gambar', 'generate gambar', 'create image',
  'buat ilustrasi', 'buat logo', 'buat wallpaper', 'buat desain',
  'generate image', 'make image', 'draw', 'gambarkan',
];

const IMAGE_EDIT_KEYWORDS = [
  'edit gambar', 'ubah gambar', 'modifikasi gambar', 'edit image',
  'change image', 'modify image',
];

const DOWNLOAD_KEYWORDS = [
  'tiktok.com', 'instagram.com', 'facebook.com', 'youtube.com',
  'twitter.com', 'x.com', 'reddit.com', 'pinterest.com',
  'linkedin.com', 'vimeo.com', 'spotify.com', 'soundcloud.com',
  'telegram.me', '/download', 'unduh video', 'download video',
];

const CODING_KEYWORDS = [
  'code', 'kode', 'function', 'fungsi', 'class', 'component',
  'bug', 'error', 'debug', 'refactor', 'optimize', 'buat website',
  'buat aplikasi', 'buat program', 'script', 'api', 'database',
  'html', 'css', 'javascript', 'python', 'react', 'next.js',
];

export function detectIntent(prompt: string, hasImage: boolean): Intent {
  const lower = prompt.toLowerCase();

  if (hasImage) return 'vision';
  if (IMAGE_GEN_KEYWORDS.some(k => lower.includes(k))) return 'image-gen';
  if (IMAGE_EDIT_KEYWORDS.some(k => lower.includes(k))) return 'image-edit';
  if (DOWNLOAD_KEYWORDS.some(k => lower.includes(k))) return 'download';
  if (CODING_KEYWORDS.some(k => lower.includes(k))) return 'coding';

  return 'general';
}
