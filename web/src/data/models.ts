import type { L } from './site';
import type { RouteKey } from './routes';

export interface FAQ { q: string; a: string }

export interface OutdoorModel {
  key: Extract<RouteKey, 'barrel' | 'oval' | 'cube' | 'cabin' | 'cottage' | 'spa'>;
  name: L;
  tagline: L;
  short: L;
  intro: L<string[]>;
  features: L<string[]>;
  capacity: [number, number];
  price: [number, number];
  cover: string;
  images: string[];
  faq: L<FAQ[]>;
  seo: { title: L; description: L; h1: L };
}

/** Shared construction facts for every outdoor model (source: company PDF) */
export const OUTDOOR_BUILD: L<{ title: string; text: string }[]> = {
  az: [
    { title: 'Suya davamlı xarici üzlük', text: 'Xarici hissə termo-işlənmiş qırmızı şam — listvenica (gəmi taxtası) ilə üzlənir: yağışa, qara və yüksək rütubətə dayanıqlıdır.' },
    { title: 'Sağlam daxili taxta', text: 'Daxili hissə ekoloji təmiz lipa (cökə) ağacından yığılır. İstəyə görə kedr, abaşi (abachi) və ya tik taxtası.' },
    { title: 'Çoxtəbəqəli izolyasiya', text: 'Divarlarda mineral daş yunu və taxtalararası xüsusi membran: istilik içəridə qalır, buxar karkasa keçmir, sauna uzunömürlü olur.' },
    { title: 'İkiqat qorunan dam', text: 'Tegola örtüyü və altında möhkəm tol qatı. Modelə görə ondulin və ya profnastil seçimi də var.' },
  ],
  en: [
    { title: 'Weatherproof exterior', text: 'The outside is clad in thermo-treated red pine larch (listvenica, “ship timber”) that withstands rain, snow and high humidity.' },
    { title: 'Healthy interior wood', text: 'The inside is built from eco-friendly linden (lipa). Cedar, abachi or teak are available on request.' },
    { title: 'Multilayer insulation', text: 'Mineral stone wool plus a special membrane between the boards keep the heat in and stop steam from reaching the frame.' },
    { title: 'Double-protected roof', text: 'Tegola shingles over a strong roofing-felt layer. Ondulin or profiled metal sheet options depending on the model.' },
  ],
  ru: [
    { title: 'Влагостойкая обшивка', text: 'Снаружи — термообработанная красная сосна лиственница («корабельная доска»), которая не боится дождя, снега и высокой влажности.' },
    { title: 'Здоровое дерево внутри', text: 'Внутренняя отделка — экологически чистая липа. По желанию — кедр, абаши или тик.' },
    { title: 'Многослойное утепление', text: 'Минеральная каменная вата и специальная мембрана между досками сохраняют тепло и не пускают пар в каркас.' },
    { title: 'Двойная защита крыши', text: 'Гибкая черепица Tegola поверх прочного слоя рубероида. Для некоторых моделей — ондулин или профнастил.' },
  ],
};

const regionsFaq: L<FAQ> = {
  az: { q: 'Bölgələrdə də quraşdırırsınız?', a: 'Bəli. Bakı və Abşerondan başqa Azərbaycanın bütün bölgələrində sauna tikintisi və quraşdırma xidməti göstəririk. Qəbələ, Qax, İsmayıllı və digər bölgələrdə tamamlanmış layihələrimiz var.' },
  en: { q: 'Do you install outside Baku?', a: 'Yes. Besides Baku and Absheron we build and install saunas in every region of Azerbaijan — we have completed projects in Gabala, Gakh, Ismayilli and elsewhere.' },
  ru: { q: 'Устанавливаете ли вы сауны в регионах?', a: 'Да. Помимо Баку и Абшерона мы строим и устанавливаем сауны во всех регионах Азербайджана — у нас есть готовые проекты в Габале, Гахе, Исмаиллы и других районах.' },
};

const stoveFaq: L<FAQ> = {
  az: { q: 'Hansı soba quraşdırılır — odun, yoxsa elektrik?', a: 'Hər ikisi mümkündür. Saunanın həcminə və istifadə qaydanıza uyğun olaraq Harvia və SAWO-nun odun və elektrik sobalarından birini birlikdə seçirik.' },
  en: { q: 'Wood-burning or electric heater?', a: 'Both are possible. We help you pick a Harvia or SAWO wood-burning or electric heater that matches the sauna volume and how you plan to use it.' },
  ru: { q: 'Какая печь — дровяная или электрическая?', a: 'Возможны оба варианта. Мы вместе подбираем дровяную или электрическую печь Harvia или SAWO под объём сауны и ваш сценарий использования.' },
};

const winterFaq: L<FAQ> = {
  az: { q: 'Çöl saunası qışda və yağışda istifadə oluna bilərmi?', a: 'Bəli. Suya davamlı listvenica üzlük, çoxtəbəqəli izolyasiya və ikiqat qorunan dam sayəsində saunalarımız yağışlı, qarlı və rütubətli havada da ilboyu istifadə üçün nəzərdə tutulub.' },
  en: { q: 'Can an outdoor sauna be used in winter and rain?', a: 'Yes. Thanks to the water-resistant larch cladding, multilayer insulation and double-protected roof, our saunas are designed for year-round use in rain, snow and humid climates.' },
  ru: { q: 'Можно ли пользоваться уличной сауной зимой и в дождь?', a: 'Да. Влагостойкая лиственница, многослойное утепление и двойная защита крыши позволяют пользоваться сауной круглый год — в дождь, снег и при высокой влажности.' },
};

