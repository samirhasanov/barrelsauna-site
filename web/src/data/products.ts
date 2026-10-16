import type { L } from './site';
import raw from './products.json';

export interface Product {
  id: string;
  brand: 'Harvia' | 'SAWO' | 'Teplodar' | 'TMF' | 'Fanlan' | string;
  category: string;
  name: string;
  specs: Record<string, string | undefined>;
  description: L;
  image: string;
  source_url?: string;
}

export const PRODUCTS = raw as Product[];

export const STOVE_CATS = ['wood-stove', 'electric-stove', 'combi-stove', 'steam-generator', 'control-panel', 'infrared'] as const;
export const ACC_CATS = ['bucket-ladle', 'thermometer-hygrometer', 'headrest-backrest', 'lighting', 'textile', 'aroma', 'stones', 'door-window', 'other-accessory'] as const;

export const CAT_LABEL: Record<string, L> = {
  'wood-stove': { az: 'Odun sobaları', en: 'Wood-burning heaters', ru: 'Дровяные печи' },
  'electric-stove': { az: 'Elektrik sobaları', en: 'Electric heaters', ru: 'Электрические печи' },
  'combi-stove': { az: 'Kombi (buxarlı) sobalar', en: 'Combi heaters (with steam)', ru: 'Комби-печи (с паром)' },
  infrared: { az: 'İnfraqırmızı radiatorlar', en: 'Infrared radiators', ru: 'Инфракрасные излучатели' },
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

import stovesRaw from './stoves.json';

export interface StoveVariant { name: string; code: string; kw: string; m3: string; stones: string; control: string }
export interface StoveFamily {
  id: string; brand: string; category: string; series: string; name: string; image: string; manufacturer: string;
  description: L; power: [number, number] | null; variants: StoveVariant[];
}
export const STOVES = stovesRaw as StoveFamily[];
export const STOVE_MODEL_COUNT = STOVES.reduce((n, f) => n + f.variants.length, 0);
