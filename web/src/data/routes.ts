import type { L, Lang } from './site';

/**
 * Every page of the site, with its localised path.
 * AZ (default) lives at the root, EN under /en, RU under /ru.
 * Legacy URLs from the old site (indexed by Google) are kept unchanged:
 *   /barrel-sauna, /kub-sauna, /dasinabilen-sauna, /jakuzi-vanna,
 *   /konteyner-sauna-jakuzi, /sauna-tikintisi
 */
export const ROUTES = {
  home: { az: '/', en: '/en', ru: '/ru' },
  outdoor: { az: '/col-saunalari', en: '/en/outdoor-saunas', ru: '/ru/ulichnye-sauny' },
  barrel: { az: '/barrel-sauna', en: '/en/barrel-sauna', ru: '/ru/sauna-bochka' },
  oval: { az: '/oval-sauna', en: '/en/oval-sauna', ru: '/ru/ovalnaya-sauna' },
  cube: { az: '/kub-sauna', en: '/en/cube-sauna', ru: '/ru/sauna-kub' },
  cabin: { az: '/kabin-sauna', en: '/en/cabin-sauna', ru: '/ru/sauna-kabina' },
  cottage: { az: '/kotec-sauna', en: '/en/cottage-sauna', ru: '/ru/sauna-kottedzh' },
  spa: { az: '/spa-kompleks', en: '/en/outdoor-spa-complex', ru: '/ru/spa-kompleks' },
  indoor: { az: '/daxili-saunalar', en: '/en/indoor-saunas', ru: '/ru/vnutrennie-sauny' },
  portable: { az: '/dasinabilen-sauna', en: '/en/portable-sauna', ru: '/ru/mobilnaya-sauna' },
  jacuzzi: { az: '/jakuzi-vanna', en: '/en/hot-tubs-jacuzzi', ru: '/ru/dzhakuzi-i-kupeli' },
  container: { az: '/konteyner-sauna-jakuzi', en: '/en/container-sauna-jacuzzi', ru: '/ru/sauna-konteyner' },
  construction: { az: '/sauna-tikintisi', en: '/en/sauna-construction', ru: '/ru/stroitelstvo-saun' },
  stoves: { az: '/sobalar', en: '/en/sauna-heaters', ru: '/ru/pechi-dlya-sauny' },
  accessories: { az: '/aksesuarlar', en: '/en/sauna-accessories', ru: '/ru/aksessuary-dlya-sauny' },
  prices: { az: '/sauna-qiymetleri', en: '/en/sauna-prices', ru: '/ru/ceny-na-sauny' },
  projects: { az: '/layiheler', en: '/en/projects', ru: '/ru/proekty' },
  about: { az: '/haqqimizda', en: '/en/about', ru: '/ru/o-nas' },
  contact: { az: '/elaqe', en: '/en/contact', ru: '/ru/kontakty' },
  blog: { az: '/blog', en: '/en/blog', ru: '/ru/blog' },
} satisfies Record<string, L>;

export type RouteKey = keyof typeof ROUTES;

export const path = (key: RouteKey, lang: Lang) => ROUTES[key][lang];

export const blogPostPath = (lang: Lang, slug: string) => `${ROUTES.blog[lang]}/${slug}`;

/**
 * Blog articles were written with AZ paths in internal links (e.g. /en/col-saunalari).
 * Map "/<lang>/<az-slug>" and "/<az-slug>" to the proper localised route.
 */
const AZ_TO_KEY = new Map<string, RouteKey>(
  (Object.keys(ROUTES) as RouteKey[]).map((k) => [ROUTES[k].az, k]),
);

export function localizeHref(href: string, lang: Lang): string {
  if (!href.startsWith('/')) return href;
  const [p, hash = ''] = href.split('#');
  let rest = p.replace(/\/$/, '') || '/';
  const m = rest.match(/^\/(en|ru)(\/.*)?$/);
  if (m) rest = m[2] || '/';
  const key = AZ_TO_KEY.get(rest);
  if (key) return ROUTES[key][lang] + (hash ? `#${hash}` : '');
  // already a localised path or unknown → leave as is
  return href;
}
