export const LANGS = ['az', 'en', 'ru'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'az';

/** Localised string helper type */
export type L<T = string> = Record<Lang, T>;

const env = import.meta.env;

export const SITE = {
  url: (env.PUBLIC_SITE_URL || 'https://barrelsauna.az').replace(/\/$/, ''),
  name: 'Barrel Sauna',
  whatsapp: env.PUBLIC_WHATSAPP || '994101010636',
  phone: env.PUBLIC_PHONE || '+994101010636',
  phoneDisplay: '+994 10 101 06 36',
  email: env.PUBLIC_EMAIL || 'barrelsaunaaz@gmail.com',
  gaId: env.PUBLIC_GA_ID || '',
  pixelId: env.PUBLIC_META_PIXEL_ID || '',
  gscVerification: env.PUBLIC_GSC_VERIFICATION || '',
  instagram: 'https://www.instagram.com/barrelsauna.az/',
  tiktok: 'https://www.tiktok.com/@barrelsauna.az',
  geo: { lat: 40.4093, lng: 49.8671 },
  address: {
    az: 'Bakı şəhəri, Nərimanov rayonu, Əhməd Rəcəbli küç. 1/25',
    en: '1/25 Ahmad Rajabli St, Narimanov district, Baku, Azerbaijan',
    ru: 'г. Баку, Наримановский район, ул. Ахмеда Раджабли 1/25',
  } satisfies L,
  street: 'Əhməd Rəcəbli 1/25',
  hours: {
    az: ['B.e. – Şənbə: 10:00 – 19:00', 'Bazar: 10:00 – 17:00'],
    en: ['Mon – Sat: 10:00 – 19:00', 'Sun: 10:00 – 17:00'],
    ru: ['Пн – Сб: 10:00 – 19:00', 'Вс: 10:00 – 17:00'],
  } satisfies L<string[]>,
};

export const LOCALE: L = { az: 'az_AZ', en: 'en_US', ru: 'ru_RU' };
export const HTML_LANG: L = { az: 'az', en: 'en', ru: 'ru' };

/** Build a wa.me link with an optional pre-filled message */
export function waLink(text?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