const baseFaq: L<FAQ> = {
  az: { q: 'Quraşdırma üçün yer necə hazırlanmalıdır?', a: 'Sauna düz və möhkəm əsas üzərində qurulmalıdır (beton, səki daşı və s.). Elektrik sobası seçilərsə, uyğun elektrik xətti lazımdır. Yer seçimi və hazırlıq barədə ilkin baxışda sizə məsləhət veririk.' },
  en: { q: 'How should the site be prepared?', a: 'The sauna needs a level, solid base (concrete slab, paving, etc.). With an electric heater a suitable power line is required. We advise you on placement and preparation during the first consultation.' },
  ru: { q: 'Как подготовить место для установки?', a: 'Сауне нужно ровное и прочное основание (бетон, плитка и т. п.). Для электрической печи потребуется подходящая электролиния. Мы подскажем по выбору места и подготовке на первой консультации.' },
};

export const MODELS: OutdoorModel[] = [
  {
    key: 'barrel',
    name: { az: 'Barrel Sauna', en: 'Barrel Sauna', ru: 'Сауна-бочка' },
    tagline: { az: 'Klassik çəllək formalı çöl saunası', en: 'The classic round outdoor sauna', ru: 'Классическая уличная сауна-бочка' },
    short: {
      az: 'Klassik görünüşü və yuvarlaq forması ilə həm göz oxşayan, həm də praktik sauna.',
      en: 'A classic look and round shape — beautiful and highly practical.',
      ru: 'Классический облик и круглая форма — красиво и практично.',
    },
    intro: {
      az: [
        'Barrel Sauna — çəllək formalı, çöldə quraşdırılan fin saunasıdır. Yuvarlaq forma sayəsində isti hava daxildə sürətlə və bərabər dövr edir: sauna tez isinir və istiliyi uzun müddət saxlayır.',
        'Gövdə suya davamlı termo listvenica ilə üzlənir, daxili hissə lipa ağacından yığılır. Tənzimlənən metal kəmərlər konstruksiyanın bütövlüyünü qoruyur — hava dəyişdikcə taxtada yaranan təbii daralmalarda gövdəni asanlıqla sıxıb kipliyi bərpa etmək mümkündür. Şəxsi həyətlər, bağ evləri, otel və qonaq evləri üçün ideal seçimdir.',
      ],
      en: [
        'The Barrel Sauna is a round, barrel-shaped Finnish sauna built for the outdoors. Its curved form lets hot air circulate quickly and evenly, so the sauna heats up fast and holds the heat for a long time.',
        'The body is clad in water-resistant thermo larch and the interior is built from linden. Adjustable metal bands hold the structure together — when the wood naturally shrinks with the weather, the body can simply be re-tightened to restore a perfect seal. Ideal for private gardens, country houses, hotels and guest houses.',
      ],
      ru: [
        'Сауна-бочка — уличная финская сауна круглой формы. Благодаря изогнутым стенам горячий воздух циркулирует быстро и равномерно: сауна быстро прогревается и долго держит тепло.',
        'Корпус обшит влагостойкой термолиственницей, внутри — липа. Регулируемые металлические стяжки сохраняют целостность конструкции: при естественной усадке дерева из-за перепадов погоды корпус легко подтянуть и вернуть герметичность. Идеально для частного двора, дачи, отелей и гостевых домов.',
      ],
    },
    features: {
      az: ['Tez isinmə və bərabər istilik paylanması', 'Tənzimlənən metal kəmərlər — kipliyi illər boyu bərpa etmək olur', 'Odun və ya elektrik sobası ilə işləmə imkanı', 'Panoramik şüşə və fərdi ölçü seçimləri', 'Yağış, qar və rütubətə davamlı konstruksiya'],
      en: ['Fast heat-up and even heat distribution', 'Adjustable metal bands keep it tight for years', 'Wood-burning or electric heater', 'Panoramic glass and custom size options', 'Built to withstand rain, snow and humidity'],
      ru: ['Быстрый прогрев и равномерное тепло', 'Регулируемые стяжки — герметичность на годы', 'Дровяная или электрическая печь', 'Панорамное стекло и индивидуальные размеры', 'Устойчива к дождю, снегу и влажности'],
    },
    capacity: [2, 6],
    price: [6000, 12000],
    cover: 'barrel-3',
    images: ['barrel-3', 'barrel-1', 'barrel-2', 'barrel-4', 'barrel-5', 'barrel-6', 'proj-qabala-barrel-1'],
    faq: {
      az: [
        { q: 'Barrel sauna neçə nəfərlikdir?', a: 'Ölçüdən asılı olaraq 2 nəfərdən 6 nəfərədək. Uzunluğu və daxili oturacaq düzülüşünü ehtiyacınıza görə seçirik.' },
        { q: 'Barrel saunanın qiyməti nə qədərdir?', a: 'Təxmini qiymət aralığı 6 000 – 12 000 AZN-dir. Dəqiq qiymət ölçü, daxili taxta, soba növü və əlavə seçimlərə görə hesablanır.' },
        winterFaq.az, stoveFaq.az, regionsFaq.az,
      ],
      en: [
        { q: 'How many people does a barrel sauna seat?', a: 'From 2 up to 6 people depending on the size. We choose the length and bench layout to suit your needs.' },
        { q: 'How much does a barrel sauna cost?', a: 'The approximate price range is 6,000 – 12,000 AZN. The exact price depends on size, interior wood, heater type and extras.' },
        winterFaq.en, stoveFaq.en, regionsFaq.en,
      ],
      ru: [
        { q: 'На сколько человек рассчитана сауна-бочка?', a: 'От 2 до 6 человек в зависимости от размера. Длину и расположение полков подбираем под ваши задачи.' },
        { q: 'Сколько стоит сауна-бочка?', a: 'Ориентировочная цена — 6 000 – 12 000 AZN. Точная стоимость зависит от размера, породы дерева внутри, типа печи и опций.' },
        winterFaq.ru, stoveFaq.ru, regionsFaq.ru,
      ],
    },
    seo: {
      title: { az: 'Barrel Sauna (Çəllək Sauna) – Modellər və Qiymət, Bakı', en: 'Barrel Sauna in Azerbaijan — Prices & Models | Barrel Sauna', ru: 'Баня-бочка в Баку – модели и цены | Barrel Sauna' },
      description: {
        az: 'Barrel sauna tikintisi: çəllək formalı çöl saunaları, 2–6 nəfər, 6 000–12 000 AZN. Listvenica üzlük, lipa interyer, odun və ya elektrik soba. Pulsuz məsləhət.',
        en: 'Barrel saunas built in Azerbaijan: 2–6 people, 6,000–12,000 AZN. Larch exterior, linden interior, wood or electric heater. Free consultation on WhatsApp.',
        ru: 'Сауна-бочка под ключ в Азербайджане: 2–6 человек, 6 000–12 000 AZN. Лиственница снаружи, липа внутри, дровяная или электропечь. Бесплатная консультация.',
      },
      h1: { az: 'Barrel Sauna – Azərbaycanda çəllək formalı çöl saunası', en: 'Barrel Sauna — the classic outdoor barrel sauna', ru: 'Сауна-бочка — классическая уличная сауна' },
    },
  },
  {
    key: 'oval',
    name: { az: 'Yarımdairəvi və Oval Sauna', en: 'Semi-circular & Oval Sauna', ru: 'Полукруглая и овальная сауна' },
    tagline: { az: 'Qövs formalı tavan, premium görünüş', en: 'Arched ceiling, premium look', ru: 'Арочный потолок, премиальный вид' },
    short: {
      az: 'Qövs formalı tavanı sayəsində istiliyi daxildə bərabər yayır və məkana premium görünüş bəxş edir.',
      en: 'Its arched ceiling spreads heat evenly and gives your space a premium look.',
      ru: 'Арочный потолок равномерно распределяет тепло и придаёт участку премиальный вид.',
    },
    intro: {
      az: [
        'Semi-Circular (yarımdairəvi) və Elliptical (oval) saunalar barrel saunanın daha geniş və müasir variantıdır. Xüsusi qövs formalı tavan isti havanı bütün sahəyə bərabər paylayır — sauna otağının hər küncündə eyni rahatlığı hiss edirsiniz.',
        'Geniş daxili həcm 4–8 nəfərlik oturacaq və istəyə görə soyunma/istirahət bölməsi yerləşdirməyə imkan verir. Dairəvi pəncərələr, panoramik şüşə və odun anbarı kimi detallar həyətinizə xüsusi xarakter qatır.',
      ],
      en: [
        'Semi-circular and elliptical (oval) saunas are the roomier, more contemporary evolution of the barrel sauna. The arched ceiling distributes hot air evenly across the whole room, so every corner feels equally comfortable.',
        'The larger volume fits benches for 4–8 people and, if you wish, a changing/relaxation area. Round porthole windows, panoramic glass and built-in log storage give your garden real character.',
      ],
      ru: [
        'Полукруглые (semi-circular) и овальные (elliptical) сауны — более просторное и современное развитие сауны-бочки. Арочный потолок распределяет горячий воздух по всему объёму, поэтому комфортно в каждом углу.',
        'Больший объём позволяет разместить полки на 4–8 человек и, по желанию, предбанник или зону отдыха. Круглые окна, панорамное стекло и дровник придают участку особый характер.',
      ],
    },
    features: {
      az: ['Qövs formalı tavan — istilik bərabər paylanır', '4–8 nəfərlik geniş daxili məkan', 'İstəyə görə soyunma / istirahət bölməsi', 'Dairəvi pəncərə və panoramik şüşə seçimləri', 'Premium dizayn, fərdi ölçülər'],
      en: ['Arched ceiling for even heat', 'Spacious interior for 4–8 people', 'Optional changing / relaxation room', 'Porthole windows and panoramic glass', 'Premium design, custom sizes'],
      ru: ['Арочный потолок — равномерное тепло', 'Просторный интерьер на 4–8 человек', 'Предбанник / зона отдыха по желанию', 'Круглые окна и панорамное стекло', 'Премиальный дизайн, любые размеры'],
    },
    capacity: [4, 8],
    price: [8000, 15000],
    cover: 'oval-1',
    images: ['oval-1', 'oval-2', 'oval-3', 'oval-4', 'oval-5', 'oval-6'],
    faq: {
      az: [
        { q: 'Oval sauna ilə barrel sauna arasında fərq nədir?', a: 'Oval və yarımdairəvi saunalar daha geniş daxili sahəyə malikdir (4–8 nəfər) və adətən soyunma bölməsi ilə qurulur. Barrel sauna isə daha kompaktdır (2–6 nəfər) və daha sürətli isinir.' },
        { q: 'Qiymət aralığı nədir?', a: 'Təxmini qiymət 8 000 – 15 000 AZN-dir; ölçü, bölmələr və seçilən materiallara görə dəqiqləşdirilir.' },
        winterFaq.az, regionsFaq.az,
      ],
      en: [
        { q: 'What is the difference from a barrel sauna?', a: 'Oval and semi-circular saunas have a larger interior (4–8 people) and are usually built with a changing area. A barrel sauna is more compact (2–6 people) and heats up faster.' },
        { q: 'What is the price range?', a: 'Approximately 8,000 – 15,000 AZN, finalised according to size, sections and chosen materials.' },
        winterFaq.en, regionsFaq.en,
      ],
      ru: [
        { q: 'Чем овальная сауна отличается от бочки?', a: 'Овальные и полукруглые сауны просторнее (4–8 человек) и обычно строятся с предбанником. Бочка компактнее (2–6 человек) и прогревается быстрее.' },
        { q: 'Какой диапазон цен?', a: 'Ориентировочно 8 000 – 15 000 AZN; точная цена зависит от размера, количества помещений и материалов.' },
        winterFaq.ru, regionsFaq.ru,
      ],
    },
    seo: {
      title: { az: 'Oval və Yarımdairəvi Sauna — Çöl Saunası | Barrel Sauna', en: 'Oval & Semi-circular Outdoor Sauna | Barrel Sauna Azerbaijan', ru: 'Овальная и полукруглая уличная сауна | Barrel Sauna' },
      description: {
        az: 'Oval (elliptical) və yarımdairəvi çöl saunaları: qövs formalı tavan, 4–8 nəfər, 8 000–15 000 AZN. Fərdi ölçü, soyunma bölməsi, Azərbaycanın hər yerində quraşdırma.',
        en: 'Oval (elliptical) and semi-circular outdoor saunas: arched ceiling, 4–8 people, 8,000–15,000 AZN. Custom sizes, changing room, installed anywhere in Azerbaijan.',
        ru: 'Овальные и полукруглые уличные сауны: арочный потолок, 4–8 человек, 8 000–15 000 AZN. Любые размеры, предбанник, установка по всему Азербайджану.',
      },
      h1: { az: 'Yarımdairəvi və oval çöl saunası', en: 'Semi-circular & oval outdoor sauna', ru: 'Полукруглая и овальная уличная сауна' },
    },
  },
  {
    key: 'cube',
    name: { az: 'Kub Sauna', en: 'Cube Sauna', ru: 'Сауна-куб' },
    tagline: { az: 'Müasir, minimalist və kompakt', en: 'Modern, minimalist and compact', ru: 'Современная, минималистичная, компактная' },
    short: {
      az: 'Müasir və minimalist dizayn sevənlər üçün. Kompakt forması və daxili quruluşu ilə çox rahatdır.',
      en: 'For lovers of modern, minimalist design. Compact outside, comfortable inside.',
      ru: 'Для ценителей современного минимализма. Компактная снаружи, удобная внутри.',
    },
    intro: {
      az: [
        'Kub (Cube) Sauna düz xətləri və yumşaq künclü formasıyla müasir skandinav üslubunu həyətinizə gətirir. Kompakt ölçüsünə baxmayaraq daxili quruluşu çox rahatdır — düz divarlar oturacaqları maksimum səmərəli yerləşdirməyə imkan verir.',
        'Böyük şüşə qapı və pəncərələr təbiət mənzərəsini sauna təcrübəsinin bir hissəsinə çevirir. Qax, İlisudakı layihəmizdə olduğu kimi, dağ mənzərəsi qarşısında quraşdırılan kub sauna həm şəxsi istifadə, həm də qonaq evləri üçün ən populyar seçimlərdəndir.',
      ],
      en: [
        'The Cube Sauna brings clean Scandinavian lines with softly rounded corners to your garden. Compact on the outside yet very comfortable inside — straight walls let us arrange benches as efficiently as possible.',
        'Large glass doors and windows make the view part of the sauna experience. Like our project in Ilisu, Gakh — set right in front of the mountains — the cube sauna is one of the most popular choices for homes and guest houses.',
      ],
      ru: [
        'Сауна-куб — это чистые скандинавские линии и мягко скруглённые углы. Компактная снаружи и очень удобная внутри: прямые стены позволяют максимально рационально расположить полки.',
        'Большие стеклянные двери и окна делают пейзаж частью парения. Как в нашем проекте в Илису (Гах) на фоне гор, куб — один из самых популярных вариантов для частных домов и гостевых домов.',
      ],
    },
    features: {
      az: ['Müasir minimalist dizayn', 'Kompakt ölçü — kiçik həyətlərə də sığır', 'Düz divarlar — rahat oturacaq düzülüşü', 'Böyük şüşə qapı və pəncərə seçimləri', 'Yay və qış üçün düşünülmüş havalandırma'],
      en: ['Modern minimalist design', 'Compact — fits smaller gardens', 'Straight walls for a comfortable bench layout', 'Large glass door and window options', 'Ventilation designed for summer and winter'],
      ru: ['Современный минималистичный дизайн', 'Компактная — подходит для небольших участков', 'Прямые стены — удобная планировка полков', 'Большие стеклянные двери и окна', 'Продуманная вентиляция для лета и зимы'],
    },
    capacity: [2, 6],
    price: [6000, 12000],
    cover: 'proj-ilisu-cube-3',
    images: ['proj-ilisu-cube-3', 'cube-1', 'cube-2', 'cube-3', 'cube-4', 'proj-ilisu-cube-4', 'proj-ilisu-cube-2', 'proj-ilisu-cube-1'],
    faq: {
      az: [
        { q: 'Kub sauna neçə nəfərlikdir?', a: '2 nəfərdən 6 nəfərədək. Ölçünü həyətinizin sahəsinə və istifadəçi sayına görə layihələndiririk.' },
        { q: 'Kub saunanın qiyməti nə qədərdir?', a: 'Təxmini qiymət aralığı 6 000 – 12 000 AZN-dir.' },
        winterFaq.az, stoveFaq.az, baseFaq.az,
      ],
      en: [
        { q: 'How many people fit in a cube sauna?', a: 'From 2 to 6 people. We design the size around your garden and the number of users.' },
        { q: 'How much does a cube sauna cost?', a: 'The approximate price range is 6,000 – 12,000 AZN.' },
        winterFaq.en, stoveFaq.en, baseFaq.en,
      ],
      ru: [
        { q: 'На сколько человек сауна-куб?', a: 'От 2 до 6 человек. Размер проектируем под ваш участок и число пользователей.' },
        { q: 'Сколько стоит сауна-куб?', a: 'Ориентировочная цена — 6 000 – 12 000 AZN.' },
        winterFaq.ru, stoveFaq.ru, baseFaq.ru,
      ],
    },
    seo: {
      title: { az: 'Kub Sauna – Çöl üçün Hazır Kub Saunalar | Barrel Sauna', en: 'Cube Sauna — Modern Outdoor Sauna in Azerbaijan | Barrel Sauna', ru: 'Сауна-куб — современная уличная сауна в Баку | Barrel Sauna' },
      description: {
        az: 'Kub sauna tikintisi Azərbaycanda: müasir minimalist çöl saunası, 2–6 nəfər, 6 000–12 000 AZN. Qax, İlisu layihəsi. Odun və ya elektrik soba. WhatsApp-da yazın.',
        en: 'Cube saunas built in Azerbaijan: modern minimalist outdoor sauna for 2–6 people, 6,000–12,000 AZN. See our Ilisu project. Wood or electric heater.',
        ru: 'Сауна-куб в Азербайджане: современная уличная сауна на 2–6 человек, 6 000–12 000 AZN. Проект в Илису. Дровяная или электрическая печь.',
      },
      h1: { az: 'Kub Sauna tikintisi — müasir çöl saunası', en: 'Cube Sauna — a modern outdoor sauna', ru: 'Сауна-куб — современная уличная сауна' },
    },
  },
  {
    key: 'cabin',
    name: { az: 'Kabin Sauna', en: 'Cabin Sauna', ru: 'Сауна-кабина' },
    tagline: { az: 'Panoramik şüşə fasad, müasir memarlıq', en: 'Panoramic glass façade, modern architecture', ru: 'Панорамный стеклянный фасад, современная архитектура' },
    short: {
      az: 'Düzbucaqlı memarlıq forması və panoramik şüşə fasadı ilə müasir villaların həyətinə premium görünüş qatır.',
      en: 'Rectangular architecture and a panoramic glass façade — a premium look for modern villas.',
      ru: 'Прямоугольная архитектура и панорамный стеклянный фасад — премиальный вид для современных вилл.',
    },
    intro: {
      az: [
        'Kabin sauna düzbucaqlı memarlıq forması və panoramik şüşə fasadı ilə müasir villaların həyətinə premium görünüş qatır. Tünd fasad və isti taxta interyerin kontrastı xüsusilə axşam işıqlandırmasında təsirli görünür.',
        'Düz divar quruluşu daxili sahədən maksimum səmərəli istifadəyə və daha geniş oturacaq rahatlığına imkan verir. 4–8 nəfərlik kabin sauna ailə və dostlarla birlikdə rahat istirahət üçün idealdır — Sea Breeze layihəmiz buna gözəl nümunədir.',
      ],
      en: [
        'The cabin sauna’s rectangular architecture and panoramic glass façade add a premium touch to any modern villa. The contrast of a dark façade and warm wooden interior looks especially striking with evening lighting.',
        'Straight walls make the most of the interior and allow wider, more comfortable benches. For 4–8 people, the cabin sauna is ideal for relaxing with family and friends — our Sea Breeze project is a great example.',
      ],
      ru: [
        'Прямоугольная архитектура и панорамный стеклянный фасад сауны-кабины добавляют премиальности любой современной вилле. Контраст тёмного фасада и тёплого деревянного интерьера особенно эффектен при вечерней подсветке.',
        'Прямые стены позволяют использовать пространство максимально и сделать полки шире и удобнее. Кабина на 4–8 человек идеальна для отдыха с семьёй и друзьями — пример тому наш проект в Sea Breeze.',
      ],
    },
    features: {
      az: ['Panoramik şüşə fasad', 'Daxili sahədən maksimum istifadə', 'Geniş və rahat oturacaqlar', 'Müasir villa memarlığına uyğun dizayn', 'LED işıqlandırma və dekor seçimləri'],
      en: ['Panoramic glass façade', 'Maximum use of interior space', 'Wide, comfortable benches', 'Matches modern villa architecture', 'LED lighting and décor options'],
      ru: ['Панорамный стеклянный фасад', 'Максимум полезного пространства', 'Широкие удобные полки', 'Под архитектуру современной виллы', 'LED-подсветка и варианты декора'],
    },
    capacity: [4, 8],
    price: [8000, 15000],
    cover: 'cabin-2',
    images: ['cabin-2', 'cabin-1', 'cabin-3', 'proj-seabreeze-cabin-2', 'proj-seabreeze-cabin-3', 'proj-seabreeze-cabin-1'],
    faq: {
      az: [
        { q: 'Kabin saunanın qiyməti nə qədərdir?', a: 'Təxmini qiymət aralığı 8 000 – 15 000 AZN-dir; ölçü, şüşə sahəsi və daxili materiallara görə dəqiqləşir.' },
        { q: 'Panoramik şüşə istini itirmirmi?', a: 'Saunalar üçün nəzərdə tutulmuş temperli şüşə istifadə olunur, divar və tavan isə çoxtəbəqəli izolyasiya ilə qurulur. Düzgün seçilmiş soba gücü ilə sauna rahat isinir.' },
        stoveFaq.az, regionsFaq.az,
      ],
      en: [
        { q: 'How much does a cabin sauna cost?', a: 'Approximately 8,000 – 15,000 AZN, depending on size, glass area and interior materials.' },
        { q: 'Doesn’t the panoramic glass lose heat?', a: 'We use tempered glass designed for saunas, and the walls and ceiling are built with multilayer insulation. With a correctly sized heater the sauna heats up comfortably.' },
        stoveFaq.en, regionsFaq.en,
      ],
      ru: [
        { q: 'Сколько стоит сауна-кабина?', a: 'Ориентировочно 8 000 – 15 000 AZN — в зависимости от размера, площади остекления и материалов.' },
        { q: 'Не теряет ли панорамное стекло тепло?', a: 'Мы используем закалённое стекло для саун, а стены и потолок утепляем многослойно. При правильно подобранной мощности печи сауна прогревается комфортно.' },
        stoveFaq.ru, regionsFaq.ru,
      ],
    },
    seo: {
      title: { az: 'Kabin Sauna — Panoramik Şüşəli Çöl Saunası | Barrel Sauna', en: 'Cabin Sauna with Panoramic Glass | Barrel Sauna Azerbaijan', ru: 'Сауна-кабина с панорамным остеклением | Barrel Sauna' },
      description: {
        az: 'Kabin sauna: düzbucaqlı memarlıq, panoramik şüşə fasad, 4–8 nəfər, 8 000–15 000 AZN. Müasir villalar üçün premium çöl saunası. Pulsuz layihə məsləhəti.',
        en: 'Cabin sauna: rectangular architecture, panoramic glass façade, 4–8 people, 8,000–15,000 AZN. A premium outdoor sauna for modern villas in Azerbaijan.',
        ru: 'Сауна-кабина: прямоугольная архитектура, панорамный фасад, 4–8 человек, 8 000–15 000 AZN. Премиальная уличная сауна для современных вилл.',
      },
      h1: { az: 'Kabin Sauna — panoramik şüşəli çöl saunası', en: 'Cabin Sauna with a panoramic glass façade', ru: 'Сауна-кабина с панорамным фасадом' },
    },
  },
  {
    key: 'cottage',
    name: { az: 'Kotec Sauna', en: 'Cottage Sauna', ru: 'Сауна-коттедж' },
    tagline: { az: 'Ev dizaynında sauna və istirahət kompleksi', en: 'A house-style sauna and wellness retreat', ru: 'Сауна и зона отдыха в форме домика' },
    short: {
      az: 'Klassik ev dizaynı ilə sauna təcrübəsi. Ölçü, forma və görünüş baxımından tam fərdiləşdirilir.',
      en: 'A sauna in classic house form — fully customisable in size, shape and look.',
      ru: 'Сауна в форме классического домика — полностью настраивается по размеру, форме и виду.',
    },
    intro: {
      az: [
        'Kotec (Cottage) Sauna klassik ev dizaynı ilə sauna təcrübəsi təqdim edir. Bu dizayn həm ölçü, həm forma, həm də görünüş baxımından bütün dəyişikliklərə uyğundur — kiçik bağ saunasından tam istirahət evinə qədər.',
        'Kompleks daxilində sauna otağı, buxar otağı, duz otağı, türk hamamı, süpürgə (venik) otağı, masaj otağı, isti/soyuq vanna və ya hovuz, sanuzel/WC və istirahət otağı birləşdirilə bilər. İsmayıllıda tikdiyimiz kotec sauna layihəsi bu imkanları bir yerdə göstərir.',
      ],
      en: [
        'The Cottage Sauna offers the sauna experience in a classic house form. The design adapts to any change in size, shape and appearance — from a small garden sauna to a full retreat house.',
        'It can combine a sauna room, steam room, salt room, Turkish hammam, broom (venik) room, massage room, hot/cold tub or pool, bathroom/WC and a lounge. Our cottage sauna in Ismayilli shows these possibilities under one roof.',
      ],
      ru: [
        'Сауна-коттедж — это парение в доме классической формы. Проект подстраивается под любые размеры, формы и стиль — от небольшой садовой сауны до полноценного банного дома.',
        'Внутри можно объединить сауну, парную, соляную комнату, турецкий хамам, комнату для веников, массажную, горячую/холодную купель или бассейн, санузел и комнату отдыха. Наш коттедж в Исмаиллы показывает все эти возможности под одной крышей.',
      ],
    },
    features: {
      az: ['Klassik ev memarlığı', 'Sauna, buxar, duz otağı, hamam — bir binada', 'İsti/soyuq vanna və ya hovuz inteqrasiyası', 'İstirahət otağı, sanuzel və WC', 'Tam fərdi layihə və 3D vizualizasiya'],
      en: ['Classic house architecture', 'Sauna, steam room, salt room, hammam — under one roof', 'Hot/cold tub or pool integration', 'Lounge, bathroom and WC', 'Fully custom design with 3D visualisation'],
      ru: ['Классическая архитектура домика', 'Сауна, парная, соляная комната, хамам — под одной крышей', 'Горячая/холодная купель или бассейн', 'Комната отдыха, санузел, WC', 'Индивидуальный проект с 3D-визуализацией'],
    },
    capacity: [4, 20],
    price: [10000, 50000],
    cover: 'proj-ismayilli-cottage-3',
    images: ['proj-ismayilli-cottage-3', 'cottage-1', 'cottage-2', 'cottage-3', 'cottage-4', 'proj-ismayilli-cottage-1', 'proj-ismayilli-cottage-7', 'proj-ismayilli-cottage-12'],
    faq: {
      az: [
        { q: 'Kotec saunada hansı otaqlar ola bilər?', a: 'Sauna otağı, buxar otağı, duz otağı, türk hamamı, süpürgə otağı, masaj otağı, isti/soyuq vanna və ya hovuz, sanuzel/WC və istirahət otağı — ehtiyacınıza görə istənilən kombinasiya.' },
        { q: 'Kotec saunanın qiyməti nə qədərdir?', a: 'Ölçü və tərkibə görə təxminən 10 000 – 50 000 AZN. Layihə 3D vizualizasiya ilə təsdiqlənir.' },
        { q: 'Neçə nəfər üçün nəzərdə tutulub?', a: '4 nəfərdən 20 nəfərədək — ailə istifadəsindən istirahət mərkəzlərinə qədər.' },
        regionsFaq.az,
      ],
      en: [
        { q: 'Which rooms can a cottage sauna include?', a: 'Sauna room, steam room, salt room, Turkish hammam, broom room, massage room, hot/cold tub or pool, bathroom/WC and a lounge — any combination you need.' },
        { q: 'How much does a cottage sauna cost?', a: 'Approximately 10,000 – 50,000 AZN depending on size and rooms. Every project is approved with a 3D visualisation.' },
        { q: 'How many people is it for?', a: 'From 4 up to 20 people — from family use to recreation centres.' },
        regionsFaq.en,
      ],
      ru: [
        { q: 'Какие помещения могут быть в сауне-коттедже?', a: 'Сауна, парная, соляная комната, турецкий хамам, комната для веников, массажная, горячая/холодная купель или бассейн, санузел/WC и комната отдыха — в любой комбинации.' },
        { q: 'Сколько стоит сауна-коттедж?', a: 'Ориентировочно 10 000 – 50 000 AZN в зависимости от размера и состава помещений. Проект утверждается по 3D-визуализации.' },
        { q: 'На сколько человек?', a: 'От 4 до 20 человек — от семейного использования до баз отдыха.' },
        regionsFaq.ru,
      ],
    },
    seo: {
      title: { az: 'Kotec Sauna — Hamam, Buxar və Duz Otaqlı Sauna Evi | Barrel Sauna', en: 'Cottage Sauna House with Steam & Salt Room | Barrel Sauna', ru: 'Сауна-коттедж: баня, хамам, соляная комната | Barrel Sauna' },
      description: {
        az: 'Kotec sauna: sauna, buxar otağı, duz otağı, türk hamamı, hovuz və istirahət otağı bir binada. 4–20 nəfər, 10 000–50 000 AZN. İsmayıllı layihəsinə baxın.',
        en: 'Cottage sauna house: sauna, steam room, salt room, Turkish hammam, pool and lounge under one roof. 4–20 people, 10,000–50,000 AZN. See our Ismayilli project.',
        ru: 'Сауна-коттедж: сауна, парная, соляная комната, хамам, купель и комната отдыха под одной крышей. 4–20 человек, 10 000–50 000 AZN.',
      },
      h1: { az: 'Kotec Sauna — ev dizaynında sauna kompleksi', en: 'Cottage Sauna — a house-style sauna retreat', ru: 'Сауна-коттедж — банный дом под ключ' },
    },
  },
  {
    key: 'spa',
    name: { az: 'Outdoor SPA Kompleks', en: 'Outdoor Spa Complex', ru: 'Уличный SPA-комплекс' },
    tagline: { az: 'Həyətinizdə 5 ulduzlu SPA', en: 'A five-star spa in your own garden', ru: 'Пятизвёздочный SPA у вас во дворе' },
    short: {
      az: 'Sauna, buxar, duz otağı, hamam, masaj və hovuzu bir araya gətirən fərdi SPA və sağlamlıq mərkəzi.',
      en: 'A private spa uniting sauna, steam, salt room, hammam, massage and pool.',
      ru: 'Частный SPA: сауна, парная, соляная комната, хамам, массаж и купель вместе.',
    },
    intro: {
      az: [
        'Outdoor SPA kompleksi sauna otağı, buxar otağı, duz otağı, türk hamamı, süpürgə otağı, masaj otağı, isti/soyuq vanna və ya hovuz, sanuzel, WC və istirahət otağını bir araya gətirir.',
        'Hər detalı incəliklə düşünülmüş bu layihə evinizin həyətində 5 ulduzlu otel səviyyəsində fərdi SPA və sağlamlıq mərkəzi yaradır. Bütün bərpaedici prosedurları vahid məkanda birləşdirərək maksimum rahatlıq və dincəlmə bəxş edir. Qəbələdə tikdiyimiz SPA kompleksi otel və istirahət mərkəzləri üçün də ideal həll olduğunu göstərir.',
      ],
      en: [
        'An outdoor spa complex brings together a sauna room, steam room, salt room, Turkish hammam, broom room, massage room, hot/cold tub or pool, bathroom, WC and lounge.',
        'Every detail is carefully thought through to create a private, five-star-hotel-level spa and wellness centre in your own garden — all restorative treatments in one place for maximum comfort. Our spa complex in Gabala shows why it is also a perfect solution for hotels and resorts.',
      ],
      ru: [
        'Уличный SPA-комплекс объединяет сауну, парную, соляную комнату, турецкий хамам, комнату для веников, массажную, горячую/холодную купель или бассейн, санузел, WC и комнату отдыха.',
        'Продуманный до мелочей проект создаёт у вас во дворе частный SPA-центр уровня пятизвёздочного отеля — все восстановительные процедуры в одном месте. Наш SPA-комплекс в Габале показывает, что это идеальное решение и для отелей и баз отдыха.',
      ],
    },
    features: {
      az: ['Bütün SPA prosedurları bir məkanda', 'Otel və istirahət mərkəzləri üçün ideal', 'Hovuz və isti/soyuq vanna inteqrasiyası', 'Dekorativ daş, Himalay duzu, kötük dekoru', 'Layihələndirmədən quraşdırmaya qədər tam xidmət'],
      en: ['Every spa treatment in one place', 'Ideal for hotels and resorts', 'Pool and hot/cold tub integration', 'Decorative stone, Himalayan salt and log décor', 'Full service from design to installation'],
      ru: ['Все SPA-процедуры в одном месте', 'Идеально для отелей и баз отдыха', 'Бассейн и горячая/холодная купель', 'Декоративный камень, гималайская соль, спилы', 'Полный цикл — от проекта до монтажа'],
    },
    capacity: [4, 15],
    price: [15000, 45000],
    cover: 'proj-qabala-spa-2',
    images: ['proj-qabala-spa-2', 'spa-1', 'spa-2', 'spa-3', 'spa-4', 'proj-qabala-spa-1', 'proj-qabala-spa-3', 'proj-qabala-spa-5'],
    faq: {
      az: [
        { q: 'SPA kompleksinin qiyməti nə qədərdir?', a: 'Tərkib və ölçüdən asılı olaraq təxminən 15 000 – 45 000 AZN.' },
        { q: 'Otel və istirahət mərkəzləri üçün uyğundurmu?', a: 'Bəli. 4–15 nəfərlik tutumu ilə qonaqlara əlavə xidmət və cazibə yaradır. Qəbələdə belə bir kompleks tikmişik.' },
        stoveFaq.az, regionsFaq.az,
      ],
      en: [
        { q: 'How much does a spa complex cost?', a: 'Approximately 15,000 – 45,000 AZN depending on rooms and size.' },
        { q: 'Is it suitable for hotels and resorts?', a: 'Yes. With a capacity of 4–15 people it adds a strong attraction for guests. We have built one in Gabala.' },
        stoveFaq.en, regionsFaq.en,
      ],
      ru: [
        { q: 'Сколько стоит SPA-комплекс?', a: 'Ориентировочно 15 000 – 45 000 AZN в зависимости от состава и площади.' },
        { q: 'Подходит ли для отелей и баз отдыха?', a: 'Да. Вместимость 4–15 человек — отличная дополнительная услуга для гостей. Такой комплекс мы построили в Габале.' },
        stoveFaq.ru, regionsFaq.ru,
      ],
    },
    seo: {
      title: { az: 'Outdoor SPA Kompleks — Sauna, Hamam, Hovuz | Barrel Sauna', en: 'Outdoor Spa Complex for Homes & Hotels | Barrel Sauna', ru: 'Уличный SPA-комплекс для дома и отеля | Barrel Sauna' },
      description: {
        az: 'Həyətinizdə SPA: sauna, buxar otağı, duz otağı, türk hamamı, masaj və hovuz bir kompleksdə. 4–15 nəfər, 15 000–45 000 AZN. Qəbələ layihəsi.',
        en: 'A private spa in your garden: sauna, steam room, salt room, hammam, massage and pool in one complex. 4–15 people, 15,000–45,000 AZN. Gabala project.',
        ru: 'SPA у вас во дворе: сауна, парная, соляная комната, хамам, массаж и бассейн в одном комплексе. 4–15 человек, 15 000–45 000 AZN.',
      },
      h1: { az: 'Outdoor SPA kompleks — həyətinizdə fərdi SPA', en: 'Outdoor spa complex — a private spa at home', ru: 'Уличный SPA-комплекс — частный SPA у дома' },
    },
  },
];

export const modelByKey = (k: string) => MODELS.find((m) => m.key === k)!;
