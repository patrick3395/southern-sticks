// Prefix local image paths with basePath for GitHub Pages static export
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export function img(path: string): string {
  if (path.startsWith('http')) return path;
  return `${BASE}${path}`;
}
