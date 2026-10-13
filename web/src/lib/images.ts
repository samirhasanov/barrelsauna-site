import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{webp,jpg,jpeg,png}', { eager: true });
const products = import.meta.glob<{ default: ImageMetadata }>('../assets/products/*.{webp,jpg,jpeg,png}', { eager: true });
const stoves = import.meta.glob<{ default: ImageMetadata }>('../assets/stoves/*.{webp,jpg,jpeg,png}', { eager: true });
const social = import.meta.glob<{ default: ImageMetadata }>('../assets/social/*.{webp,jpg,jpeg,png}', { eager: true });
const blog = import.meta.glob<{ default: ImageMetadata }>('../assets/blog/*.{webp,jpg,jpeg,png}', { eager: true });

const index = new Map<string, ImageMetadata>();
for (const [p, mod] of Object.entries({ ...photos, ...products, ...blog, ...social, ...stoves })) {
  const name = p.split('/').pop()!.replace(/\.[a-z]+$/, '');
  index.set(name, mod.default);
}

/** Look up an optimisable image by its file name (without extension). */
export function img(name: string): ImageMetadata {
  const m = index.get(name);
  if (!m) throw new Error(`Image not found: ${name}`);
  return m;
}

export const hasImg = (name: string) => index.has(name);

/** 1200px JPEG rendition for og:image / JSON-LD (social crawlers handle JPEG best) */
export async function ogImage(name: string) {
  const { getImage } = await import('astro:assets');
  const r = await getImage({ src: img(name), width: 1200, format: 'jpeg', quality: 80 });
  return r.src;
}
