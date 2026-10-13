import type { APIRoute, GetStaticPaths } from 'astro';
import { getImage } from 'astro:assets';
import { LANGS, type Lang } from '../data/site';
import { STOVES } from '../data/products';
import { img, hasImg } from '../lib/images';

export const getStaticPaths = (() => LANGS.map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

/** Full heater catalog for client-side search/filter (compact tuples). */
export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const rows = [];
  for (const f of STOVES) {
    if (!hasImg(f.image)) continue;
    const src = (await getImage({ src: img(f.image), width: 480, format: 'webp', quality: 72 })).src;
    rows.push([
      src, f.brand, f.manufacturer || f.brand, f.category, f.name, f.description[lang] || f.description.en,
      f.power, f.variants.map((v) => [v.name, v.code, v.kw, v.m3]),
    ]);
  }
  return new Response(JSON.stringify(rows), { headers: { 'Content-Type': 'application/json' } });
};
