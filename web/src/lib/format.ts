import type { Lang } from '../data/site';

const nf = (lang: Lang) => new Intl.NumberFormat(lang === 'en' ? 'en-US' : lang === 'ru' ? 'ru-RU' : 'az-AZ');

export function fmtPrice([a, b]: [number, number], lang: Lang) {
  const f = nf(lang);
  // normalise narrow no-break spaces to regular no-break spaces for consistent rendering
  const s = (n: number) => f.format(n).replace(/[  ]/g, ' ');
  return `${s(a)} – ${s(b)} AZN`;
}

export function fmtDate(d: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'az' ? 'az-Latn-AZ' : lang === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

export function readingTime(text: string) {
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
