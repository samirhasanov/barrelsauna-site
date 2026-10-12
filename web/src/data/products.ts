import type { L } from './site';
import raw from './products.json';

export interface Product {
  id: string;
  brand: 'Harvia' | 'SAWO' | 'Saunabee' | string;
  category: string;
  name: string;
  specs: Record<string, string | undefined>;
  description: L;
  image: string;
  source_url?: string;
}

export const PRODUCTS = raw as Product[];

export const STOVE_CATS = ['wood-stove', 'electric-stove', 'control-panel', 'steam-generator'] as const;
export const ACC_CATS = ['bucket-ladle', 'thermometer-hygrometer', 'headrest-backrest', 'lighting', 'textile', 'aroma', 'stones', 'door-window', 'other-accessory'] as const;

export const CAT_LABEL: Record<string, L> = {
  'wood-stove': { az: 'Odun sobaları', en: 'Wood-burning heaters', ru: 'Дровяные печи' },
  'electric-stove': { az: 'Elektrik sobaları', en: 'Electric heaters', ru: 'Электрические печи' },
  'control-panel': { az: 'İdarəetmə panelləri', en: 'Control panels', ru: 'Пульты управления' },
  'steam-generator': { az: 'Buxar generatorları', en: 'Steam generators', ru: 'Парогенераторы' },
  'bucket-ladle': { az: 'Vedrə və çömçələr', en: 'Buckets & ladles', ru: 'Шайки и ковши' },
  'thermometer-hygrometer': { az: 'Termometr və hiqrometr', en: 'Thermometers & hygrometers', ru: 'Термометры и гигрометры' },
  'headrest-backrest': { az: 'Baş və bel dayaqları', en: 'Head & back rests', ru: 'Подголовники и спинки' },
  lighting: { az: 'İşıqlandırma', en: 'Lighting', ru: 'Освещение' },
  textile: { az: 'Tekstil və papaqlar', en: 'Textiles & hats', ru: 'Текстиль и шапки' },
  aroma: { az: 'Aromalar', en: 'Aromas', ru: 'Ароматы' },
  stones: { az: 'Sauna daşları', en: 'Sauna stones', ru: 'Камни для сауны' },
  'door-window': { az: 'Qapı və pəncərələr', en: 'Doors & windows', ru: 'Двери и окна' },
  'other-accessory': { az: 'Digər aksesuarlar', en: 'Other accessories', ru: 'Другие аксессуары' },
};
