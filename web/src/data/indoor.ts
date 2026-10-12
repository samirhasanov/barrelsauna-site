import type { L } from './site';

export interface Wood {
  id: string;
  name: L;
  text: L;
  images: string[];
}

/** Indoor sauna wood options — texts from the company PDF */
export const WOODS: Wood[] = [
  {
    id: 'lipa',
    name: { az: 'Lipa (Cökə)', en: 'Linden (Lipa)', ru: 'Липа' },
    text: {
      az: 'Lipa ağacı qatran buraxmayan, hamar səthli və ekoloji təmiz quruluşu ilə saunalar üçün ideal, ənənəvi üzlük materialıdır. Açıq rəng tonu ilə məkana işıqlı, fərah görünüş qazandırır və yüksək temperaturda dəri ilə təmasda olduqda bədəni yandırmır.',
      en: 'Linden releases no resin, has a smooth surface and an eco-friendly structure — the ideal, traditional sauna lining. Its light tone makes the room bright and airy, and it does not burn the skin even at high temperatures.',
      ru: 'Липа не выделяет смолу, имеет гладкую поверхность и экологически чистую структуру — идеальный, традиционный материал для отделки сауны. Светлый тон делает помещение светлым и просторным, а при высокой температуре древесина не обжигает кожу.',
    },
    images: ['wood-lipa-1', 'wood-lipa-2', 'wood-lipa-3', 'wood-lipa-4'],
  },
  {
    id: 'termo-lipa',
    name: { az: 'Termo Lipa', en: 'Thermo Linden', ru: 'Термолипа' },
    text: {
      az: 'Termo lipa xüsusi termik işlənmə prosesindən keçdiyi üçün rütubətə, çürüməyə və deformasiyaya qarşı qeyri-adi dözümlülük qazanmış yüksək keyfiyyətli taxtadır. Özünəməxsus tünd karamel rəngi və yüngül, xoş qoxusu ilə saunanın interyerinə xüsusi lüks və isti atmosfer qatır.',
      en: 'Thermo linden goes through a special heat-treatment process that gives it exceptional resistance to moisture, rot and deformation. Its distinctive dark caramel colour and light, pleasant scent create a warm, luxurious atmosphere.',
      ru: 'Термолипа проходит специальную термообработку, благодаря которой приобретает исключительную стойкость к влаге, гниению и деформации. Характерный тёмно-карамельный цвет и лёгкий приятный аромат создают в сауне тёплую, роскошную атмосферу.',
    },
    images: ['wood-termo-lipa-2', 'wood-termo-lipa-1', 'wood-termo-lipa-3', 'wood-termo-lipa-4'],
  },
  {
    id: 'abachi',
    name: { az: 'Abaşi (Abachi / Ayous)', en: 'Abachi (Ayous)', ru: 'Абаши (Ayous)' },
    text: {
      az: 'İstilik keçiriciliyi çox aşağı olduğu üçün yüksək temperaturda belə qızmır və bu xüsusiyyəti onu sauna oturacaqları üçün dünya standartında bir nömrəli material edir. Tamamilə düyünsüz, yumşaq və qıymıq çıxarmayan strukturu sayəsində çılpaq bədənlə təmasda maksimum komfort və təhlükəsizlik təmin edir.',
      en: 'With very low thermal conductivity, abachi stays cool to the touch even at high temperatures — which makes it the world’s number-one material for sauna benches. Completely knot-free, soft and splinter-free, it is perfectly comfortable and safe against bare skin.',
      ru: 'Благодаря очень низкой теплопроводности абаши не нагревается даже при высокой температуре — поэтому это материал №1 в мире для полков. Без сучков, мягкая и без заноз, древесина максимально комфортна и безопасна при контакте с кожей.',
    },
    images: ['wood-abachi-2', 'wood-abachi-1', 'wood-abachi-3', 'wood-abachi-4'],
  },
  {
    id: 'kedr',
    name: { az: 'Kedr (Sidr)', en: 'Cedar', ru: 'Кедр' },
    text: {
      az: 'Tərkibindəki təbii efir yağları sayəsində kedr ağacı saunanın daxilində antibakterial mühit və insanı rahatlaşdıran unikal aromaterapiya effekti yaradır. Nəmə, kiflənməyə və göbələklərə qarşı yüksək təbii müqaviməti onu uzunömürlü, premium layihələrin əvəzolunmaz materialına çevirir.',
      en: 'Natural essential oils in cedar create an antibacterial environment and a unique, relaxing aromatherapy effect. Its high natural resistance to moisture, mould and fungi makes it the go-to material for long-lasting premium projects.',
      ru: 'Натуральные эфирные масла кедра создают антибактериальную среду и уникальный расслабляющий эффект ароматерапии. Высокая природная стойкость к влаге, плесени и грибку делает кедр незаменимым материалом для долговечных премиальных проектов.',
    },
    images: ['wood-kedr-1', 'wood-kedr-2', 'wood-kedr-3', 'wood-kedr-4'],
  },
  {
    id: 'wild',
    name: { az: 'Wild Sauna (Vəhşi sauna)', en: 'Wild Sauna', ru: 'Дикая сауна' },
    text: {
      az: 'Tamamilə saf cökə ağacının bütöv kötüklərindən inşa edilən “Vəhşi sauna” modeli sənaye emalından uzaq təbii toxuması və bənzərsiz ağac qoxusu ilə məkanınıza həqiqi meşə ab-havası qazandırır. Kütləvi cökə gövdələri həm mükəmməl istilik izolyasiyası təmin edir, həm də sizə vəhşi təbiətin ortasındaymış kimi unikal rahatlıq bəxş edir.',
      en: 'Built from whole logs of pure linden, the “Wild Sauna” brings a true forest atmosphere with its raw, unprocessed texture and unmistakable scent of wood. The massive linden trunks provide excellent insulation and make you feel as if you were in the middle of the wilderness.',
      ru: '«Дикая сауна» строится из цельных стволов чистой липы: необработанная фактура и неповторимый древесный аромат создают настоящую атмосферу леса. Массивные липовые бревна дают отличную теплоизоляцию и ощущение, будто вы в самом сердце дикой природы.',
    },
    images: ['wood-wild-2', 'wood-wild-1', 'wood-wild-3', 'wood-wild-4'],
  },
];

export const INDOOR_RENDERS = ['render-1', 'render-2', 'render-3', 'render-4', 'render-5', 'render-6', 'render-7', 'render-8'];
export const INDOOR_PROJECTS = Array.from({ length: 20 }, (_, i) => `indoor-proj-${i + 1}`);
