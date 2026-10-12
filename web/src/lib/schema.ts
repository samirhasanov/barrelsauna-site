import { SITE } from '../data/site';
import type { FAQ } from '../data/models';

export const abs = (p: string) => (p.startsWith('http') ? p : SITE.url + (p === '/' ? '/' : p));

export const faqLd = (items: FAQ[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const productLd = (o: { name: string; description: string; url: string; image: string; low: number; high: number }) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: o.name,
  description: o.description,
  image: abs(o.image),
  brand: { '@type': 'Brand', name: 'Barrel Sauna' },
  manufacturer: { '@id': `${SITE.url}/#business` },
  url: abs(o.url),
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'AZN',
    lowPrice: o.low,
    highPrice: o.high,
    availability: 'https://schema.org/InStock',
    seller: { '@id': `${SITE.url}/#business` },
  },
});

export const serviceLd = (o: { name: string; description: string; url: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: o.name,
  description: o.description,
  url: abs(o.url),
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: { '@type': 'Country', name: 'Azerbaijan' },
});
