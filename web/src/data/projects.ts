import type { L } from './site';
import type { RouteKey } from './routes';

export interface Project {
  id: string;
  title: L;
  place: L;
  model: RouteKey;
  modelName: L;
  text: L;
  images: string[];
}

/** Completed projects (source: company PDFs) */
export const PROJECTS: Project[] = [
  {
    id: 'ilisu-cube',
    title: { az: 'Kub sauna dağların qoynunda', en: 'A cube sauna in the mountains', ru: 'Сауна-куб в горах' },
    place: { az: 'Qax, İlisu', en: 'Ilisu, Gakh', ru: 'Илису, Гах' },
    model: 'cube',
    modelName: { az: 'Kub Sauna', en: 'Cube Sauna', ru: 'Сауна-куб' },
    text: {
      az: 'Böyük şüşə qapı və pəncərələri ilə Qafqaz dağlarına baxan kub sauna. Lipa interyer, daş sobası və rahat oturacaq düzülüşü.',
      en: 'A cube sauna facing the Caucasus mountains through large glass doors and windows. Linden interior, stone-filled heater and a comfortable bench layout.',
      ru: 'Сауна-куб с видом на Кавказские горы через большие стеклянные двери и окна. Интерьер из липы, каменка и удобная планировка полков.',
    },
    images: ['proj-ilisu-cube-3', 'proj-ilisu-cube-4', 'proj-ilisu-cube-2', 'proj-ilisu-cube-1', 'proj-ilisu-cube-5', 'proj-ilisu-cube-6', 'proj-ilisu-cube-7', 'proj-ilisu-cube-8', 'proj-ilisu-cube-9'],
  },
  {
    id: 'qabala-spa',
    title: { az: 'Outdoor SPA kompleks', en: 'Outdoor spa complex', ru: 'Уличный SPA-комплекс' },
    place: { az: 'Qəbələ', en: 'Gabala', ru: 'Габала' },
    model: 'spa',
    modelName: { az: 'SPA Kompleks', en: 'Spa Complex', ru: 'SPA-комплекс' },
    text: {
      az: 'Hovuz kənarında istirahət zonası və geniş sauna otağı olan SPA kompleksi. Kötük dekoru, işıqlı tavan paneli və çoxpilləli oturacaqlar.',
      en: 'A spa complex with a poolside lounge and a spacious sauna room. Log-cut décor, illuminated ceiling panel and multi-tier benches.',
      ru: 'SPA-комплекс с зоной отдыха у бассейна и просторной сауной. Декор из спилов, светящаяся потолочная панель и многоуровневые полки.',
    },
    images: ['proj-qabala-spa-2', 'proj-qabala-spa-1', 'proj-qabala-spa-3', 'proj-qabala-spa-4', 'proj-qabala-spa-5', 'proj-qabala-spa-6'],
  },
  {
    id: 'ismayilli-cottage',
    title: { az: 'Kotec sauna evi', en: 'Cottage sauna house', ru: 'Банный дом-коттедж' },
    place: { az: 'İsmayıllı', en: 'Ismayilli', ru: 'Исмаиллы' },
    model: 'cottage',
    modelName: { az: 'Kotec Sauna', en: 'Cottage Sauna', ru: 'Сауна-коттедж' },
    text: {
      az: '3D layihədən başlayaraq tikilən kotec sauna: geniş sauna otağı, istirahət zalı və təbiətlə əhatə olunmuş ev memarlığı.',
      en: 'A cottage sauna built from a 3D design: a large sauna room, a lounge and house-style architecture surrounded by nature.',
      ru: 'Сауна-коттедж, построенная по 3D-проекту: большая парная, зал отдыха и архитектура домика среди природы.',
    },
    images: ['proj-ismayilli-cottage-3', 'proj-ismayilli-cottage-1', 'proj-ismayilli-cottage-2', 'proj-ismayilli-cottage-4', 'proj-ismayilli-cottage-5', 'proj-ismayilli-cottage-6', 'proj-ismayilli-cottage-7', 'proj-ismayilli-cottage-8', 'proj-ismayilli-cottage-9', 'proj-ismayilli-cottage-10', 'proj-ismayilli-cottage-12', 'proj-ismayilli-cottage-14'],
  },
  {
    id: 'seabreeze-cabin',
    title: { az: 'Panoramik kabin sauna', en: 'Panoramic cabin sauna', ru: 'Панорамная сауна-кабина' },
    place: { az: 'Sea Breeze', en: 'Sea Breeze', ru: 'Sea Breeze' },
    model: 'cabin',
    modelName: { az: 'Kabin Sauna', en: 'Cabin Sauna', ru: 'Сауна-кабина' },
    text: {
      az: 'Müasir villa həyəti üçün tünd fasadlı, panoramik şüşəli kabin sauna.',
      en: 'A dark-façade cabin sauna with panoramic glass for a modern villa garden.',
      ru: 'Сауна-кабина с тёмным фасадом и панорамным остеклением для современной виллы.',
    },
    images: ['proj-seabreeze-cabin-2', 'proj-seabreeze-cabin-1', 'proj-seabreeze-cabin-3'],
  },
  {
    id: 'qabala-barrel',
    title: { az: 'Qarda barrel sauna', en: 'Barrel sauna in the snow', ru: 'Сауна-бочка в снегу' },
    place: { az: 'Qəbələ', en: 'Gabala', ru: 'Габала' },
    model: 'barrel',
    modelName: { az: 'Barrel Sauna', en: 'Barrel Sauna', ru: 'Сауна-бочка' },
    text: {
      az: 'Qəbələnin qarlı qışında belə rahat istifadə olunan barrel sauna və yanında taxta isti vanna.',
      en: 'A barrel sauna with a wooden hot tub, comfortable even in Gabala’s snowy winter.',
      ru: 'Сауна-бочка с деревянной купелью — комфортна даже снежной зимой в Габале.',
    },
    images: ['proj-qabala-barrel-1'],
  },
];
